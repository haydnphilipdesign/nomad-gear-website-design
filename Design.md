# NomadGear Website Design

## Overview
- **Motion Style**: Organic Cinematic Parallax with Fluid WebGL Transitions
- **Animation Intensity**: Ultra-Dynamic
- **Technology Stack**: React, GSAP (ScrollTrigger, Flip), Three.js (for subtle distortions), Lenis (Smooth Scroll)

## Brand Foundation
- **Colors**:
  - Primary Green: #3a5a40
  - Dark Green: #283618
  - Beige: #fefae0
  - Brown: #bc6c25
  - Light Brown: #dda15e
  - White: #ffffff
  - Black: #000000
- **Typography**: 
  - Primary: Satoshi (Weights: 300, 400, 500, 700, 900)
  - Secondary: Montserrat (Weights: 100-900)
- **Core Message**: Adventure, Reliability, Nature
- **Font Family**: Satoshi, Montserrat

## Global Motion System

### Animation Timing
- **Easing Library**: 
  - `custom-expo`: `cubic-bezier(0.16, 1, 0.3, 1)`
  - `fluid-scroll`: `cubic-bezier(0.62, 0.05, 0.01, 0.99)`
- **Duration Scale**: 
  - Micro-interactions: 0.3s
  - Layout shifts: 0.8s
  - Page transitions: 1.2s
- **Stagger Patterns**: 0.05s per character for text, 0.1s per element for grids

### Continuous Effects
- **Section-Specific Effects**: Soft ambient drift on floating elements, subtle grain overlays on solid backgrounds.
- **Purposeful Motion**: Elements float gently in opposition to cursor movement (parallax factor 0.02 to 0.05).
- **Living Textures**: A noise shader overlay (opacity 0.03) across the entire site to unify the "filmic" outdoor aesthetic.

### Scroll Engine
- **Smooth Scroll**: Lenis implementation with `lerp: 0.1`.
- **Parallax**: Multi-layer depth system (Backgrounds: speed 0.2, Content: speed 1.0, Floating Elements: speed 1.5).
- **Pinning**: Section titles pin briefly while content scrolls past.

## Section 1: Hero (Home Banner)

### Layout
**The Immersive Portal**
A full-screen experience where the UI elements float above a preserved, cinematic background. The layout breaks the traditional container model by pushing the headline to the extreme edges, creating a "widescreen" feel.

#### Spatial Composition
- **Z-Axis Stacking**: Background Image (-1) > Overlay (0) > Ambient Particles (1) > Main Content (2) > Navigation (3).
- **Typography**: The H1 "Find your next adventure" is split into three layers: The text (white), a subtle backdrop blur layer, and a stroke outline that animates separately.

### Content
- **Headline**: "Find your next adventure"
- **Description**: "We provide the best camping gear for your next adventure. Rent from us and explore the world."
- **CTA**: "Book now"

### Images
**Hero Background**
- **Resolution:** High-Res Landscape
- **Aspect Ratio:** 16:9 / Full Screen
- **Transparent Background:** No
- **Visual Style:** Documentary/Adventure Photography
- **Subject:** Orange dome tent by lakeside, forest backdrop, misty mountains
- **Color Palette:** Earthy tones, vibrant orange tent
- **Generation Prompt:** "A high-resolution, landscape-oriented photograph of a single orange dome tent set up by a calm lake, surrounded by a dense, lush green forest. In the background, misty, forested mountains rise under a soft, overcast sky. The composition is centered, with the tent reflecting in the water, creating a symmetrical, serene, and inviting mood. The color palette is natural and earthy, with vibrant greens, oranges, and muted blues. The overall style is documentary and adventure-focused, evoking a sense of solitude and connection with nature."

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Hero Image | Scale & Blur | Scale: 1.2→1, Blur: 10px→0 | 1.5s | 0s | custom-expo |
| Headline | Split-Text Slide | Y: 100%→0% | 1.0s | 0.2s | custom-expo |
| Description | Fade Up | Y: 20px→0, Opacity: 0→1 | 0.8s | 0.4s | ease-out |
| CTA | Magnetic Pop | Scale: 0→1 | 0.6s | 0.6s | elastic |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Hero Image | Parallax | Top | Bottom | Y: 0→30% |
| Scroll | Headline | Fade Out | Top | 50% | Opacity: 1→0, Blur: 0→10px |

#### Continuous Animations
- **Tent Glow**: A subtle, pulsating radial gradient overlay on the tent area in the image (using a mask), simulating a warm internal light. Duration: 4s loop.
- **Atmosphere**: A very faint drifting mist layer (SVG) moves horizontally across the mountains.

#### Interaction Effects
- **Magnetic CTA**: The "Book now" button attracts the cursor within a 50px radius.
- **Text Hover**: Hovering the headline causes a slight "chromatic aberration" split (RGB shift) of 2px.

### Advanced Effects

