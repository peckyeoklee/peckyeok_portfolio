# Portfolio Setup Instructions

## Required Fonts

This portfolio requires two custom fonts to be placed in the `/public/fonts/` directory:

### 1. SA Long Beach
- **Used for**: Name and navigation (header)
- **Required files**: 
  - `sa-long-beach.ttf` (required)
  - `sa-long-beach.woff` (optional, better browser support)
  - `sa-long-beach.woff2` (optional, best compression)

### 2. Garet
- **Used for**: Hero body text
- **Required files**:
  - `garet.ttf` (required)
  - `garet.woff` (optional, better browser support)
  - `garet.woff2` (optional, best compression)

## Required Images

### Bear Characters
Place three decorative bear images in `/public/images/`:
- `bear-1.png` - Left bear character (used in hero peeking and WEB DEV button)
- `bear-2.png` - Center bear character (used in hero peeking and DATA button)
- `bear-3.png` - Right bear character (used in hero peeking and DESIGN button)

These images should be:
- Transparent PNG format
- Tall enough to create the "peeking up" effect (recommended height: 400-600px)
- Similar width (recommended: 300-400px each)
- Bear faces should be clearly visible and centered for use in circular badges

### WORKS Section Background Layers
Place two background transition images in `/public/images/`:
- `lightPinkBg.png` - Light pink scalloped foreground layer
- `darkPinkBg.png` - Dark pink scalloped background layer

These images should be:
- Transparent PNG format with scalloped/wavy top edge
- Full viewport width (recommended width: 1920px or wider)
- The light pink layer should be slightly lighter/softer than the dark pink layer
- Height should be sufficient to create smooth transition (recommended: 300-500px)

### WORKS Section Content Images

#### Summary Note Images
Place three summary note images in `/public/images/`:
- `data-note.png` - DATA category summary (notebook style with lines)
- `webdev-note.png` - WEB DEV category summary
- `design-note.png` - DESIGN category summary

These images should be:
- PNG format (can have slight rotation/casual feel baked in)
- Styled like handwritten notebook pages
- Recommended dimensions: 300-400px wide, aspect ratio ~3:4
- Include category-specific summary text

#### Project Images
Place project screenshots/photos in `/public/images/`:

**DATA Projects:**
- `data-project-1.jpg`
- `data-project-2.jpg`
- `data-project-3.jpg`

**WEB DEV Projects:**
- `webdev-project-1.jpg`
- `webdev-project-2.jpg`
- `webdev-project-3.jpg`

**DESIGN Projects:**
- `smoodee.png` - SMOODEE UI/UX REBRAND
- `shioya.png` - SHIOYA PASSION PROJECT
- `noshinom.png` - NOSHNOM PRODUCT DESIGN

These images should be:
- JPG or PNG format
- Recommended aspect ratio: 4:3 (landscape)
- High quality (at least 800px wide)
- Representative screenshots or mockups of projects

### Project PDFs

Place project detail PDFs in `/public/pdfs/`:
- `noshinom.pdf` - NOSHNOM project details

These PDFs will open in a modal viewer when clicking the corresponding polaroid card.

## File Structure

```
public/
├── fonts/
│   ├── sa-long-beach.ttf
│   ├── sa-long-beach.woff (optional)
│   ├── sa-long-beach.woff2 (optional)
│   ├── garet.ttf
│   ├── garet.woff (optional)
│   └── garet.woff2 (optional)
├── images/
│   ├── bear-1.png
│   ├── bear-2.png
│   ├── bear-3.png
│   ├── lightPinkBg.png
│   ├── darkPinkBg.png
│   ├── data-note.png
│   ├── webdev-note.png
│   ├── design-note.png
│   ├── data-project-1.jpg
│   ├── data-project-2.jpg
│   ├── data-project-3.jpg
│   ├── webdev-project-1.jpg
│   ├── webdev-project-2.jpg
│   ├── webdev-project-3.jpg
│   ├── smoodee.png
│   ├── shioya.png
│   └── noshinom.png
└── pdfs/
    └── noshinom.pdf
```

## Color Palette

The design uses a warm, handcrafted aesthetic with the following colors:

- **Background**: `#FAF7F2` (warm cream / off-white)
- **Primary Text** (Name): `#7D5A3D` (warm brown)
- **Secondary Text** (Nav): `rgba(125, 90, 61, 0.75)` (lighter warm brown)
- **Hero Text**: `#B89080` (muted warm brown / dusty rose)

## Design Notes

### Hero Section
- Single-screen hero layout with generous whitespace
- Navigation is center-aligned, not a traditional navbar
- Bear images are intentionally cropped at the bottom for a playful "peeking" effect
- Typography creates the visual hierarchy - no heavy UI elements needed

### WORKS Section

#### Left Side - Category Buttons
- Three circular category buttons (DATA, WEB DEV, DESIGN)
- Each button features:
  - Perfect circle with white outline stroke (3px)
  - Bear character clipped inside circle
  - Curved text along the top edge using SVG textPath
  - Unique background colors: warm red/brown, green, blue
  - Hover effect with subtle scale and shadow enhancement
  - Active state with enhanced shadow and scale
- Buttons are fully clickable and accessible
- Clicking a button updates the right content panel

#### Right Side - Content Panel
- Dynamic content that changes based on selected category
- Layout consists of:
  - Summary note image (top-left, slightly rotated for casual feel)
  - Project cards in grid layout (polaroid style)
- Polaroid cards feature:
  - White frame with generous padding
  - Drop shadow for depth
  - Project image (4:3 aspect ratio)
  - Project title in handwritten font below image
  - Hover effect with lift animation
  - Clickable to open project details
- Grid adapts responsively:
  - Desktop: 2-column grid with note at top-left
  - Mobile: Single column with note above cards

#### PDF Modal Viewer
- Clicking on Noshinom polaroid card opens a PDF modal
- Modal features:
  - Full-screen darkened overlay (75% opacity black)
  - Centered PDF viewer with white background
  - Close button (✕) in top-right corner
  - Smooth fade-in and slide-up animations
  - Click outside modal or close button to dismiss
  - Responsive sizing across devices
- PDF displays in iframe for seamless viewing

