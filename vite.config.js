import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // NO 'root' option specified here, so it defaults to the project directory
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    open: true,
  },
});
