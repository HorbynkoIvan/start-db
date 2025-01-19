import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@scss": path.resolve(__dirname, "./src/scss"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@theme": path.resolve(__dirname, "./src/theme"),
      "@routes": path.resolve(__dirname, "./src/routes"),
    },
  },
  server: {
    port: 5001,
    open: true,
  },
  build: {
    outDir: 'build',
  },
});