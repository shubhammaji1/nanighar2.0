const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(dir).filter(f => f.includes('~mv2'));

let html = `<!DOCTYPE html>
<html>
<head>
<style>
  body { display: flex; flex-wrap: wrap; gap: 12px; font-family: sans-serif; background: #222; color: #fff; padding: 16px; }
  .card { width: 220px; background: #333; border-radius: 8px; overflow: hidden; padding: 8px; font-size: 11px; }
  img { width: 100%; height: 160px; object-fit: cover; border-radius: 4px; }
  p { word-break: break-all; margin: 6px 0 0 0; }
</style>
</head>
<body>
`;

files.forEach(f => {
  html += `<div class="card">
    <img src="/images/${f}" />
    <p>${f}</p>
  </div>\n`;
});

html += `</body></html>`;
fs.writeFileSync(path.join(__dirname, '..', 'public', 'gallery.html'), html);
console.log('Successfully generated gallery with', files.length, 'images.');
