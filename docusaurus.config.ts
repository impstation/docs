import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Impstation Community Docs',
  tagline: 'NO LOSERS ALLOWED!!!',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://impstation.github.io',
  baseUrl: '/imp-docs',
  organizationName: 'impstation',
  projectName: 'imp-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/impstation/imp-docs/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/card.png',
    defaultMode: 'dark',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Impstation Community Docs',
      logo: {
        alt: 'Impstation Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'main',
          position: 'left',
          label: 'Contributing',
        },
        {
          type: 'docSidebar',
          sidebarId: 'rules',
          position: 'left',
          label: 'Server Rules',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/impstation/imp-station-14',
            },
            {
              label: 'I\'m Feeling Lucky',
              href: 'https://impstation.gay',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Impstation. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
