export interface PaginationParams {
	PageIndex?: number;
	PageSize?: number;
}

export function paginate<T>(
	fetchFunction: (params: PaginationParams) => Promise<T[]>,
	params: PaginationParams = {},
): AsyncGenerator<T[], void, unknown> {
	let pageIndex = params.PageIndex ?? 0;
	const pageSize = params.PageSize ?? 100;

	return {
		async next() {
			const data = await fetchFunction({
				PageIndex: pageIndex,
				PageSize: pageSize,
			});
			if (data.length === 0) {
				return { done: true, value: undefined };
			}
			pageIndex += 1;
			return { done: false, value: data };
		},
		[Symbol.asyncIterator]() {
			return this;
		},
		return: (
			value: void | PromiseLike<void>,
		): Promise<IteratorResult<T[], void>> => {
			throw new Error("Function not implemented.");
		},
		throw: (e: Error): Promise<IteratorResult<T[], void>> => {
			throw new Error("Function not implemented.");
		},
		[Symbol.asyncDispose]: (): PromiseLike<void> => {
			throw new Error("Function not implemented.");
		},
	};
}
