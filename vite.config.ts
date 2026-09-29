import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig(({ command }) => {
  const isGitHubPages = process.env.GITHUB_PAGES === "true";

  return {
    server: {
      host: "::",
      port: 8080,
    },

    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },

    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    },

    plugins: [
      tailwindcss(),

      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),

      tanstackStart({
        server: {
          entry: "server",
        },

        prerender: {
          enabled: isGitHubPages,
          crawlLinks: true,
          failOnError: true,
        },

        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
      }),

      ...(command === "build"
        ? [
            nitro({
              preset: isGitHubPages ? "static" : "vercel",
            }),
          ]
        : []),

      viteReact(),
    ],
  };
});
