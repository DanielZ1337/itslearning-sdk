import { basename } from "node:path";
import { describe, expect, test } from "bun:test";
import { urlToFilePath } from "./sync-help-site.mjs";

describe("urlToFilePath", () => {
	test("keeps the root help index at a stable path", () => {
		const filePath = urlToFilePath("https://www.itslearning.com/restapi/help/");

		expect(filePath.replace(/\\/g, "/")).toEndWith(
			"/vendor/itslearning-help/index/index.html",
		);
	});

	test("stores api pages under a short windows-safe filename", () => {
		const filePath = urlToFilePath(
			"https://www.itslearning.com/restapi/help/Api/GET-restapi-personal-course-courseId-assessmentrecord-assessmentrecordpersonitems-v1_termId_paging.PageIndex_paging.PageSize_searchText_groupIds[0]_groupIds[1]_includePersonsNotInAnyGroups",
		);
		const normalizedPath = filePath.replace(/\\/g, "/");
		const fileName = basename(filePath);

		expect(normalizedPath).toContain("/vendor/itslearning-help/Api/");
		expect(fileName).toMatch(/^[a-z0-9-]+__[a-f0-9]{10}\.html$/);
		expect(fileName.length).toBeLessThan(110);
		expect(normalizedPath.length).toBeLessThan(200);
	});

	test("stores resource model pages under the ResourceModel bucket", () => {
		const filePath = urlToFilePath(
			"https://www.itslearning.com/restapi/help/ResourceModel?modelName=Itslearning.RestApi.Entities.Message",
		);
		const normalizedPath = filePath.replace(/\\/g, "/");
		const fileName = basename(filePath);

		expect(normalizedPath).toContain("/vendor/itslearning-help/ResourceModel/");
		expect(fileName).toMatch(
			/^itslearning-restapi-entities-message__[a-f0-9]{10}\.html$/,
		);
	});
});
