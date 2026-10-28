import sharp from 'sharp';

const photo = await sharp('src/assets/autoridade.jpg')
  .resize(520, 630, { fit: 'cover', position: 'top' })
  .toBuffer();

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#F5F1EA"/>
  <rect x="680" width="520" height="630" fill="#173C43"/>
  <text x="64" y="230" fill="#173C43" font-family="Georgia, 'Times New Roman', serif" font-size="54">Dra. Marjorie</text>
  <text x="64" y="296" fill="#173C43" font-family="Georgia, 'Times New Roman', serif" font-size="54">Cordeiro</text>
  <rect x="64" y="332" width="72" height="3" fill="#879C91"/>
  <text x="64" y="390" fill="#173C43" font-family="Georgia, 'Times New Roman', serif" font-size="26">Direito Médico e da Saúde</text>
  <text x="64" y="470" fill="#282B2D" font-family="Georgia, 'Times New Roman', serif" font-size="22">Clareza jurídica para decisões</text>
  <text x="64" y="504" fill="#282B2D" font-family="Georgia, 'Times New Roman', serif" font-size="22">importantes em saúde.</text>
</svg>`;

await sharp({
  create: { width: 1200, height: 630, channels: 3, background: '#F5F1EA' },
})
  .composite([
    { input: Buffer.from(svg), top: 0, left: 0 },
    { input: photo, left: 680, top: 0 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile('public/og.jpg');

const meta = await sharp('public/og.jpg').metadata();
console.log(meta.width, meta.height, meta.format);
