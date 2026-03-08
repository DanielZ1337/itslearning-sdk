import { describe, expect, test } from "bun:test";
import { createSearchParams } from "../utils/search-params";
import { AuthManager } from "./AuthManager";
import { ConfigManager } from "./ConfigManager";
import { HttpClient } from "./HttpClient";

function createHttpClient() {
	const config = new ConfigManager(
		"client-id",
		"https://example.test/callback",
		"https://example.test",
		"access-token",
	);
	const auth = new AuthManager(config);

	return new HttpClient(config, auth);
}

describe("HttpClient", () => {
	test("preserves query params and hydrates response dates for GET requests", async () => {
		const http = createHttpClient();
		let requestedUrl = "";

		(http as any).client.get = async (url: string) => {
			requestedUrl = url;

			return {
				data: {
					EntityArray: [
						{
							Id: 1,
							FromDate: "2026-03-06T09:47:51Z",
							ToDate: "2026-03-06T10:47:51Z",
							EventTitle: "Science",
							Description: "Lab",
							ImportDescription: "Imported",
							CourseId: 5,
							CourseGroupId: 6,
							LocationColor: "#fff",
							LocationFillColor: "#000",
							LocationTitle: "Main",
							LocationFriendlyName: "Lab 2",
							AttendanceDetails: {
								KeepAttendancePageUrl: "https://example.test/attendance",
								AttendanceStatistics: {
									Present: 1,
									Absent: 0,
									Excluded: 0,
								},
							},
						},
					],
					Total: 1,
					CurrentPageIndex: 0,
					PageSize: 10,
				},
			};
		};

		const response = await http.get<any>(
			"/restapi/personal/courses/12/calendarevents/v1",
			{
				params: createSearchParams({
					PageIndex: 0,
					PageSize: 10,
					fromDate: new Date("2026-03-06T09:47:51Z"),
					toDate: new Date("2026-03-07T09:47:51Z"),
				}),
			},
		);

		expect(requestedUrl).toContain("/restapi/personal/courses/12/calendarevents/v1");
		expect(requestedUrl).toContain("fromDate=2026-03-06T09%3A47%3A51.000Z");
		expect(requestedUrl).toContain("toDate=2026-03-07T09%3A47%3A51.000Z");
		expect(requestedUrl).toContain("access_token=access-token");
		expect(response.EntityArray[0].FromDate).toBeInstanceOf(Date);
		expect(response.EntityArray[0].ToDate).toBeInstanceOf(Date);
	});

	test("serializes request Date objects and hydrates POST responses", async () => {
		const http = createHttpClient();
		let capturedBody: unknown;

		(http as any).client.post = async (_url: string, data: unknown) => {
			capturedBody = data;

			return {
				data: {
					Id: 1,
					Author: {
						PersonId: 2,
						FirstName: "Ada",
						LastName: "Lovelace",
						FullName: "Ada Lovelace",
						ProfileUrl: "https://example.test/profile/2",
						AddttionalInfo: "",
						ProfileImageUrl: "",
						ProfileImageUrlSmall: "",
					},
					CommentText: "Hello",
					AllowEditComment: true,
					AllowDeleteComment: true,
					CreatedDateTime: "2026-03-06T09:47:51Z",
					IsRead: false,
				},
			};
		};

		const response = await http.post<any>(
			"/restapi/personal/lightbulletins/123/comments/v1",
			{
				data: {
					Subject: "Hello",
					SendAt: new Date("2026-03-06T09:47:51Z"),
					Metadata: {
						PublishedAt: new Date("2026-03-07T09:47:51Z"),
					},
				},
			},
		);

		expect(capturedBody).toEqual({
			Subject: "Hello",
			SendAt: "2026-03-06T09:47:51.000Z",
			Metadata: {
				PublishedAt: "2026-03-07T09:47:51.000Z",
			},
		});
		expect(response.CreatedDateTime).toBeInstanceOf(Date);
	});
});
