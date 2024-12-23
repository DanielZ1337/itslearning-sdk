export type PaginatedResponse<T> = {
  Total: number;
  CurrentPageIndex: number;
  PageSize: number;
  EntityArray: T[];
};
