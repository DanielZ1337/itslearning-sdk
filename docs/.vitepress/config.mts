import { defineConfig } from "vitepress";
import typedocSidebar from "../api/typedoc-sidebar.json";

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
});
