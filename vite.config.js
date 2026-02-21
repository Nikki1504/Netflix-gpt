import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    browser: "google chrome",
    proxy: {
      "/gpt": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
    },
  },
});
