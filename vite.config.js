import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
      commonjsOptions: {
        esmExternals: true,
      },
    },
    plugins: [react()], [eslint()] 
    :[],
  };
});
