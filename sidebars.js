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
    'examples',
    'rules',
    'naming-conventions',
    {
      type: 'category',
      label: 'Entities',
      collapsed: false,
      items: entityItems,
    },
  ],
};