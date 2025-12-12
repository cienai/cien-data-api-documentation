/*
 * ESM script to extract text from a PDF for a given page range and write it to docs/examples.mdx.
 * Usage: node scripts/ingest-examples-from-pdf.mjs <pdfPath> <startPage> <endPage>
 */

import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

async function extractTextFromPdf(pdfPath, startPage = 3, endPage = 34) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;

  const lastPage = Math.min(endPage, pdf.numPages);
  const chunks = [];

  for (let p = startPage; p <= lastPage; p++) {
    const page = await pdf.getPage(p);
    const textContent = await page.getTextContent();
    const pageLines = [];

    let currentLine = [];
    for (const item of textContent.items) {
      const str = item.str || '';
      currentLine.push(str);
      if (item.hasEOL) {
        pageLines.push(currentLine.join(' ').trim());
        currentLine = [];
      }
    }
    if (currentLine.length) {
      pageLines.push(currentLine.join(' ').trim());
    }

    const cleaned = pageLines
      .map((line) => line.replace(/\s+/g, ' ').trim())
      .filter((line) => line.length > 0);

    chunks.push(`\n\n${cleaned.join('\n')}`);
  }

  return chunks.join('\n');
}

async function main() {
  const args = process.argv.slice(2);
  const pdfPathArg = args[0];
  const startArg = args[1];
  const endArg = args[2];

  const pdfPath = pdfPathArg || '/Users/martinandersson/Desktop/Cien.ai_API_Documentation.pdf';
  const startPage = startArg ? parseInt(startArg, 10) : 3;
  const endPage = endArg ? parseInt(endArg, 10) : 34;

  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found at: ${pdfPath}`);
    process.exit(1);
  }

  console.log(`Extracting pages ${startPage}-${endPage} from: ${pdfPath}`);
  const text = await extractTextFromPdf(pdfPath, startPage, endPage);

  const mdxPath = path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'docs', 'examples.mdx');
  const header = `---\ntitle: Examples & Queries\n---\n\n`;
  const content = `${header}${text}\n`;
  fs.writeFileSync(mdxPath, content, 'utf8');
  console.log(`Wrote extracted content to: ${mdxPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