#### Shader Effects
- **Water Ripple**: On mouse move over the hero section, a subtle water ripple distortion (strength 0.002) affects the background image, emphasizing the lakeside setting. Implemented via WebGL plane.

#### Particle System
- **Dust Motes**: Canvas-based particle system generating floating dust motes (color #fefae0, opacity 0.3) that react to cursor velocity, adding depth to the forest atmosphere.

## Section 2: Navigation

### Layout
**Glassmorphism Command Bar**
Floating 20px from top. Detached from edges with rounded corners. Shrinks and blurs on scroll.

### Content
- **Logo**: SVG Icon
- **Links**: Home, Categories, Products, About, Contact
- **Actions**: Search, Cart (0)

### Motion Choreography
- **Scroll State**: On scroll down > 50px, the nav bar width shrinks from 100% to 90%, background opacity increases to 0.8, and backdrop-filter blur increases to 10px.
- **Link Hover**: Instead of a simple line, a "pill" shape slides behind the active link (using FLIP animation).
- **Cart Bounce**: Adding an item triggers a spring-based scale animation on the cart icon (Scale 1.5 -> 1).

## Section 3: Browse Categories

### Layout
**The Floating Archipelago**
Breaking the grid completely. Categories are arranged in a loose, organic cluster rather than a strict row. They float at different vertical positions.

#### Spatial Composition
- **Staggered Grid**: Items are offset vertically (margin-top: 0, 40px, 80px repeating).
- **Depth**: Each card has a different Z-depth simulated via drop-shadow intensity.

### Content
- **Title**: "Browse by category"
- **Categories**: Tents, Sleeping bags, Backpacks, Accessories

### Images
**Category Images (Tents, Bags, Backpacks, Accessories)**
- **Resolution:** 270x270px
- **Aspect Ratio:** 1:1
- **Transparent Background:** No
- **Visual Style:** Product Photography, Clean Studio
- **Subject:** Respective products on clean backgrounds

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Card 1 | Parallax | Enter | Exit | Y: 0→-40px |
| Scroll | Card 2 | Parallax | Enter | Exit | Y: 0→-20px |
| Scroll | Card 3 | Parallax | Enter | Exit | Y: 0→-60px |
| Scroll | Title | Reveal | Enter | 20% | Clip-path: 0→100% |

#### Interaction Effects
- **3D Tilt**: Cards tilt in 3D space towards the mouse cursor (perspective: 1000px, max rotation: 10deg).
- **Image Zoom**: Inner image scales 1.0 → 1.15 on hover.
- **Border Draw**: A circular border draws itself around the icon on hover (SVG stroke-dashoffset).

## Section 4: About (The Experience)

### Layout
**Cinematic Split-Screen with Morphing Mask**
The image and text are not just side-by-side; they interact. A large, organic "blob" mask contains the image, which morphs shape slightly as you scroll.

#### Spatial Composition
- **Left**: Dynamic Image Mask (60% width).
- **Right**: Content floating in negative space (40% width).
- **Overlap**: The text slightly overlaps the image container for depth.

### Content
- **Title**: "The best camping gear"
- **Body**: "We provide the best camping gear for your next adventure. Rent from us and explore the world."
- **CTA**: "Explore"

### Images
**About Section Image**
- **Resolution:** 632x640px
- **Aspect Ratio:** ~1:1
- **Transparent Background:** No
- **Visual Style:** Documentary/Adventure Photography
- **Subject:** Two people at forest campsite, green pickup truck, large tent
- **Generation Prompt:** "A high-resolution, documentary-style photograph of a serene forest campsite. In the center, a large, modern tent is set up on the forest floor, surrounded by tall, mossy trees. To the right, two people are engaged in camping activities, with a green pickup truck parked nearby. The scene is illuminated by soft, natural daylight, creating a calm and inviting atmosphere. The color palette features lush greens, earthy browns, and muted tones, emphasizing a peaceful connection with nature."

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Image Mask | Morph | Enter | Exit | Radius: 30% 70% → 60% 40% |
| Scroll | Image Inner | Scale | Enter | Exit | Scale: 1.2 → 1.0 |
| Scroll | Text Block | Slide | Enter | 30% | X: 50px→0, Opacity: 0→1 |

#### Continuous Animations
- **Floating Badge**: A circular badge (e.g., "Est. 2020") orbits slowly around the main image container.

## Section 5: Products

### Layout
**Horizontal Scroll "Film Strip"**
Instead of a vertical grid, this section locks the vertical scroll and moves the product cards horizontally, mimicking a film strip or a rack of gear sliding into view.

#### Spatial Composition
- **Container**: Sticky height (300vh scroll distance mapped to horizontal translation).
- **Cards**: Arranged in a single row, large spacing.

### Content
- **Title**: "Our products"
- **Products**: Weekend Light Kit, Family Camping, Solo Adventure, Group Camping.

### Images
**Product Images**
- **Resolution:** 570x400px
- **Aspect Ratio:** 4:3
- **Transparent Background:** No
- **Visual Style:** Product Lifestyle Photography
- **Subject:** Various camping setups

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Product Track | Horizontal Move | Top | Bottom | X: 0 → -150% |
| Scroll | Progress Bar | Scale X | Top | Bottom | ScaleX: 0 → 1 |

#### Interaction Effects
- **Card Focus**: Hovering a card dims the others (opacity 0.5) and scales the active card (1.05).
- **Price Pop**: The price tag flips down from the top of the card on hover.

## Section 6: Destinations (Inspiration)

### Layout
**Infinite Parallax Mosaic**
A two-column layout where the left column scrolls at natural speed and the right column scrolls at 1.2x speed, creating a dynamic shearing effect.

### Content
- **Title**: "Destinations"
- **Locations**: Alpine Lake, Redwoods, Coastal Camp.

### Images
**Destination Images**
- **Resolution:** 670x600px
- **Aspect Ratio:** 4:3
- **Transparent Background:** No
- **Visual Style:** Landscape Photography
- **Subject:** Scenic camping locations

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Right Col | Fast Scroll | Enter | Exit | Y: 0 → -100px (Accelerated) |

#### Interaction Effects
- **Polaroid Reveal**: Images are initially black & white. On hover, they bloom to full color and lift (translateZ 20px).

## Section 7: Testimonials

### Layout
**Orbital Voice Cloud**
Testimonials are not in a grid. They are cards positioned in a circular orbit around a central "Trust" typography core. On mobile, they stack, but on desktop, they rotate or can be dragged around the orbit.

### Content
- **Title**: "What our customers say"
- **Testimonials**: Sarah, John, Mike.

### Images
**Avatar Images**
- **Resolution:** 50x50px
- **Aspect Ratio:** 1:1
- **Transparent Background:** No
- **Visual Style:** Portrait Photography
- **Subject:** Happy customers

### Motion Choreography
- **Orbit**: The entire ring of cards rotates slowly (1 revolution / 60s).
- **Hover**: Hovering a card pauses the orbit and brings that card to the front (Z-index 100, Scale 1.1).

## Section 8: CTA (Join the Club)

### Layout
**The Vortex Footer**
A high-energy finale. The background image is treated with a "Tunnel" distortion effect that draws the eye toward the "Sign Up" button.

### Content
- **Title**: "Join the club"
- **Form**: Email input + Subscribe button.

### Images
**CTA Background**
- **Resolution:** Full Screen
- **Aspect Ratio:** 16:9
- **Transparent Background:** No
- **Visual Style:** Landscape Photography
- **Subject:** Mountain range, outdoor adventure
- **Generation Prompt:** "A high-resolution, wide-angle photograph of a majestic mountain landscape. In the foreground, a lush green meadow dotted with wildflowers and a few people enjoying the outdoors. The middle ground features a dense pine forest, while the background showcases towering, rugged mountain peaks partially shrouded in mist and clouds. The sky is bright and slightly overcast, creating soft, diffused lighting. The overall mood is serene and inviting, with a natural, earthy color palette and a focus on the grandeur of nature."

### Motion Choreography
- **Vortex Effect**: The background image has a shader applied that twists the pixels slightly towards the center of the screen where the form is located.
- **Form Focus**: Clicking the email input causes the background to dim and blur, focusing entirely on the task.

## Section 9: Footer

### Layout
**Minimalist Reveal**
The footer is fixed at the bottom of the viewport with `z-index: -1`. The previous section (CTA) scrolls *up* to reveal the footer underneath (curtain reveal effect).

### Content
- **Links**: Socials, Legal, Credits.

### Motion Choreography
- **Reveal**: As the CTA section slides up, the footer content scales down slightly (1.1 → 1.0) to create a "settling in" feeling.

---

## Technical Implementation Notes

### Required Libraries
- **GSAP**: Core animation engine (ScrollTrigger, Flip plugin).
- **Lenis**: For buttery smooth scroll damping.
- **Three.js / React-Three-Fiber**: For the Hero water ripple and CTA vortex effects.
- **SplitType**: For text splitting animations.

### Critical Performance Rules
- ✅ **WebGL Canvas**: Use a single full-screen canvas in the background with `pointer-events: none` for shaders to avoid multiple contexts.
- ✅ **Transform3D**: Always use `translate3d` for moving elements to force hardware acceleration.
- ✅ **Observer**: Disable WebGL effects when the canvas is not in the viewport.
- ❌ **No Layout Thrashing**: Read layout metrics (offset, clientHeight) once at initialization or resize, never in the scroll loop.

### Browser Support
- **Fallbacks**: CSS Grid fallbacks for complex layouts on older browsers.
- **Reduced Motion**: If `prefers-reduced-motion` is detected, disable smooth scroll, parallax, and WebGL distortions; fallback to simple fades.
