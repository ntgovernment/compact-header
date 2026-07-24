import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        detIntranet: resolve(__dirname, "DET intranet.html"),
      },
    },
  },
});
