import { marked } from 'marked';

export function md2html(markdown, cliOpntions) {
  return marked.parse(markdown, {
    gfm: cliOpntions.gfm,
  });
}
