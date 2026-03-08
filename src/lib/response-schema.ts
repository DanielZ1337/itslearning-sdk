export type HydrationSchema =
	| {
			kind: "date";
	  }
	| {
			kind: "model";
			model: string;
	  }
	| {
			kind: "array";
			item: HydrationSchema;
	  }
	| {
			kind: "primitive";
	  };

export type ModelSchema = Record<string, HydrationSchema>;

export type ModelRegistry = Record<string, ModelSchema>;

export type ResponseMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type ResponseRoute = {
	method: ResponseMethod;
	pathTemplate: string;
	schema: HydrationSchema;
};
