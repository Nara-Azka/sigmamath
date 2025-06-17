const fs = require('fs');
const path = require('path');

const baseUrl = 'https://sigmath.my.id';
const rootPath = path.join(__dirname, '..'); // Satu level di atas /sitemapConfiguration

function getUrls(dir, base = '') {
  let urls = [];
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    const relativePath = path.join(base, file.name);

    if (file.isDirectory()) {
      urls = urls.concat(getUrls(fullPath, relativePath));
    } else if (file.isFile() && file.name.endsWith('.html')) {
      const url = '/' + relativePath.replace(/index\.html$/, '').replace(/\\/g, '/');
      urls.push(url);
    }
  }

  return urls;
}

const urls = getUrls(rootPath);
const now = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${now}</lastmod>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(rootPath, 'sitemap.xml'), sitemap);
console.log('✅ sitemap.xml berhasil dibuat!');