import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: ["src/index.ts"],
    outDir: "dist",
    format: ["cjs", "esm"],
    sourcemap: true,
    clean: true,
    dts: true,
    splitting: false,
  },
  {
    entry: ["src/types/index.ts"],
    outDir: "dist/types",
    format: ["esm"],
    sourcemap: true,
    clean: true,
    dts: true,
    splitting: false,
  },
]);
