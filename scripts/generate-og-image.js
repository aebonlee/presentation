import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A1628"/>
      <stop offset="50%" style="stop-color:#1E3A5F"/>
      <stop offset="100%" style="stop-color:#2E5A8E"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#60A5FA"/>
      <stop offset="100%" style="stop-color:#FCD34D"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="150" cy="100" r="200" fill="rgba(37,99,235,0.08)"/>
  <circle cx="1050" cy="530" r="250" fill="rgba(37,99,235,0.06)"/>
  <circle cx="600" cy="315" r="300" fill="rgba(37,99,235,0.04)"/>

  <!-- Accent line -->
  <rect x="100" y="200" width="80" height="4" rx="2" fill="url(#accent)"/>

  <!-- Brand -->
  <text x="100" y="180" font-family="Arial, sans-serif" font-size="20" fill="rgba(255,255,255,0.6)" font-weight="500">DreamIT Biz Education</text>

  <!-- Title -->
  <text x="100" y="280" font-family="Arial, sans-serif" font-size="56" fill="white" font-weight="900">프레젠테이션</text>
  <text x="100" y="350" font-family="Arial, sans-serif" font-size="56" fill="url(#accent)" font-weight="900">입문</text>

  <!-- Description -->
  <text x="100" y="410" font-family="Arial, sans-serif" font-size="22" fill="rgba(255,255,255,0.7)" font-weight="400">효과적인 발표 기법과 시각 자료 제작 학습</text>

  <!-- Tags -->
  <rect x="100" y="450" width="70" height="32" rx="16" fill="rgba(255,255,255,0.1)"/>
  <text x="135" y="472" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-weight="500">PPT</text>

  <rect x="185" y="450" width="80" height="32" rx="16" fill="rgba(255,255,255,0.1)"/>
  <text x="225" y="472" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-weight="500">스피치</text>

  <rect x="280" y="450" width="110" height="32" rx="16" fill="rgba(255,255,255,0.1)"/>
  <text x="335" y="472" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-weight="500">시각디자인</text>

  <rect x="405" y="450" width="110" height="32" rx="16" fill="rgba(255,255,255,0.1)"/>
  <text x="460" y="472" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle" font-weight="500">스토리텔링</text>

  <!-- Icons row -->
  <text x="750" y="300" font-family="Arial, sans-serif" font-size="64" fill="rgba(255,255,255,0.15)">📊</text>
  <text x="850" y="250" font-family="Arial, sans-serif" font-size="64" fill="rgba(255,255,255,0.12)">🎤</text>
  <text x="950" y="320" font-family="Arial, sans-serif" font-size="64" fill="rgba(255,255,255,0.1)">🎨</text>
  <text x="1050" y="270" font-family="Arial, sans-serif" font-size="64" fill="rgba(255,255,255,0.08)">📋</text>

  <!-- URL -->
  <text x="100" y="580" font-family="Arial, sans-serif" font-size="16" fill="rgba(255,255,255,0.4)" font-weight="400">presentation.dreamitbiz.com</text>

  <!-- Logo -->
  <rect x="1040" y="550" width="40" height="40" rx="8" fill="rgba(37,99,235,0.8)"/>
  <text x="1060" y="578" font-family="Arial, sans-serif" font-size="22" fill="white" text-anchor="middle" font-weight="900">P</text>
</svg>`;

async function generate() {
  const outputPath = join(__dirname, '..', 'public', 'og-image.png');
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);
  console.log(`OG image generated: ${outputPath}`);
}

generate().catch(console.error);
