# Stay True — Claude Code Context

## Project Identity

Portfolio/marketing site for **Stay True Digital Studio**, a web development agency in Cancún, Mexico. One-page design showcasing services, projects, stack, process, and contact info.

**Owner:** Kabir (kabiralberto10@gmail.com | WhatsApp +52 998 116 9584)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Astro.js v6.1.3 (static output) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4.2.2 |
| Animation | GSAP v3.15.0 + ScrollTrigger |
| Smooth scroll | Lenis v1.3.23 |
| 3D (Hero) | Three.js v0.184.0 (particle network) |
| Package manager | pnpm |
| Node.js | >=22.12.0 |

---

## Dev Commands

```bash
pnpm dev        # localhost:4321
pnpm build      # → dist/
pnpm preview    # preview dist/
```

---

## File Structure

```
src/
  pages/
    index.astro       # ENTIRE SITE — ~1,260 lines, monolithic
  styles/
    global.css        # Tailwind import + custom theme vars + keyframes
public/
  favicon.ico
  favicon.svg
  img/logo.svg
astro.config.mjs      # Astro config (Tailwind via Vite plugin)
tsconfig.json         # extends astro/tsconfigs/strict
```

**Single file architecture.** Everything lives in `index.astro`. No components, no layouts, no utilities. This is intentional — keep it that way unless explicitly asked to refactor.

---

## Design System

### Colors (CSS custom properties in global.css)

```css
--canvas-1: #030704      /* primary bg */
--canvas-2: #010402      /* secondary bg */
--text-primary: #e8efe9  /* main text */
--text-muted: #7a9082    /* muted text */

/* Green accent palette */
--accent-spring: ...     /* spring green */
--accent-mint: ...       /* mint */
--accent-lime: ...       /* lime */
--accent-emerald: ...    /* emerald */
```

### Theme
- Dark background (#030704)
- Green accent system (4 shades)
- Glassmorphism (backdrop-blur + transparency)
- Card-based layouts + bento grid
- Responsive: mobile-first, `md:` breakpoint

---

## Animations

All animations managed via GSAP + ScrollTrigger. Key patterns:

- **Scroll progress bar** — fixed top, width tied to scroll position
- **Hero entrance** — staggered 3D emerge (rotateX / rotateY / perspective) on load
- **Hero background** — Three.js particle network with connection lines (130 particles desktop, 55 mobile), mouse parallax, scroll-linked camera depth
- **Stats counters** — animated number increment on scroll-into-view
- **Section headers** — stagger animations per section (rotateX perspective)
- **Service cards** — 3D tilt-up scrub reveal (rotateX)
- **Project cards** — horizontal drift on scroll (rotateY from left/right)
- **Why Us / Bento** — main card scale-in + blur, feature cards tilt-in with rotation
- **Stack badges** — sequential rotateY flip wave
- **Process steps** — scrubbed timeline slide-in + active glow state

**Lenis** wraps all scrolling (1.2s duration). GSAP ticker runs inside Lenis RAF.

**Accessibility:** `prefers-reduced-motion` check disables all animations.

---

## Page Sections (in order)

1. **Hero** — headline, location badge, CTA buttons (WhatsApp + portfolio), stats
2. **Servicios** — Web Dev, Mobile Apps, Desktop Apps
3. **Proyectos** — 12 real projects (see data array in index.astro)
4. **Por Qué Stay True** — bento grid: 1 hardcoded main card (`#bento-main`) + 4 array items from `bentoFeatures`
5. **Stack Tecnológico** — 12 tech badges
6. **Proceso** — 4-step methodology
7. **Contacto** — CTA section (WhatsApp + Email)
8. **Footer** — nav links, contact, copyright

---

## Data (in index.astro)

All site content is defined as arrays near top of frontmatter:

| Array | Contents |
|---|---|
| `services` | 3 service definitions |
| `projects` | 12 project entries (name, url, desc, stack, active) |
| `bentoFeatures` | 4 value propositions (rendered into bento grid alongside hardcoded main card) |
| `techStack` | 12 tech badges |
| `processSteps` | 4 process steps |

To add/edit content → find these arrays, edit inline. No CMS, no external data source.

---

## Key Conventions

- **Spanish content** — all user-facing text is Spanish (Mexican market)
- **No component splits** — don't extract to components unless asked
- **Tailwind classes** — prefer Tailwind over custom CSS
- **GSAP for animation** — don't add CSS animations for scroll effects; use GSAP
- **No adapters** — static site, no SSR, no API routes
- **pnpm only** — don't use npm or yarn

---

## Known Architecture Notes

- `dist/` is committed to repo (built output tracked)
- All JS is inline in `<script>` tag at bottom of index.astro (~lines 887–1259)
- No dynamic routing — single `index.astro` = entire site
- Tailwind v4 uses `@import "tailwindcss"` syntax (not v3 `@tailwind` directives)
- GSAP ScrollTrigger registered via `gsap.registerPlugin(ScrollTrigger)`
- Three.js particle scene is inside the same `<script>`, only runs if `prefers-reduced-motion: reduce` is NOT matched
- Mobile menu toggle + card spotlight mouse-tracking are vanilla JS in the same inline script

---

## Contact / Business Info

- Studio: Stay True Digital Studio
- Location: Cancún, México
- WhatsApp: +52 998 116 9584
- Email: kabiralberto10@gmail.com
- Claimed experience: 7+ years
- Projects delivered: 12+
