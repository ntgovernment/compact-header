import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: process.env.GITHUB_PAGES_BASE || "/",
  build: {
    rollupOptions: {
      input: {
        detIntranet: resolve(__dirname, "DET intranet.html"),
      },
    },
  },
});
