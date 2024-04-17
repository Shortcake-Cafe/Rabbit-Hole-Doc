// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rabbit Hole Documentation',
  tagline: 'Start modding today!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Rabbit-Hole-Doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Shortcake-Cafe', // Usually your GitHub org/user name.
  projectName: 'Rabbit-Hole-Doc', // Usually your repo name.
  deploymentBranch: "gh-pages",
  

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
        },
        blog: false, // Optional: disable the blog plugin
        // ...
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Rabbit Hole Documentation',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'Newgrounds',
                href: 'https://shortcakecafe.newgrounds.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ShortCake_Cafe',
              },
            ],
          },
          {
            title: 'Source Code',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Shortcake-Cafe/Rabbit-Hole',
              },
              {
                label: 'Google Drive',
                href: 'https://drive.google.com/file/d/1VPf_AvRHLcRro_K0Fs-8Qpq-vESqdGMX/view?usp=sharing',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Fan Discord Server',
                href: 'https://discord.gg/HAMhPRAFaV',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ShortCake_Cafe.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
