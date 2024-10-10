import { marked } from 'marked';
import { JSDOM } from 'jsdom';

interface ImportedContent {
  title: string;
  content: string;
  type: 'tutorial' | 'function' | 'widget' | 'action';
}

export async function importMarkdown(markdown: string): Promise<ImportedContent> {
  const html = marked(markdown);
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const title = document.querySelector('h1')?.textContent || 'Untitled';
  const type = determineType(title);

  return {
    title,
    content: html,
    type,
  };
}

export async function importHtml(html: string): Promise<ImportedContent> {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const title = document.querySelector('h1')?.textContent || 'Untitled';
  const content = document.body.innerHTML;
  const type = determineType(title);

  return {
    title,
    content,
    type,
  };
}

function determineType(title: string): ImportedContent['type'] {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('tutorial')) return 'tutorial';
  if (lowerTitle.includes('function')) return 'function';
  if (lowerTitle.includes('widget')) return 'widget';
  if (lowerTitle.includes('action')) return 'action';
  return 'tutorial'; // Default type
}