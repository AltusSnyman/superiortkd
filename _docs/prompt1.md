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

``` ROLE:
You are a World-Class UI/UX Web Designer and Developer. You specialize in creating high-impact, athletic, and premium landing pages. You do not build "average" websites; you build digital experiences that win Gold Medals.

GOAL:
Create a high-fidelity wireframe and visual design for "Superior Taekwondo," a martial arts school in New Zealand run by an Olympian.

GLOBAL DESIGN LANGUAGE (The Vibe):

Font: Use "Montserrat" or "Oswald" for headings (Strong, Bold, Uppercase). Use "Open Sans" or "Roboto" for body text (Clean, easy to read).

Color Palette - The "Champion" Theme:

Midnight Black Gradient: Do not use flat black. Create a linear gradient for backgrounds that goes from Pure Black (#000000) at the bottom to a Deep Charcoal (#1A1A1A) at the top. This adds depth and makes it look 3D.

Victory Gold Gradient: For buttons and key headings, use a metallic gradient. Start with a Bronze/Dark Gold (#C5A059) and melt it into a Bright Shimmering Gold (#E6C200). It should look like a real gold medal reflecting light.

Crisp White: Use pure white (#FFFFFF) for text on dark backgrounds to make it pop.

SECTION 1: THE HERO (Above the Fold)
Layout: Full-screen width and height.
Background: The image covers the whole screen (edge-to-edge). Put a dark overlay (50% opacity black) on top of the image so the white text is easy to read.
Text Position: Center of the screen. Big and loud.

Content:

H1 (Main Headline): UNLEASH YOUR POTENTIAL

H2 (Sub-headline): Train with an Olympian. The Premier Professional Taekwondo School in North West Auckland.

Button (CTA): [ START YOUR JOURNEY ] (Make this button the Victory Gold Gradient with Black text).

IMAGE GENERATION PROMPT 1 (Hero Background):

Create an ultra realistic image of a female Taekwondo fighter performing a high flying side kick in mid-air. The camera angle is low, looking up at her to make her look powerful. The background is a dark, moody arena with dramatic stadium spotlights shining down through smoke. High contrast, cinematic 8k resolution, sports photography style.

SECTION 2: THE INTRODUCTION
Layout: Split screen. Left side is text, Right side is the image.
Background: Pure White (#FFFFFF). Text is Black.

Content:

H2: WELCOME TO SUPERIOR TAEKWONDO

H3: More than a dojo. A legacy.

Body Text: Located in the heart of North West Auckland, Superior Taekwondo offers elite-level training for all ages. Whether you are beginning your martial arts journey or aspiring to compete on the world stage, training in the right environment is everything. We combine traditional discipline with modern competitive excellence. Here, you don't just learn to kick; you learn to rise.

IMAGE GENERATION PROMPT 2 (Intro Image):

Create an ultra realistic close-up detailed shot of a black martial arts belt tied tightly around a white uniform (dobok). The texture of the fabric should be visible. The belt should show slight signs of wear and tear to symbolize years of hard work and grit. Lighting is soft and natural daylight. Shallow depth of field with a blurred background.

SECTION 3: THE OLYMPIAN (Authority)
Layout: Split screen. Left side is the Image, Right side is the Text.
Background: The "Midnight Black Gradient." Text is White. Highlight keywords in "Victory Gold."

Content:

H2: HEAD INSTRUCTOR: ANDREA KILDAY

H3 (In Gold): 3rd Dan Black Belt | Rio 2016 Olympian

Body Text: Andrea Kilday is not just a teacher; she is a testament to resilience. A dominant force in the -49kg division, Andrea’s journey took her to the pinnacle of sport: The Olympic Games. After qualifying for Beijing 2008 but facing non-selection, she demonstrated the ultimate black belt tenet—Perseverance—fighting her way back to win Gold at the Oceania Qualifiers and representing New Zealand at the Rio 2016 Olympics.

Key Stats (Bullet points):

Rio 2016 Olympian (-49kg)

Pacific Games Gold Medalist (2015)

Oceania Olympic Selection Gold (2007 & 2016)

IMAGE GENERATION PROMPT 3 (Instructor Portrait):

Create an ultra realistic portrait of a female Taekwondo master standing with arms crossed. She is looking directly at the camera with a confident, fierce expression. She is wearing a crisp white V-neck uniform with a black collar. The lighting is dramatic "Rembrandt" style lighting with a rim light behind her creating a glowing silhouette against a dark background.

SECTION 4: THE WALL OF FAME (Stats)
Layout: A 3-Column Grid.
Background: Dark Charcoal Grey (slightly lighter than the Hero section).

Content:

H2 (Centered): A HISTORY OF VICTORY

Column 1 Title (Gold): INTERNATIONAL

2016 US Open Masters – Gold

2016 Oceania Olympic Selection – Gold

2015 Pacific Games – Gold

2014 Gold Coast Open (Triple Gold)

Column 2 Title (Gold): NEW ZEALAND

10x TNZ National Champion

9x Federation National Champion

2021 Hyeon Mu Best Female Fighter

2025 Kukkiwon Cup Gold

Column 3 Title (Gold): LEGACY

Rio 2016 Olympic Games

Beijing 2008 Qualified

6x South Island Champion

IMAGE GENERATION PROMPT 4 (Background Texture or Side Image):

Create an ultra realistic image of a collection of gold medals and trophies sitting on a wooden surface. A New Zealand flag is draped softly in the background. The lighting is warm and golden, causing the metal medals to shine and sparkle. 8k resolution, macro photography.

SECTION 5: FOOTER
Layout: Centered content.
Background: Solid Black (#000000).

Content:

H2: READY TO TRAIN?

Sub-text: Superior Taekwondo - North West Auckland, New Zealand.

Phone: 027 520 1613

Email: superiorfitnessnz@gmail.com

Button: [ CONTACT US ]
