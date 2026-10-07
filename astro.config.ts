import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import { transformerTwoslash } from "@shikijs/twoslash";
import { defineConfig } from "astro/config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ShikiTransformer } from "shiki";

import { rehypePlugins, remarkPlugins } from "./src/build-time";
import { getHiddenPostPaths } from "./src/build-time/hiddenPostPaths";

const projectDirectory = dirname(fileURLToPath(import.meta.url));
const site = "https://lucasltavares.github.io/";
const stripTrailingSlash = (path: string) => path.replace(/\/+$/, "") || "/";
const hiddenPaths = getHiddenPostPaths(resolve(projectDirectory, "./posts"), {
  isProd: process.env.NODE_ENV === "production",
});

export default defineConfig({
  output: "static",
  site,
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      transformers: [
        transformerTwoslash({
          explicitTrigger: true,
          twoslashOptions: {
            compilerOptions: {
              strict: true,
              module: 199,
              moduleResolution: 99,
              target: 99,
              types: ["node"],
            },
          },
        }) as unknown as ShikiTransformer,
      ],
    },
    processor: unified({
      remarkPlugins: remarkPlugins(projectDirectory),
      rehypePlugins,
      gfm: true,
    }),
  },
  integrations: [
    mdx({ extendMarkdownConfig: true }),
    solidJs(),
    sitemap({
      filter: (page) =>
        !hiddenPaths.has(stripTrailingSlash(new URL(page).pathname)),
    }),
  ],
  vite: {
    ssr: {
      noExternal: [
        "@fontsource-variable/inter",
        "@fontsource-variable/brygada-1918",
      ],
    },
  },
});
