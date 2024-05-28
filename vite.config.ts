import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import dts from 'vite-plugin-dts';
import viteCompression from "vite-plugin-compression";
import path from "node:path";
// import visualizer from 'rollup-plugin-visualizer';
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // visualizer({ filename: './dist/stats.html' }),
    // dts({ include: ['lib'] }),
    viteCompression({ algorithm: "gzip" }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    cssCodeSplit: true,
    copyPublicDir: false,
    minify: "esbuild",
    sourcemap: true,
    terserOptions: {
      compress: {
        pure_funcs: ["console.log"], // Remove console.log statements
      },
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Entry point of your library
      name: "MyComponentLibrary", // Global name for your library
      fileName: (format) => `my-component-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled",
        },
      },
    },
  },
});
