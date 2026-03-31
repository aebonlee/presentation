import DOMPurify from 'dompurify';

/**
 * Simple markdown-to-HTML renderer for learning and guide content.
 * Supports: code blocks, headers, bold, inline code, blockquotes,
 * tables, unordered/ordered lists, paragraphs, strikethrough.
 *
 * All output is sanitized with DOMPurify to prevent XSS attacks.
 */
const renderMarkdown = (text: string): string => {
  if (!text) return '';
  let html = text;
  // Code blocks (must come before inline code)
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  // Headers
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n<blockquote>/g, '<br/>');
  // Tables
  html = html.replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)+)/g, (_match: string, header: string, rows: string) => {
    const ths = header.split('|').filter(Boolean).map((h: string) => `<th>${h.trim()}</th>`).join('');
    const trs = rows.trim().split('\n').map((row: string) => {
      const tds = row.split('|').filter(Boolean).map((d: string) => `<td>${d.trim()}</td>`).join('');
      return `<tr>${tds}</tr>`;
    }).join('');
    return `<table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
  });
  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m: string) => `<ul>${m}</ul>`);
  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  // Paragraphs
  html = html.split('\n\n').map((block: string) => {
    if (block.startsWith('<') || block.trim() === '') return block;
    return `<p>${block.replace(/\n/g, '<br/>')}</p>`;
  }).join('\n');
  // Strikethrough
  html = html.replace(/~~(.+?)~~/g, '<del>$1</del>');

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h3', 'h4', 'p', 'br', 'strong', 'em', 'del',
      'code', 'pre', 'blockquote',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'ul', 'ol', 'li',
      'div', 'span', 'section',
      'kbd',
    ],
    ALLOWED_ATTR: ['class', 'style'],
  });
};

export default renderMarkdown;
