import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// CRA resolved bare imports against `src` (jsconfig baseUrl). Recreate that as
// explicit Vite aliases so existing imports like `parts/Header` keep working.
const srcDirs = ["assets", "configs", "elements", "pages", "parts", "store", "utils", "json"];
const alias = Object.fromEntries(
  srcDirs.map((dir) => [dir, path.resolve(dirname, "src", dir)])
);

export default defineConfig({
  plugins: [react()],
  resolve: { alias },
  server: { port: 5173 },

  // The codebase keeps JSX inside `.js` files (a CRA habit). Tell esbuild to
  // treat `.js` as JSX, both for source and for pre-bundled dependencies.
  esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] },
  optimizeDeps: { esbuildOptions: { loader: { ".js": "jsx" } } },

  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        // Bootstrap 4's vendored SCSS triggers Dart Sass deprecation notices;
        // they're harmless here, so keep the build output quiet.
        quietDeps: true,
        silenceDeprecations: ["import", "global-builtin", "color-functions", "slash-div", "legacy-js-api"],
      },
    },
  },
});
