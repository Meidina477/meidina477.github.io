// Headings written as "A plain sentence. <em>An italic sentence.</em>" always break before the
// italic part, so it sits on its own line instead of wrapping wherever the width happens to fall.
// Runs on the built HTML, so it covers every page, component and editor-written heading.
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HEADING = /<(h[1-3])\b([^>]*)>([\s\S]*?)<\/\1>/g;
// Sentence end, then the italic part that finishes the heading (no break there yet).
const SPLIT = /([.?!…])\s*(<em\b[^>]*>(?:(?!<em\b)[\s\S])*<\/em>\s*)$/;

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

export default function headingBreaks() {
  return {
    name: 'heading-breaks',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let count = 0;
        for await (const file of htmlFiles(fileURLToPath(dir))) {
          const html = await readFile(file, 'utf8');
          const out = html.replace(HEADING, (all, tag, attrs, inner) => {
            if (/<br[^>]*>\s*<em\b[^>]*>(?:(?!<em\b)[\s\S])*<\/em>\s*$/.test(inner) || !SPLIT.test(inner)) return all;
            count++;
            return `<${tag}${attrs}>${inner.replace(SPLIT, '$1<br class="hb"> $2')}</${tag}>`;
          });
          if (out !== html) await writeFile(file, out);
        }
        logger.info(`italic heading endings moved to their own line: ${count}`);
      },
    },
  };
}
