// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config()

const { LicenseInfo } = require('@mui/x-license-pro');
const licenseKey = process.env.MUI_LICENSE_KEY;
// LicenseInfo.setLicenseKey(licenseKey);

const math = require('remark-math');
const katex = require('rehype-katex');
const mermaid = require('mdx-mermaid');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const macros = {
  "\\x": "x+1",
  "\\len": "\\operatorname{len}{#1}",
  "\\dist": "\\operatorname{dist}{#1}",
  "\\perfVeryGood": "\\colorbox{darkgreen}{$#1(#2)$}",
  "\\perfGood": "\\colorbox{darkolivegreen}{$#1(#2)$}",
  "\\perfAverage": "\\colorbox{b3a800}{$#1(#2)$}",
  "\\perfBad": "\\colorbox{b36200}{$#1(#2)$}",
  "\\perfVeryBad": "\\colorbox{darkred}{$#1(#2)$}",
  "\\perfCustom": "\\colorbox{#3}{$#1(#2)$}",
  "\\perfNeutral": "\\colorbox{gray}{$#1(#2)$}",
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BCG',
  tagline: 'Books | Courses | Guides',
  url: 'https://bcg.dwf.dev',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'farlowdw', // Usually your GitHub org/user name.
  projectName: 'bcg', // Usually your repo name.

  customFields: {
    things: {
      something: 'Whaaaa'
    }
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/farlowdw/dwf-books-and-courses/tree/master/',
          remarkPlugins: [math, mermaid],
          rehypePlugins: [[katex, {
            throwOnError: true,
            globalGroup: true,
            macros
          }]],
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/farlowdw/dwf-books-and-courses/tree/master/',
          remarkPlugins: [math, mermaid],
          rehypePlugins: [[katex, {
            throwOnError: true,
            globalGroup: true,
            macros
          }]],
          blogTitle: 'Blog title coming soon',
          blogDescription: 'Description coming soon',
          postsPerPage: 'ALL',
          // blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 0,
          sortPosts: 'ascending',
          // showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        pages: {
          rehypePlugins: [[katex, {
            throwOnError: true,
            globalGroup: true,
            macros
          }]],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: "https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.css"
    }
  ],

  scripts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.11.1/katex.min.js",
      async: true,
    },
    {
      src: "https://cdn.jsdelivr.net/npm/pseudocode@latest/build/pseudocode.min.js",
      async: true,
    },
  ],

  plugins: [
    [
      'docusaurus2-dotenv',
      {
        path: "./.env", // The path to your environment variables.
        safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        silent: false, //  If true, all warnings will be suppressed
        expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
      }
    ],
    'docusaurus-plugin-sass',
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'Books, Courses, Guides',
        hideOnScroll: true,
        logo: {
          alt: '',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Home',
            position: 'left',
            activeBaseRegex: `/docs/(?!tags)`,
          },
          {
            to: '/docs/tags',
            label: 'Tags',
            position: 'left',
            activeBaseRegex: `/docs/tags`,
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
            activeBaseRegex: `/blog(?!/archive|/tags)`,
          },
          {
            to: '/blog/archive',
            label: 'Blog Archive',
            position: 'left'
          },
          {
            to: '/blog/tags',
            label: 'Blog Tags',
            position: 'left'
          },
          {
            href: `https://github.com/farlowdw/dwf-books-and-courses`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Books',
            items: [
              {
                label: 'Algorithm Design Manual',
                to: '/docs/books/algorithm-design-manual/book-notes/introduction-to-algorithm-design',
              },
            ],
          },
          {
            title: 'Courses',
            items: [
              {
                label: 'Learn You Node',
                to: '/docs/course-notes/development-and-engineering/javascript/learn-you-node',
              },
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'AWS Deployment',
                to: '/docs/guides/deploying-on-aws',
              },
            ],
          },
          {
            title: 'External',
            items: [
              {
                label: 'LeetCode',
                href: `https://leetcode.com/`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DWF.DEV`,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-error-next-line',
          },
        ],
        additionalLanguages: [
          "apacheconf",
          "applescript",
          "asciidoc",
          "aspnet",
          "awk",
          "bash",
          "basic",
          "c",
          "clojure",
          "cpp",
          "csharp",
          "css",
          "csv",
          "django",
          "docker",
          "editorconfig",
          "ejs",
          "elixir",
          "erlang",
          "excel-formula",
          "flow",
          "fortran",
          "git",
          "go",
          "go-module",
          "graphql",
          "handlebars",
          "http",
          "java",
          "javadoclike",
          "javascript",
          "js-extras",
          "jsdoc",
          "json",
          "jsonp",
          "jsx",
          "latex",
          "less",
          "lisp",
          "log",
          "lua",
          "makefile",
          "markdown",
          "markup",
          "markup-templating",
          "mermaid",
          "mongodb",
          "nginx",
          "perl",
          "php",
          "php-extras",
          "phpdoc",
          "plsql",
          "powerquery",
          "powershell",
          "pug",
          "python",
          "r",
          "regex",
          "ruby",
          "rust",
          "sas",
          "sass",
          "scheme",
          "scss",
          "shell-session",
          "sql",
          "systemd",
          "toml",
          "tsx",
          "turtle",
          "typescript",
          "vim",
          "visual-basic",
          "wasm",
          "wiki",
          "wolfram",
          "yaml"
        ]
      },
    }),
};

module.exports = config;
