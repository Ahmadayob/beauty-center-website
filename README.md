# SkinCare Center Website

A modern, responsive website for a skincare center with bilingual support (English/Arabic).

## Features

- 🌐 **Bilingual Support**: Toggle between English and Arabic
- 📱 **Responsive Design**: Works on all devices
- 🎨 **Modern UI**: Clean, professional design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Next.js 14
- 🔄 **RTL Support**: Proper right-to-left layout for Arabic

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Unicode emojis

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── public/
│   └── images/          # Image assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Adding Images

Place your images in the `public/images/` directory:
- `facial.jpg` - Facial treatment service
- `massage.jpg` - Massage service
- `products.jpg` - Skin care products

Recommended image dimensions: 400x300px, optimized for web.

## Customization

### Content
Edit the content object in `app/page.tsx` to update text in both languages.

### Styling
Modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

### Adding Pages
Create new files in the `app/` directory following Next.js App Router conventions.

## Deployment

This project can be deployed on:
- Vercel (recommended)
- Netlify
- Any hosting service that supports Node.js

## License

© 2025 SkinCare Center
