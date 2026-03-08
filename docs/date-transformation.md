# Date Transformation

The SDK hydrates documented response date fields into real JavaScript `Date`
objects before returning data to consumers.

## Source of truth

- The source of truth is the vendored help-site mirror in
  `vendor/itslearning-help`.
- Model pages under `vendor/itslearning-help/ResourceModel/` mark date
  properties with the literal type `date`.
- Endpoint pages under `vendor/itslearning-help/Api/` expose the documented
  response model under
  `Response Information -> Resource Description`.

## Generated metadata

Refresh the vendored docs mirror:

```bash
npm run sync:help
```

Generate the runtime/type metadata from the vendored mirror:

```bash
npm run generate:dates
```

Do both in one step:

```bash
npm run refresh:dates
```

The generator updates:

- `src/lib/generated/date-model-registry.ts`
  Docs-derived model/property registry used for hydration.
- `src/lib/generated/response-route-registry.ts`
  Docs-derived route-to-response-schema registry.
- Response model type files under `src/types/...`
  Documented response date properties are rewritten from `string` to `Date`
  while preserving `null`/`undefined` unions where they already exist.

## Runtime flow

- `HttpClient` resolves the request route and HTTP method.
- `response-transformer.ts` looks up the documented response schema in the
  generated route registry.
- Only documented date fields are parsed.
- Nested models, arrays, and entity-list wrappers are handled recursively.
- Invalid or empty documented date strings are left unchanged instead of being
  coerced.

## Request serialization

- Query parameters already serialize `Date` via `createSearchParams()`.
- JSON request bodies now serialize nested `Date` objects to ISO strings
  centrally in `src/utils/request-body.ts`.
- `FormData` payloads are left untouched.

## Maintenance notes

- `npm run sync:help` refreshes the vendored docs mirror from
  `https://www.itslearning.com/restapi/help/`.
- The mirror uses short hashed filenames plus `vendor/itslearning-help/manifest.json`
  to keep Windows-safe path lengths while preserving a stable URL-to-file map.
- Re-run the generator whenever the vendored help-site export changes or
  response models are added.
- Review the generated diffs, especially if the docs change a response model.
- `npm run verify:dates` regenerates the date metadata and fails if the checked
  in generated files are out of date.
- CI runs `verify:dates`, tests, and build on pushes and pull requests.
- Some SDK methods are still typed as `unknown` or otherwise broader/narrower
  than the help site. The hydration layer still uses the docs at runtime, but
  those broader typing mismatches remain separate work.
