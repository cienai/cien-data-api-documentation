const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// ---------- CONFIG ----------
const DOCS_DIR = path.resolve('docs/entities');
// Default CSV lives under the workspace's data/ directory
const DEFAULT_CSV = path.join('data', 'metadata_fields.csv');
const ENTITY_DESCRIPTIONS_PATH = path.resolve('data', 'entity_descriptions.json');

// ---------- HELPERS ----------
function slugify(str) {
  // Lowercase, trim, and replace any non-alphanumeric with single dashes
  return str
    .trim()
    .toLowerCase()
    // Keep underscores to avoid breaking existing doc routes; replace other
    // non-alphanumerics with single dashes.
    .replace(/[^a-z0-9_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function humanize(str) {
  return str
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

function escapeMd(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/\|/g, '\\|');
}

// ---------- MAIN ----------
const csvFile = process.argv[2] || DEFAULT_CSV;
const csvPath = path.resolve(csvFile);

if (!fs.existsSync(csvPath)) {
  console.error(`❌ CSV file not found: ${csvPath}`);
  process.exit(1);
}

const rowsByEntity = {};
let globalHeaderOrder = null; // preserve CSV header order

fs.createReadStream(csvPath)
  .pipe(csv())
  .on('headers', (headers) => {
    globalHeaderOrder = headers;
  })
  .on('data', (row) => {
    const entity = slugify(row.entity || row.table || '');
    if (!entity) return;

    rowsByEntity[entity] ??= [];
    rowsByEntity[entity].push(row);
  })
  .on('end', () => {
    // Load or create entity descriptions map
    let entityDescriptions = {};
    if (fs.existsSync(ENTITY_DESCRIPTIONS_PATH)) {
      try {
        entityDescriptions = JSON.parse(fs.readFileSync(ENTITY_DESCRIPTIONS_PATH, 'utf8')) || {};
      } catch {}
    }

    // If descriptions file missing entries or missing entirely, seed it with blank values
    const allEntities = Object.keys(rowsByEntity);
    let seeded = false;
    allEntities.forEach((e) => {
      if (!(e in entityDescriptions)) {
        entityDescriptions[e] = '';
        seeded = true;
      }
    });
    if (seeded || !fs.existsSync(ENTITY_DESCRIPTIONS_PATH)) {
      fs.mkdirSync(path.dirname(ENTITY_DESCRIPTIONS_PATH), { recursive: true });
      fs.writeFileSync(ENTITY_DESCRIPTIONS_PATH, JSON.stringify(entityDescriptions, null, 2));
      console.log(`ℹ️  Updated descriptions file: ${ENTITY_DESCRIPTIONS_PATH}`);
    }
    Object.entries(rowsByEntity).forEach(([entity, rows]) => {
      const entityDir = path.join(DOCS_DIR, entity);
      fs.mkdirSync(entityDir, { recursive: true });

      // Build union of all headers for this entity and keep CSV global order.
      const headersSet = new Set();
      rows.forEach(r => Object.keys(r).forEach(h => headersSet.add(h)));
      const headers = (globalHeaderOrder || Array.from(headersSet))
        .filter(h => headersSet.has(h));

  const descriptionText = (entityDescriptions[entity] || '').trim();

  const frontMatter = `---
title: ${entity}
hide_table_of_contents: true
---

${descriptionText || `This entity represents **${entity}** records in the Cien platform.`}
`;


      // Do NOT include a trailing newline at the end of the header separator row,
      // otherwise we end up with a blank line before the first table row which
      // breaks Markdown table rendering in some engines (e.g., Docusaurus).
      // Header label overrides: preserve exact label for some headers
      const HEADER_LABEL_OVERRIDES = {
        power_bi: 'power_bi',
      };

      const tableHeader =
        `## Fields\n\n` +
        `| ${headers.map(h => HEADER_LABEL_OVERRIDES[h] ?? humanize(h)).join(' | ')} |\n` +
        `| ${headers.map(() => '---').join(' | ')} |`;

      const tableRows = rows
        .map(row => `| ${headers.map(h => escapeMd(row[h])).join(' | ')} |`)
        .join('\n');

      const content = [
        frontMatter,
        tableHeader,
        tableRows,
        '',
      ].join('\n');

      fs.writeFileSync(path.join(entityDir, 'index.md'), content);
      console.log(`✅ Generated: ${entity}`);
    });

    console.log('\n🎉 Entity generation complete.');
  });