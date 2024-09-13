import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: "./app/widget-loader.js",
      name: "CustomWidget",
      fileName: "custom-widget", // This will result in `chat-widget.js`
      formats: ["es"], // Use ES Modules format
    },
    rollupOptions: {
      // input: "./app/widget-loader.client",
      output: {
        entryFileNames: `custom-widget.[format].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
