import type { HttpClient } from "./HttpClient";

export abstract class Manager {
  constructor(protected readonly http: HttpClient) {}
}
