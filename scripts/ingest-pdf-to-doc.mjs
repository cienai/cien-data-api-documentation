/*
 * Extracts text from a PDF for a given page range and writes it to a Markdown/MDX doc,
 * inserting Markdown headings based on simple heuristics to improve the right-hand ToC.
 *
 * Usage:
 *   node scripts/ingest-pdf-to-doc.mjs <pdfPath> <startPage> <endPage> <outDocPath> <docTitle>
 * Example:
 *   node scripts/ingest-pdf-to-doc.mjs \
 *     "/Users/martinandersson/Desktop/Cien.ai_API_Documentation.pdf" 3 34 \
 *     "docs/examples.mdx" "Examples & Queries"
 */

import fs from 'fs';
import path from 'path';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

function sanitizeLine(line) {
  // Collapse whitespace and escape MDX/JSX-breaking characters
  let s = line.replace(/\s+/g, ' ').trim();
  s = s.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  return s;
}

function isLikelyHeading(line) {
  // Heuristic: short-ish line, minimal punctuation, high title/uppercase ratio
  if (!line) return false;
  if (line.length < 3 || line.length > 120) return false;

  const punctCount = (line.match(/[.,;!?]/g) || []).length;
  if (punctCount > 1) return false;

  const words = line.split(' ');
  const letters = line.replace(/[^A-Za-z]/g, '').length;
  const upper = (line.match(/[A-Z]/g) || []).length;
  const upperRatio = letters ? upper / letters : 0;

  const titleCaseCount = words.filter((w) => /^[A-Z][a-z]+$/.test(w)).length;
  const titleCaseRatio = words.length ? titleCaseCount / words.length : 0;

  const allCaps = /^[A-Z0-9\s/&-]+$/.test(line) && upperRatio > 0.6;
  const looksTitle = titleCaseRatio > 0.6;

  // Headings often don't end with a period
  const endsWithPeriod = /\.$/.test(line);

  return (allCaps || looksTitle) && !endsWithPeriod;
}

function formatAsMarkdown(lines) {
  const out = [];
  for (const raw of lines) {
    const line = sanitizeLine(raw);
    if (!line) continue;

    // Bullets
    if (/^[•\-\*]/.test(line)) {
      out.push(`- ${line.replace(/^[•\-\*]\s*/, '')}`);
      continue;
    }

    // Headings
    if (isLikelyHeading(line)) {
      // Promote very short headings to H2, others to H3
      const level = line.split(' ').length <= 6 ? '##' : '###';
      out.push(`${level} ${line}`);
      continue;
    }

    out.push(line);
  }
  return out.join('\n');
}

async function extractTextFromPdf(pdfPath, startPage, endPage) {
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;
  const lastPage = Math.min(endPage, pdf.numPages);

  const lines = [];
  for (let p = startPage; p <= lastPage; p++) {
    const page = await pdf.getPage(p);
    const textContent = await page.getTextContent();
    let currentLine = [];

    for (const item of textContent.items) {
      const str = item.str || '';
      currentLine.push(str);
      if (item.hasEOL) {
        lines.push(currentLine.join(' ').trim());
        currentLine = [];
      }
    }
    if (currentLine.length) {
      lines.push(currentLine.join(' ').trim());
    }

    // Page separator to help heading detection reset
    lines.push('');
  }
  return lines;
}

async function main() {
  const [pdfPathArg, startArg, endArg, outDocArg, docTitleArg] = process.argv.slice(2);
  if (!pdfPathArg || !startArg || !endArg || !outDocArg) {
    console.error('Usage: node scripts/ingest-pdf-to-doc.mjs <pdfPath> <startPage> <endPage> <outDocPath> <docTitle>');
    process.exit(1);
  }

  const pdfPath = pdfPathArg;
  const startPage = parseInt(startArg, 10);
  const endPage = parseInt(endArg, 10);
  const outDocPath = outDocArg;
  const docTitle = docTitleArg || path.basename(outDocPath).replace(/\.(md|mdx)$/i, '');

  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found at: ${pdfPath}`);
    process.exit(1);
  }

  console.log(`Extracting pages ${startPage}-${endPage} from: ${pdfPath}`);
  const rawLines = await extractTextFromPdf(pdfPath, startPage, endPage);
  const md = formatAsMarkdown(rawLines);

  const header = `---\n${outDocPath.endsWith('.mdx') ? '' : ''}title: ${docTitle}\n---\n\n`;
  const content = `${header}${md}\n`;
  fs.writeFileSync(outDocPath, content, 'utf8');
  console.log(`Wrote extracted content to: ${outDocPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
