const fs = require('fs');
const path = require('path');

const entitiesDir = path.join(__dirname, 'docs/entities');

const entityItems = fs
  .readdirSync(entitiesDir)
  .filter((name) =>
    fs.statSync(path.join(entitiesDir, name)).isDirectory()
  )
  .map((name) => `entities/${name}/index`);

module.exports = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Examples & queries',
      link: { type: 'doc', id: 'examples' },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Automatic Data Enhancement (ADE)',
          collapsed: false,
          items: [
            'ade/ade-001',
            'ade/ade-002',
          ],
        },
        {
          type: 'category',
          label: 'Deal Intelligence (DI)',
          collapsed: false,
          items: [
            'di/di-001',
          ],
        },
        {
          type: 'category',
          label: 'Value Intelligence (VI)',
          collapsed: false,
          items: [
            'vi/vi-001',
          ],
        },
        {
          type: 'category',
          label: 'Coaching Intelligence (CI)',
          collapsed: false,
          items: [
            'ci/ci-001',
          ],
        },
      ],
    },
    'rules',
    'naming-conventions',
    {
      type: 'category',
      label: 'Entities',
      collapsed: false,
      items: [
        'entities/index',
        ...entityItems,
      ],
    },
  ],
};