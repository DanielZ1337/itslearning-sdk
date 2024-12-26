import { defineConfig } from "vitepress";
import typedocSidebar from "../api/typedoc-sidebar.json";
import { buildEndGenerateOpenGraphImages } from "@nolebase/vitepress-plugin-og-image/vitepress";

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
  async buildEnd(siteConfig) {
    const newBuilder = buildEndGenerateOpenGraphImages({
      baseUrl: "https://nolebase-integrations.ayaka.io",
      category: {
        byPathPrefix: [
          {
            prefix: "/pages/en/integrations/markdown-it-bi-directional-links",
            text: "Markdown It Plugins: Bi-directional links",
          },
          {
            prefix: "/pages/en/integrations/markdown-it",
            text: "Markdown It Plugins",
          },
          {
            prefix: "/pages/en/integrations/obsidian-plugin",
            text: "Obsidian Plugins",
          },
          {
            prefix:
              "/pages/en/integrations/vitepress-plugin-inline-link-preview",
            text: "VitePress Plugin: Inline Links Previewing",
          },
          {
            prefix: "/pages/en/integrations/vitepress-plugin-git-changelog",
            text: "VitePress Plugin: Git-based page histories",
          },
          {
            prefix: "/pages/en/integrations/vitepress-plugin-thumbnail-hash",
            text: "VitePress Plugin: Thumbnail hashing for images",
          },
          {
            prefix: "/pages/en/integrations/vitepress-plugin",
            text: "VitePress Plugins",
          },
          { prefix: "/pages/en/integrations/", text: "Integrations" },
          { prefix: "/pages/en/guide/", text: "Guide" },
          { prefix: "/pages/en/ui/", text: "UI Components" },
          { prefix: "/pages/en/", text: "Documentations" },
          {
            prefix:
              "/pages/zh-CN/integrations/markdown-it-bi-directional-links",
            text: "Markdown It 插件：双向链接",
          },
          {
            prefix: "/pages/zh-CN/integrations/markdown-it",
            text: "Markdown It 插件",
          },
          {
            prefix: "/pages/zh-CN/integrations/obsidian-plugin",
            text: "Obsidian 插件",
          },
          {
            prefix:
              "/pages/zh-CN/integrations/vitepress-plugin-inline-link-preview",
            text: "VitePress 插件：行内链接预览",
          },
          {
            prefix: "/pages/zh-CN/integrations/vitepress-plugin-git-changelog",
            text: "VitePress 插件：变更日志 及 文件历史",
          },
          {
            prefix: "/pages/zh-CN/integrations/vitepress-plugin-thumbnail-hash",
            text: "VitePress 插件：缩略图模糊哈希生成",
          },
          {
            prefix: "/pages/zh-CN/integrations/vitepress-plugin",
            text: "VitePress 插件",
          },
          { prefix: "/pages/zh-CN/integrations/", text: "集成" },
          { prefix: "/pages/zh-CN/guide/", text: "指南" },
          { prefix: "/pages/zh-CN/ui/", text: "UI 组件" },
          { prefix: "/pages/zh-CN/", text: "文档" },
        ],
        fallbackWithFrontmatter: true,
      },
    });

    await newBuilder(siteConfig);
  },
});
