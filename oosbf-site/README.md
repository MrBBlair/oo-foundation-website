# Omicron Omicron Scholarship and Benevolent Foundation (OOSBF)

A professional, modern, and mobile-responsive website for the OOSBF—a 501(c)(3) non-profit organization focused on providing scholarships to youth in the Greater Daytona Beach area and supporting community uplift through benevolent giving.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Components:** Shadcn-style utilities + Lucide React icons
- **Animations:** Framer Motion

## Getting Started

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with Navbar & Footer
│   ├── page.tsx        # Landing page
│   └── globals.css     # Theme & global styles
├── components/
│   ├── Navbar.tsx      # Responsive navigation
│   └── Footer.tsx      # Site footer with 501(c)(3) disclosure
└── lib/
    └── utils.ts        # Utility functions (cn, etc.)
```

## Design

- **Theme:** Regal Light with Old Gold (#FFD700) and Royal Purple (#330066) accents
- **Typography:** Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Patterns:** Greek-key borders and subtle shield watermarks

## Build

```bash
npm run build
npm start
```
