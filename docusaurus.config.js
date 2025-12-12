const config = {
  title: 'Cien API',
  tagline: 'Cien API Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://cienai.github.io',
  baseUrl: '/cien-api-documentation/',

  organizationName: 'cienai',
  projectName: 'cien-api-documentation',

  // Avoid GitHub Pages trailing slash redirects and relative link issues
  trailingSlash: false,

  themeConfig: {
    navbar: {
      title: '', // no text title, and no logo to avoid broken image link
      items: [
        { type: 'doc', docId: 'intro', position: 'left', label: 'Get started' },
        { type: 'doc', docId: 'examples', position: 'left', label: 'Examples' },
        { type: 'doc', docId: 'queries', position: 'left', label: 'Queries' },
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: 'Entities' },
        { type: 'doc', docId: 'rules', position: 'left', label: 'Rules' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'Copyright © 2026 - Cien, Inc. - All Rights Reserved.',
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

module.exports = config;