/create using the astro framework, tailwind, 3js.  Only 1 page for now. Keywords: Fluid shapes, blurred transparency, organic movement, glossy, dynamic
Technical: SVG blobs, backdrop-filter, animated transforms
Use When: Creative agencies, modern SaaS, interactive experiences
Avoid: Traditional industries, conservative audiences. ### Color System Best Practices

```
✅ DO:
- Use 60-30-10 rule (60% dominant, 30% secondary, 10% accent)
- Ensure WCAG AA compliance (4.5:1 for text)
- Create semantic color tokens (--color-success, --color-error)
- Test in both light and dark modes

❌ DON'T:
- Use more than 3 primary colors
- Use pure black (#000) on pure white (#FFF) - too harsh
- Rely on color alone for information (accessibility)
- Use low-contrast grey text (#CCC on #FFF)

``` Headings: Inter (Variable Font)
Body: Roboto or System UI
Mono: JetBrains Mono (for code)

Personality: Clean, scalable, professional
Weights: 400 (regular), 600 (semibold), 700 (bold). ## ✨ DIMENSION 5: Animations & Interactions

**This is what transforms "good" into "Pro Max". Explicitly request these:**

### Micro-Interactions

### **Button Interactions**

```css
/* Hover Effects */
- Scale up: transform: scale(1.02)
- Lift: box-shadow elevation + translateY(-2px)
- Ripple: Radial gradient animation from click point
- Glow: Outer glow on hover (box-shadow with color)
- Border beam: Animated gradient border (Linear-style)

/* Timing */
- Duration: 150-300ms
- Easing: cubic-bezier(0.4, 0, 0.2, 1)

```

### **Input Focus States**

```css
/* Focus Glow */
- Ring: 2-4px outline with brand color at 50% opacity
- Glow: Soft box-shadow with brand color
- Border shift: Border color change + subtle scale
- Label float: Animated label moving up on focus

/* Accessibility */
- Always visible focus indicators
- Minimum 3px outline width
- High contrast (3:1 ratio)

```

### **Card Hover Effects**

```css
/* Premium Card Interactions */
- Lift + Shadow: translateY(-4px) + shadow increase
- Tilt: 3D perspective tilt on hover (subtle, 2-3deg)
- Glow border: Animated gradient border reveal
- Content reveal: Hidden content slides in on hover
- Image zoom: Scale image 1.05x inside container

```

---

### Scroll Animations

### **Reveal on Scroll**

```jsx
// Staggered Entrance
- Fade up: opacity 0→1 + translateY(20px→0)
- Stagger delay: 100ms between elements
- Trigger: When element is 20% in viewport
- Duration: 600ms
- Easing: ease-out

```

### **Parallax Effects**

```jsx
// Layered Depth
- Hero background: Scroll speed 0.5x
- Foreground elements: Scroll speed 1.2x
- Subtle only: Max 20-30px movement
- Performance: Use transform, not position

```

### **Progress Indicators**

```css
/* Reading Progress */
- Top bar: Fixed position, width based on scroll %
- Circular: SVG circle with stroke-dashoffset
- Smooth: transition: width 100ms linear

```

---

### Page Transitions

### **Route Changes**

```css
/* Smooth Navigation */
- Fade: opacity transition 200ms
- Slide: translateX(-100%→0) 300ms
- Blur: filter: blur(0→10px→0)
- Crossfade: Overlap old/new content

```

### **Modal/Dialog Animations**

```css
/* Entrance */
- Backdrop: opacity 0→1 (200ms)
- Content: scale(0.95→1) + opacity 0→1 (300ms)
- Stagger: Backdrop first, then content

/* Exit */
- Reverse animation
- Faster duration (200ms)

```

---

### Loading States

### **Skeleton Loaders**

```css
/* Content Placeholders */
- Shimmer effect: Linear gradient animation
- Shape matching: Match final content layout
- Color: Light grey (#E5E7EB) on white
- Animation: 1.5s infinite ease-in-out

```

### **Spinners & Progress**

```css
/* Loading Indicators */
- Spinner: Rotating circle with gradient
- Progress bar: Indeterminate animation
- Pulse: Scale + opacity animation
- Duration: 1-2s infinite

```

---

### Advanced Effects

### **Beams & Glows** (Linear/Vercel Style)

```css
/* Border Beams */
- Animated gradient border
- Conic gradient rotation
- Subtle glow effect
- Use for: CTAs, featured cards, premium elements

/* Implementation */
background: linear-gradient(90deg, transparent, #3B82F6, transparent);
animation: beam 2s infinite;

```

### **Mesh Gradients**

```css
/* Animated Backgrounds */
- Multi-color gradient mesh
- Slow hue rotation (60s+)
- Blur for organic feel
- Use for: Hero sections, backgrounds

```

### **Glassmorphism Blur**

```css
/* Glass Effect */
backdrop-filter: blur(10px) saturate(180%);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);

```

---

### Animation Performance Rules

```
✅ DO:
- Use transform and opacity (GPU accelerated)
- Set will-change for animated elements
- Use requestAnimationFrame for JS animations
- Debounce scroll events
- Prefer CSS animations over JS when possible
- Test on low-end devices

❌ DON'T:
- Animate width, height, or position
- Use animations longer than 500ms for interactions
- Animate during user input (blocks interaction)
- Use too many simultaneous animations
- Forget prefers-reduced-motion media query
- Animate on scroll without throttling

```

---

### Accessibility Considerations

```css
/* Respect User Preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

```

---

## 🚫 Anti-Patterns: What to AVOID

**Tell the agent explicitly what NOT to do:**

### Design Anti-Patterns

```
❌ Flash Over Function
- No animations that block user action
- No transitions longer than 300ms for interactions
- No auto-playing videos with sound
- No infinite scroll without pagination option

❌ Low Contrast Crimes
- No light grey (#CCC) on white backgrounds
- No pure white text on pure black (too harsh)
- Ensure WCAG AA minimum (4.5:1 for text)
- Test with color blindness simulators

❌ Over-Cluttered Chaos
- No more than 3 primary colors
- No more than 2 font families
- No more than 5 font sizes in a single view
- No inconsistent spacing (use 8px grid system)

❌ Mystery Meat Navigation
- Icons must have labels or tooltips
- No hamburger menus on desktop
- No hidden navigation without clear affordance
- No "clever" navigation that confuses users

❌ Mobile Hostility
- No tiny tap targets (minimum 44x44px)
- No horizontal scrolling (unless intentional carousel)
- No hover-dependent interactions on touch
- No fixed elements that cover content

❌ Performance Sins
- No unoptimized images (use WebP, lazy loading)
- No render-blocking resources
- No layout shifts (CLS > 0.1)
- No heavy animations on page load

```

### UX Anti-Patterns

```
❌ Form Frustrations
- No labels inside inputs (accessibility issue)
- No "clear all" without confirmation
- No validation only on submit
- No disabled submit buttons (show errors instead)

❌ Content Crimes
- No walls of text without hierarchy
- No auto-playing carousels (users miss content)
- No "click here" links (not descriptive)
- No Lorem Ipsum in production

❌ Accessibility Failures
- No keyboard navigation traps
- No missing alt text on images
- No color-only information conveyance
- No auto-focus on page load (except search)

```
