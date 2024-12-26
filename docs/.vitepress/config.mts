import { defineConfig } from "vitepress";
import typedocSidebar from "../api/typedoc-sidebar.json";

const siteName = "itslearning-sdk";
const url = "https://itslearning-sdk.danielz.dev";
const ogImage = `${url}/og-image.png`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  title: "itslearning-sdk",
  description: "A lightweight SDK for itslearning's REST API.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/api" },
    ],
    footer: {
      message: "Released under the MIT License.",
    },
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "API",
        items: typedocSidebar,
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/DanielZ1337/itslearning-sdk",
      },
    ],
  },
  transformHead: ({ title, description }) => [
    ["meta", { name: "description", content: description }],
    ["meta", { property: "og:title", content: title }],
    ["meta", { property: "og:description", content: description }],
    ["meta", { property: "twitter:title", content: title }],
    ["meta", { property: "twitter:description", content: description }],
  ],

  head: [
    ["meta", { property: "og:site_name", content: siteName }],
    ["meta", { property: "og:locale", content: "en_US" }],
    ["meta", { property: "og:url", content: url }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:domain", content: new URL(url).hostname }],
    ["meta", { property: "twitter:url", content: url }],
    ["meta", { name: "twitter:image", content: ogImage }],
  ],
});
