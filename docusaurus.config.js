const config = {
  title: 'Cien API',
  tagline: 'Cien API Documentation',
  favicon: 'img/favicon.ico',

  url: 'https://cienai.github.io',
  baseUrl: '/cien-api-documentation/',

  organizationName: 'cienai',
  projectName: 'cien-api-documentation',

  themeConfig: {
    navbar: {
      title: '', // 👈 remove text title (logo-only look)
      logo: {
        alt: 'Cien',
        src: 'img/logo.svg',
        href: '/', // homepage
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
      ],
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