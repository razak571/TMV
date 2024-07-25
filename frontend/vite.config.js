import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://tmv-movies-v1-server.onrender.com",
      "/uploads/": "https://tmv-movies-v1-server.onrender.com",
    },
  },
});
