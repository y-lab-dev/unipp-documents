// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "unipp ドキュメント集",
  tagline: "unippに関するドキュメントの一覧です。",
  url: "https://y-lab-dev.github.io/",
  baseUrl: "/unipp-documents/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  organizationName: "y-lab-dev",
  projectName: "unipp-documents",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/y-lab-dev/unipp-documents/tree/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "unipp-docs",
        logo: {
          alt: "sentan logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "開発ドキュメント",
          },
          {
            to: "hello",
            docId: "hello",
            label: "運用ドキュメント",
            position: "left",
            // activeBaseRegex: "docs/(next/v8)",
            targer: "_blank",
          },
          {
            href: "https://github.com/ylab-dev/Unipp",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Ylab`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "hello",
        path: "hello",
        routeBasePath: "hello",
        // sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};

module.exports = config;
