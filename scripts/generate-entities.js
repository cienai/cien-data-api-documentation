/**
 * Generate entity documentation pages from a CSV file
 *
 * Usage:
 *   node scripts/generate-entities.js metadata_fields.csv
 */

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

// -----------------------------
// 1. Validate input
// -----------------------------
const inputFile = process.argv[2];

if (!inputFile) {
  console.error('❌ Please provide a CSV file');
  console.error('Usage: node scripts/generate-entities.js <csv-file>');
  process.exit(1);
}

const csvPath = path.resolve(inputFile);

if (!fs.existsSync(csvPath)) {
  console.error(`❌ CSV file not found: ${csvPath}`);
  process.exit(1);
}

// -----------------------------
// 2. Output directory
// -----------------------------
const OUTPUT_ROOT = path.resolve('docs/entities');

// Ensure base directory exists
fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

// -----------------------------
// 3. Load CSV
// -----------------------------
const rows = [];

fs.createReadStream(csvPath)
  .pipe(csv())
  .on('data', (row) => {
    rows.push(row);
  })
  .on('end', () => {
    console.log(`✔ Loaded ${rows.length} rows`);
    generateDocs(rows);
  });

// -----------------------------
// 4. Generate entity pages
// -----------------------------
function generateDocs(rows) {
  // Group rows by entity name
  const entities = {};

  for (const row of rows) {
    const entity =
      row.Entity ||
      row.entity ||
      row.table ||
      row.Table ||
      row.ENTITY;

    if (!entity) continue;

    if (!entities[entity]) {
      entities[entity] = [];
    }

    entities[entity].push(row);
  }

  // Generate markdown for each entity
  for (const [entityName, fields] of Object.entries(entities)) {
    writeEntityDoc(entityName, fields);
  }

  console.log(`✔ Generated ${Object.keys(entities).length} entity pages`);
}

// -----------------------------
// 5. Write single entity page
// -----------------------------
function writeEntityDoc(entityName, fields) {
  const slug = entityName.toLowerCase();
  const entityDir = path.join(OUTPUT_ROOT, slug);

  fs.mkdirSync(entityDir, { recursive: true });

  const filePath = path.join(entityDir, 'index.md');

  const markdown = generateMarkdown(entityName, fields);

  fs.writeFileSync(filePath, markdown, 'utf8');

  console.log(`✔ docs/entities/${slug}/index.md`);
}

// -----------------------------
// 6. Markdown template
// -----------------------------
function generateMarkdown(entityName, fields) {
  const rows = fields
    .map((f) => {
      const name = f.field_name || f.Field || '';
      const type = f.data_type || f.Type || '';
      const description = f.description || f.Description || '';
      return `| ${name} | ${type} | ${description} |`;
    })
    .join('\n');

  return `---
title: ${entityName}
---

## ${entityName}

This entity represents **${entityName}** records in the Cien platform.

---

## Fields

| Field | Type | Description |
|------|------|-------------|
${rows}
`;
}