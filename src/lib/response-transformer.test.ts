import { describe, expect, test } from "bun:test";
import {
	hydrateApiResponse,
	hydrateValueWithSchema,
} from "./response-transformer";
import type { ModelRegistry } from "./response-schema";

describe("hydrateValueWithSchema", () => {
	test("converts only documented date fields recursively", () => {
		const registry: ModelRegistry = {
			Root: {
				CreatedAt: { kind: "date" },
				Child: { kind: "model", model: "Child" },
				Items: {
					kind: "array",
					item: { kind: "model", model: "Child" },
				},
			},
			Child: {
				PublishedAt: { kind: "date" },
			},
		};

		const value = {
			CreatedAt: "2026-03-06T09:47:51Z",
			Title: "Keep me as a string",
			Child: {
				PublishedAt: "2026-03-07T10:00:00Z",
				Label: "Still a string",
			},
			Items: [
				{
					PublishedAt: null,
				},
				{
					PublishedAt: "not-a-date",
				},
			],
		};

		const hydratedValue = hydrateValueWithSchema(
			value,
			{ kind: "model", model: "Root" },
			registry,
		);

		expect(hydratedValue.CreatedAt).toBeInstanceOf(Date);
		expect(hydratedValue.Title).toBe("Keep me as a string");
		expect(hydratedValue.Child.PublishedAt).toBeInstanceOf(Date);
		expect(hydratedValue.Child.Label).toBe("Still a string");
		expect(hydratedValue.Items[0].PublishedAt).toBeNull();
		expect(hydratedValue.Items[1].PublishedAt).toBe("not-a-date");
	});
});

describe("hydrateApiResponse", () => {
	test("hydrates documented dates for a route backed by a docs response model", () => {
		const response = {
			EventUrl: "https://example.test/event",
			HasMoreContent: false,
			Bookings: [{ Name: "Room 101" }],
			ElementLinks: [],
			PlanLinks: [],
			EventId: 42,
			FromDate: "2026-03-06T09:47:51Z",
			ToDate: "2026-03-06T10:47:51Z",
			EventTitle: "Math",
			Description: "Class",
			ImportDescription: "Imported",
			EventType: "Course",
			LocationId: 1,
			LocationGroupId: 2,
			LocationColor: "#fff",
			LocationFillColor: "#000",
			LocationTitle: "Main",
			LocationFriendlyName: "Room 101",
			HidePersonalWordForPersonalEvent: false,
			AttendanceDetails: {
				KeepAttendancePageUrl: "https://example.test/attendance",
				AttendanceStatistics: {
					Present: 1,
					Absent: 0,
					Excluded: 0,
				},
			},
		};

		const hydratedResponse = hydrateApiResponse(
			"GET",
			"/restapi/personal/calendar/events/42/v1",
			response,
		);

		expect(hydratedResponse.FromDate).toBeInstanceOf(Date);
		expect(hydratedResponse.ToDate).toBeInstanceOf(Date);
		expect(hydratedResponse.EventUrl).toBe("https://example.test/event");
	});

	test("hydrates nested entity lists without converting non-date strings", () => {
		const response = {
			AssessmentRecordItems: [
				{
					GradeBookItemId: 1,
					Title: "Essay",
					Weight: 1,
					WhenToShowResult: "Immediately",
					AssessmentId: 2,
					IsFinal: false,
					IsPassedDeadline: false,
					TermId: 3,
					CategoryId: 4,
					ElementType: "Assignment",
					ElementId: 5,
					MaxScore: 100,
					UseScore: true,
					IsActive: true,
					IsAssessmentVisible: true,
					IsCustomAssessmentVisible: true,
					IsReadOnly: false,
					LearningToolId: 0,
					Deadline: "2026-03-06T09:47:51Z",
					FormattedDeadline: "Tomorrow at 10:47",
					IsLearningPathSubElement: false,
				},
			],
			FinalAssessmentRecordItems: [],
			AssessmentScales: [],
		};

		const hydratedResponse = hydrateApiResponse(
			"GET",
			"/restapi/personal/course/12/assessmentrecord/assessmentrecordelements/v1",
			response,
		);

		expect(
			hydratedResponse.AssessmentRecordItems[0].Deadline,
		).toBeInstanceOf(Date);
		expect(hydratedResponse.AssessmentRecordItems[0].FormattedDeadline).toBe(
			"Tomorrow at 10:47",
		);
	});

	test("hydrates array responses using route metadata", () => {
		const response = [
			{
				Date: "2026-03-06T09:47:51Z",
				Courses: [],
			},
		];

		const hydratedResponse = hydrateApiResponse(
			"GET",
			"/restapi/personal/children/9/upcoming/v1",
			response,
		);

		expect(hydratedResponse[0].Date).toBeInstanceOf(Date);
	});
});
