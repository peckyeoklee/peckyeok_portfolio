# Peck Yeok Portfolio

A handcrafted, single-screen hero portfolio with a warm, friendly aesthetic.

## Design Philosophy

This portfolio embraces minimalism and warmth through:
- **Typography-driven design** - SA Long Beach and Garet fonts create visual hierarchy
- **Generous whitespace** - Content breathes naturally
- **Soft color palette** - Warm browns and cream tones
- **Playful touches** - Decorative bear illustrations with a "peeking up" effect

## Tech Stack

- **React** + **TypeScript** + **Vite**
- Custom font loading via `@font-face`
- CSS-only animations and interactions
- Responsive design with `clamp()` for fluid typography

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add required fonts
Place these font files in `/public/fonts/`:
- `sa-long-beach.ttf` (or .woff/.woff2)
- `garet.ttf` (or .woff/.woff2)

### 3. Add decorative images
Place three bear character images in `/public/images/`:
- `bear-1.png`
- `bear-2.png`
- `bear-3.png`

> See [SETUP.md](./SETUP.md) for detailed instructions

### 4. Run development server
```bash
npm run dev
```

## Project Structure

```
src/
├── Hero.tsx        # Main hero component
├── App.tsx         # Root app component
├── App.css         # Hero-specific styles
├── index.css       # Global styles & font loading
└── main.tsx        # Entry point

public/
├── fonts/          # Custom fonts (SA Long Beach, Garet)
└── images/         # Decorative bear illustrations
```

## Design Specs

- **Background**: Warm cream (`#FAF7F2`)
- **Primary text**: Warm brown (`#7D5A3D`)
- **Hero text**: Dusty rose (`#B89080`)
- **Header font**: SA Long Beach (all caps, handwritten)
- **Body font**: Garet (sentence case, clean)

## Build

```bash
npm run build
```

## License

MIT
