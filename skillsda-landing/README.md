# SkillsDA Motion Landing — Nuxt 3

A standalone landing-page starter built with **Nuxt 3, Tailwind CSS, Lenis, GSAP/ScrollTrigger and Three.js**. It lives in this subdirectory so it does not overwrite the parent starter.

## Included
- SkillsDA palette: blue `#0A4A72`, indigo `#252462`, pale blue `#E8F1F7`.
- Responsive editorial layout with floating navigation, hero, feature cards, learning path and footer.
- Lenis smooth scrolling loaded only on the client.
- GSAP hero word entrance, hero illustration reveal, and section/card reveals triggered by ScrollTrigger.
- Three.js wireframe geometry rendered on a transparent canvas, with resize handling and cleanup.
- Reduced-motion handling, keyboard focus styles, semantic landmarks and accessible canvas labelling.

## Run locally
Use Node.js 20+ and npm:

```bash
cd skillsda-landing
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Notes
- This is a front-end template; it does not implement authentication, course enrolment, payments or backend APIs.
- Replace placeholder copy and connect the primary call to action to the approved SkillsDA destination before publishing.
- The Three.js scene intentionally uses low-poly wireframe geometry and a capped pixel ratio to reduce GPU load. It is disabled when reduced motion is requested.
- External Google Fonts require a network connection; the CSS includes system fallbacks.
