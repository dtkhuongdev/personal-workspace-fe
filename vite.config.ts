import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
      envDir: "./environments",
      plugins: [
        react(),
      ],
      resolve: {
        alias: {
          src: "/src",
        },
      },
  };
});
