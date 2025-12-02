# Project Guidelines: Vitality Bowl

## 1. Project Overview
**Concept:** "Vitality Bowl" - A Modern Eco restaurant website inspired by "The Fresh Market" archetype.
**Aesthetics:** Vibrant, Organic, "Clean Energy". High-saturation accent colors on white backgrounds.
**Functionality:** Strict browsing experience. **No e-commerce**. Users view menu/gallery but cannot add to cart.
**Key Visuals:** Floating imagery, organic shapes, fresh ingredients, hard shadows, bright lighting.

## 2. Tech Stack
- **Framework:** React (Vite environment pattern)
- **Styling:** Tailwind CSS v4.0 (Token-based)
- **Icons:** Lucide React
- **Components:** Shadcn UI (located in `/components/ui`)
- **Data:** TypeScript Object (Single source of truth in `/data/content.ts`)

## 3. Design System & Tokens

### Colors
- **Background:** White (`#ffffff`) - strictly used for main backgrounds to create "fresh" feel.
- **Primary:** Living Green (`#16a34a`) - Used for primary actions, branding.
- **Accent:** Zest Orange (`#f97316`) - Used for highlights, calls to action.
- **Text:** Dark Gray (`oklch(0.145 0 0)`) - High contrast for readability.

### Typography
- **Font Family:** 'Poppins', sans-serif.
- **Headings:** Medium weight (500), clean and modern.
- **Body:** Normal weight (400).

### UI Patterns
- **Buttons:** Pill-shaped (`rounded-full`). High saturation background with white text.
- **Cards:** White cards with subtle borders or shadows, often featuring organic rounded corners.
- **Imagery:** High-quality food photography, often isolated or with bright natural lighting.

## 4. Project Structure
```
/
├── App.tsx              # Main entry & Router (Custom string-based routing)
├── data/
│   └── content.ts       # CENTRAL DATA SOURCE. All text, prices, image URLs.
├── components/
│   ├── ui/              # Reusable Shadcn components
│   ├── [Feature].tsx    # Feature components (Hero, MenuGrid)
│   └── [Page].tsx       # Page views (MenuPage, StoryPage)
├── styles/
│   └── globals.css      # Global styles & Tailwind directives
└── guidelines/
    └── Guidelines.md    # This file
```

## 5. Coding Standards

### Data Driven
- **Strict Rule:** Do not hardcode content in components.
- **Implementation:** Import `siteContent` from `../data/content` (or `../../data/content`).
- **Pattern:** `siteContent.sectionName.fieldName`.

### Styling
- Use Tailwind utility classes.
- **Spacing:** Use standard Tailwind spacing (4, 6, 8, 12).
- **Typography:** Use `text-xl`, `font-medium` etc., but rely on globals for base family.
- **Classes:** Favor `bg-primary`, `text-accent` over arbitrary values to maintain the design system.

### Images
- **Source:** Use URLs from `siteContent`.
- **New Images:** If adding new images, add them to `content.ts` first, using Unsplash URLs.
- **Alt Text:** Mandatory, sourced from data.

### Routing
- **Method:** Custom client-side routing in `App.tsx`.
- **State:** `const [currentPage, setCurrentPage] = useState("/")`
- **Navigation:** Pass `onNavigate` prop to components that need links.
- **Pages:** Conditionally render page components based on `currentPage`.

## 6. Extension Guidelines
- When adding new pages:
  1. Create `NewPage.tsx` in `/components`.
  2. Update `siteContent.navigation` in `/data/content.ts`.
  3. Add conditional render in `/App.tsx`.
- When adding new sections:
  1. Add data schema and content to `/data/content.ts`.
  2. Create component consuming that data.
- **Constraint:** Keep it "Fresh". Avoid dark mode heavy designs unless specifically requested for a specific section (but general theme is White/Bright).
