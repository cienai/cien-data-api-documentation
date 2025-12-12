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
      title: '',
      logo: {
        alt: 'Cien',
        src: 'img/logo.svg',
      },
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
      links: [
        {
          title: 'Legal & InfoSec',
          items: [
            { label: 'Trust Center', href: 'https://trustcenter.cien.ai/' },
            { label: 'Data Security', href: 'https://www.cien.ai/data-security' },
            { label: 'Privacy Policy', href: 'https://www.cien.ai/privacy/' },
            { label: 'Terms of Services', href: 'https://www.cien.ai/tos' },
          ],
        },
        {
          title: 'Technology',
          items: [
            { label: 'Product', href: 'https://www.cien.ai/product' },
            { label: 'Github Integration Hub', href: 'https://github.com/cienai/IntegrationHub' },
            { label: 'Release Log', href: 'https://github.com/cienai/IntegrationHub/releases' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Resource Hub', href: 'https://www.cien.ai/resources' },
            { label: 'Videos', href: 'https://www.cien.ai/videos' },
            { label: 'Blog', href: 'https://www.cien.ai/blog/' },
            { label: 'Expert Advice', href: 'https://www.cien.ai/category/blog/expert-advice/' },
            { label: 'News', href: 'https://www.cien.ai/cien-in-the-news' },
            { label: 'Press', href: 'https://www.cien.ai/press' },
            { label: 'Newsletter Sign-up', href: 'https://www.cien.ai/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjUxNjMiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D' },
            { label: 'GTM Suite Webinars', href: 'https://www.cien.ai/cien-webinars/' },
          ],
        },
        {
          title: 'Cien.ai',
          items: [
            { label: 'People', href: 'http://cien.ai/people' },
            { label: 'Contact', href: 'http://cien.ai/contact' },
          ],
        },
      ],
      copyright: 'Cien, Inc. © 2026. All Rights Reserved.',
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
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: 'docs',
        language: ['en'],
      },
    ],
  ],
};

module.exports = config;