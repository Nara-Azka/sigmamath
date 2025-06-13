const fs = require('fs');

const urls = [
  '/',
  '/authorinfo',
  '/disclaimer',
  '/image',
  '/learn',
  '/level',
  '/opening'
];

const now = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `
  <url>
    <loc>https://sigmamath.netlify.app${url}</loc>
    <lastmod>${now}</lastmod>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync('../sitemap.xml', sitemap);
console.log('✅ sitemap.xml generated with <lastmod> =', now);