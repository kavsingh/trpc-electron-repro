import { defineConfig } from "tsup";

export default defineConfig([
	{ entry: ["./main.ts", "./renderer.ts"], splitting: true, format: ["esm"] },
	{ entry: ["./preload.cts"], format: ["cjs"] },
]);
