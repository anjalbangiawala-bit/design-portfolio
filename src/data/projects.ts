// Updated designer name: Anjal Bangiawala

export interface SketchesPlaceholder {
  image: string; // URL or file path for the detailed sketches/process sheet
  caption: string;
}

export interface LogoVariant {
  name: string;
  description?: string;
  bgStyle: string; // Tailwind classes, e.g. "bg-burgundy", "bg-cream", "bg-zinc-900"
  textColor: string; // Tailwind class, e.g. "text-cream", "text-burgundy"
  image?: string; // URL manually specified later
  imagePlaceholder?: string; // URL to specific variant image, fallback is a high-end styled SVG
}

export interface GridDetails {
  geometryConcept: string;
  rules: string[];
}

export interface MockupItem {
  category?: string;
  title: string;
  description?: string;
  bgStyle?: string; // Tailwind bg class for card background
  image?: string; // Custom mockup image URL manually placed later
  imagePlaceholder?: string; // Fallback
}

export interface CaseStudyPage {
  type: 'overview' | 'process' | 'primary_logo' | 'core_concept' | 'unique_mark' | 'variations' | 'grid_system' | 'mockups';
  contentLabel: string;
  title: string;
  description: string;
  
  // Custom page-specific parameters for visual rendering:
  additionalParagraphs?: string[];
  sketches?: SketchesPlaceholder;
  logoImage?: string; // Custom logo image specifically, falls back to project default image
  gridImage?: string; // Custom Logo Construction / grid system image
  variants?: LogoVariant[];
  gridSpec?: GridDetails;
  mockupsList?: MockupItem[];
  palette?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // Featured image used on index list and default overview
  concept: string;
  colors: string[];
  typography: string;
  pages: CaseStudyPage[];
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Serin Botanics",
    subtitle: "Premium Skincare",
    description: "Elegant botanical identity for a high-end organic skincare and wellness brand.",
    image: "https://i.ibb.co/zWQTxP2p/Chat-GPT-Image-May-22-2026-05-52-07-PM.png",
    concept: "The concept revolves around the purity of nature and the serenity of self-care.",
    colors: ["#F5EEE8", "#6E1023", "#C3A15E"],
    typography: "Customized High-Contrast Serif",
    pages: [
      {
        type: 'overview',
        contentLabel: "About the Brand",
        title: "Brand Overview",
        description: "Serin Botanics a premium skincare brand centered around purity, beauty, and modern elegance. The logo was designed to actively express a sense of natural refinement and calm. Clean minimal aesthetics and thoughtful detailing create a soft, nourishing brand presence.",
        additionalParagraphs: [
          "The visual identity was developed to balance botanical softness with a premium contemporary appeal. A refined typography system and minimal compositions enhance the feeling of trust, care, and sophistication.",
          "Every design choice was intentionally crafted to feel emotionally calming and visually elegant. The final direction creates a modern skincare experience with a timeless and luxurious character."
        ]
      },
      {
        type: 'process',
        contentLabel: "Process",
        title: "Initial Explorations",
        description: "Early experimentation focused on different natural elements and botanical symmetry. I explored various different ideas to find a perfect balance between organic flow and structured high-end design. The early sketches capture raw human gestures before final digitalization.",
        sketches: {
          image: "https://i.ibb.co/5WMfSv3X/Untitled-design-3.jpg", 
          caption: "A comprehensive analysis tracing early hand sketches, biological geometry, and botanical stems into refined custom digital letterforms."
        }
      },
      {
        type: 'primary_logo',
        contentLabel: "Final Output",
        title: "Primary Logo",
        description: "The primary wordmark presents the complete Serin identity in balanced harmony. The spacing between glyphs is mathematically calculated to maximize legibility and premium brand presence under architectural gallery lighting.",
        logoImage: "https://i.ibb.co/4ZDw9H1w/g516.jpg"
      },
      {
        type: 'core_concept',
        contentLabel: "Creative Roots",
        title: "Core Concept",
        description: "The conceptual foundation explores the organic cohesion of botanical elements and refined typography, establishing a timeless premium visual signature.",
        logoImage: "https://i.ibb.co/KzyfkTH5/core-concept-1.jpg"
      },
      {
        type: 'variations',
        contentLabel: "Brand Architecture",
        title: "Logo Variations & Palette",
        description: "A cohesive brand should operate across multiple levels. We built alternate monograms, stamps, and high-contrast color applications that guarantee the identity communicates seamlessly on light, dark, or textured physical paper.",
        palette: ["7fbf5bff", "000000ff", "ffffffff", "c97a63ff", "6fa7a0ff", "f3e7dcff"],
        variants: [
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/j98dzBpG/g436.jpg"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/CppzM85R/g437.jpg"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/xqTP3SGv/g438.jpg"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/KjXDQLKs/g439.jpg"
          }
        ]
      },
      {
        type: 'grid_system',
        contentLabel: "Engineering Aesthetics",
        title: "Logo Construction",
        description: "Craft is driven by unseen metrics. Each serif is sculpted on a proportional grid, ensuring spatial distribution remains completely optical while standing firm on strict classic geometry guidelines.",
        gridImage: "https://i.ibb.co/ycmKfCDw/rect524.jpg",
        gridSpec: {
          geometryConcept: "The design uses a precise alignment grid to balance the circular emblem and vertical wordmark, ensuring proportional spacing and visual harmony. It also applies modular proportions and symmetry, aligning the emblem’s center with the text axis for equilibrium and rhythm.",
          rules: [
            "Baseline Consistency: The text aligns perfectly along a shared baseline, keeping the serif type stable and elegant.",
            "Optical Balance: The emblem’s circular form counterbalances the vertical text stack, achieving equal visual weight on both sides.",
            "Proportional Spacing: The horizontal guides ensure consistent margins and breathing space — a rule often derived from grid-based branding systems."
          ]
        }
      },
      {
        type: 'mockups',
        contentLabel: "Physical Touchpoints",
        title: "Real World Mockups",
        description: "The tactile brand experience translates through premium textures, weight, and light. We envision Serin Botanics in physical spaces where materials command respect and premium luxury can be felt.",
        mockupsList: [
          {
            title: "Packaging",
            image: "https://i.ibb.co/yBPSydFb/Free-Woman-s-Hand-Holding-Square-Box-Mockup.jpg"
          },
          {
            title: "Label",
            image: "https://i.ibb.co/BKg8sK7X/Paper-Stickers-Mockup.jpg"
          },
          {
            title: "Paper Bag",
            image: "https://i.ibb.co/XxcpD87r/Paper-Bag-PSD-Mockup.jpg"
          },
          {
            title: "Duct tape",
            image: "https://i.ibb.co/9mxDMPYs/Free-Duct-Tape-Mockup-3.jpg"
          },
          {
            title: "App Icon",
            image: "https://i.ibb.co/Wv2bTpp0/App-Icon-Mockup-serin.jpg"
          }
        ]
      }
    ]
  },
  {
    id: "02",
    title: "Stratos",
    subtitle: "Luxury Van Manufacturer & Seller",
    description: "Premium identity for a high-end custom van manufacturer and luxury vehicle seller.",
    image: "https://i.ibb.co/1t94Y8HM/Stratos-1st.png",
    concept: "A structured, geometric mark representing precision, travel, and bespoke engineering.",
    colors: ["#57111C", "#C3A15E", "#121212"],
    typography: "Classic Roman Serif",
    pages: [
      {
        type: 'overview',
        contentLabel: "Creative Direction",
        title: "Brand Overview",
        description: "STRATOS redefines the art of travel through geometric precision and purposeful design. Every line and angle reflects a vision of sophistication — crafted for those who value authenticity and trust. With no middlemen, STRATOS connects directly with its buyers, building lasting relationships grounded in transparency and elegance.",
        additionalParagraphs: [
          "The visual identity was developed to balance geometric strength with a premium contemporary appeal. A refined typography system and minimal compositions enhance the feeling of trust, direct connection, and sophistication.",
          "Every design choice was intentionally crafted to feel precise, transparent, and visually elegant. The final direction creates a modern automotive experience with a timeless and luxurious character, built on close relationships with buyers and a no‑middleman philosophy."
        ]
      },
      {
        type: 'process',
        contentLabel: "Process",
        title: "Initial Explorations",
        description: "Developing a mark based on the hexagon required careful attention to mathematical proportions. We explored how the six-sided shape represents efficiency and structural integrity in high-end vehicle design.",
        sketches: {
          image: "https://i.ibb.co/xq954hsy/stratos-initial.png",
          caption: "Isometric grid exploration mapping concentric circles, hexagonal sub-grids, and precise vector geometry for the vehicle chassis brand logo."
        }
      },
      {
        type: 'primary_logo',
        contentLabel: "Final Output",
        title: "Primary Logo",
        description: "The primary emblem represents the pinnacle of premium craftsmanship. Its symmetrical lines command power and stability, mirroring the elite custom engineering invested in every custom van chassis.",
        logoImage: "https://i.ibb.co/4R4K0sqQ/Stratos-primary.png"
      },
      {
        type: 'core_concept',
        contentLabel: "Creative roots",
        title: "Core Concept",
        description: "Exploring executive structural weight and geometric interlocking foundations that define the ultimate architectural presence of luxury bespoke vehicles.",
        logoImage: "https://i.ibb.co/4CLNxkN/core-concept-of-stratos.png"
      },
      {
        type: 'variations',
        contentLabel: "Brand Architectures",
        title: "Logo Variations & Palette",
        description: "The emblem operates with extreme clarity across varying scales, from tiny mechanical fasteners to oversized leather grill badges or sweeping executive transit wraps.",
        palette: ["8b6a2bff", "000000ff", "ffffffff", "0a1f44ff", "0b7161ff"],
        variants: [
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/FbfKBqH8/Stratos-black-white.png"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/zWbsJ2CX/Stratos-white-black.png"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/xrKLjL2/Stratos-2.png"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/9Hjh2gZm/Stratos-3.png"
          }
        ]
      },
      {
        type: 'grid_system',
        contentLabel: "Engineering Aesthetics",
        title: "Logo Construction",
        description: "Engineering precision is mirrored in our logo guidelines. Built from interlocking circles and perfect 120-degree hexagonal diagonals, the emblem achieves optimal optical alignment.",
        gridImage: "https://i.ibb.co/tpRV1K4y/Stratos-grid.png",
        gridSpec: {
          geometryConcept: "The design applies symmetry and geometric clarity, with intersecting lines forming a balanced diamond structure. Horizontal and vertical guides establish a precise alignment grid, ensuring proportional harmony between emblem and text.",
          rules: [
            "Central Axis Alignment → Emblem and text are balanced along shared vertical and horizontal guides.",
            "Proportional Spacing → Distance between mark and wordmark follows modular spacing for visual equilibrium.",
            "Contrast & Hierarchy → Gold emblem paired with white serif capitals creates premium duality and typographic authority."
          ]
        }
      },
      {
        type: 'mockups',
        contentLabel: "Physical Touchpoints",
        title: "Real World Mockups",
        description: "The luxury travel lifestyle is visualized through material implementation. We place the Hexagon identity on real, heavy-duty physical materials to demonstrate its premium brand weight.",
        mockupsList: [
          {
            title: "Wheel & Steering",
            image: "https://i.ibb.co/Nd6GGmsZ/Copilot-20260528-161441.png"
          },
          {
            title: "Showroom outlook",
            image: "https://i.ibb.co/rG3Wmsrs/Copilot-20260528-140318.png"
          },
          {
            title: "Event Display",
            image: "https://i.ibb.co/0yRdqygk/Copilot-20260528-141152.png"
          },
          {
            title: "Digital Setup",
            image: "https://i.ibb.co/whyc9jn9/Chat-GPT-Image-May-28-2026-02-23-42-PM.png"
          },
          {
            title: "Print Collateral",
            image: "https://i.ibb.co/sJ3XZWQz/Copilot-20260528-140852.png"
          }
        ]
      }
    ]
  },
  {
    id: "03",
    title: "Velora",
    subtitle: "Street Style Unisex Clothing",
    description: "Bold and contemporary identity for a high-end street style unisex fashion brand.",
    image: "https://i.ibb.co/FNKFmDG/Chat-GPT-Image-May-22-2026-05-59-32-PM.png",
    concept: "Merging urban energy with high-fashion silhouettes and premium fabrics.",
    colors: ["#FFFFFF", "#C3A15E", "#F5EEE8"],
    typography: "Elegant Modern Serif",
    pages: [
      {
        type: 'overview',
        contentLabel: "Urban Concept",
        title: "Brand Overview",
        description: "Velora a contemporary unisex streetwear brand built around boldness, confidence, and everyday expression. The identity was designed to deliver a sharp, eye-catching presence with a strong modern edge. Clean forms and impactful styling create a balanced visual language that feels centred, fearless, and fashion-forward.", 
        additionalParagraphs: [
          "The branding direction was developed to reflect the raw energy and individuality of modern street culture. A refined yet expressive visual system helps the brand feel distinctive, versatile, and instantly memorable.",
          "Minimal structure combined with striking visual elements creates a bold and confident brand presence. Every detail was carefully shaped to capture a fearless attitude with a clean contemporary appeal."
        ]
      },
      {
        type: 'process',
        contentLabel: "Process",
        title: "Initial Explorations",
        description: "The sketch exploration focused on creating a bold and instantly recognizable streetwear identity. Multiple form variations were tested to achieve a sharp, centred, and eye-catching visual direction. The process explored expressive structures, strong typography balance, and edgy stylistic elements.Each concept was refined to capture the raw energy and confidence of modern street culture.",
        sketches: {
          image: "https://i.ibb.co/YBnK7LnC/Untitled-design-2.jpg",
          caption: "Textural research layouts analyzing high-contrast stencil incisions, raw fabric drapes, and modernist fashion silhouettes."
        }
      },
      {
        type: 'primary_logo',
        contentLabel: "Final Output",
        title: "Primary Logo",
        description: "The final identity captures a bold and contemporary streetwear attitude through clean yet striking visual forms. Sharp detailing and balanced typography create a strong presence with confident energy. The logo was refined to feel modern, distinctive, and instantly recognizable across everyday fashion applications.",
        logoImage: "https://i.ibb.co/YBCkCQSK/VELORA-logo-primary.jpg"
      },
      {
        type: 'unique_mark',
        contentLabel: "Signature Touch",
        title: "Unique Mark",
        description: "An iconic, standalone visual symbol crafted to represent character and uncompromising attitude, operating as a distinct signature stamp for Velora.",
        logoImage: "https://i.ibb.co/F4R3Z6Mm/g503.jpg"
      },
      {
        type: 'variations',
        contentLabel: "Brand Architectures",
        title: "Logo Variations & Palette",
        description: "To support diverse capsules and garment materials, we adapted the Velora identity into distinct color blocks and tag styles, allowing a simple woven label to convey ultimate designer status.",
        palette: ["061d95ff", "946006ff", "5a3a29ff", "03562eff"],
        variants: [
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/dJwmrtkn/g2991111111.jpg"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/mFr8C4gQ/g30111110.jpg"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/Lhtwx3SM/g311100.jpg"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/Mx4FxYp1/g302.jpg"
          }
        ]
      },
      {
        type: 'grid_system',
        contentLabel: "Engineering Aesthetics",
        title: "Logo Construction",
        description: "Precision in luxury street fashion is the golden standard. All typographic letterform spacings are set with wide parameters, allowing the branding room to breathe on oversized garments.",
        gridImage: "https://i.ibb.co/R4HjQ7zq/g553.jpg",
        gridSpec: {
          geometryConcept: "The red horizontal and vertical guides enforce alignment, spacing, and proportion, while the yellow diagonals ensure consistent stroke angles and symmetry. The trapezoid accent in the “A” hints at proportional placement, echoing classic ratio-based design systems.",
          rules: [
            "Consistency of Stroke Angles → Yellow diagonals keep “V” and “A” slopes uniform for harmony.",
            "Typographic Grid Discipline → Red guides maintain alignment, spacing, and balanced proportions.",
            "Accent Placement Rule → The copper trapezoid anchors to a geometric point, adding deliberate punch."
          ]
        }
      },
      {
        type: 'mockups',
        contentLabel: "Physical Touchpoints",
        title: "Real World Mockups",
        description: "A fashion label is defined by the quality of its tangible details. We visualize Velora on custom packaging and clothing accents that define the designer experience.",
        mockupsList: [
          {
            title: "A man wearing tshirt",
            image: "https://i.ibb.co/pj9qRtmg/Free-Sweatshirt-on-Men-Mockup-for-VELORA.jpg"
          },
          {
            title: "Hardcover Bag",
            image: "https://i.ibb.co/KpC11f1x/shopping-bag-mockup-VELORA.jpg"
          },
          {
            title: "Apparel Tag",
            image: "https://i.ibb.co/67frVZhD/Free-Rectangle-Label-Mockup-3-VELORA.jpg"
          },
          {
            title: "Hoodie",
            image: "https://i.ibb.co/G3xjWhzT/Copilot-20260524-200624.png"
          },
          {
            title: "Cap",
            image: "https://i.ibb.co/8L0qdbvH/Copilot-20260524-200040.png"
          }
        ]
      }
    ]
  },
  {
    id: "04",
    title: "Nova Bites",
    subtitle: "Coffee Protein Bars",
    description: "Modern energy-focused identity for a premium coffee-infused protein bar brand.",
    // Logo provided by user: https://i.ibb.co/Rkq87DG4/MODERN-STREETWEAR.jpg
    image: "https://i.ibb.co/27N5f60D/Untitled-design-4.jpg",
    concept: "Fusing the ritual of coffee with the performance of high-protein snacks.",
    colors: ["#3E2723", "#C3A15E", "#F5EEE8"],
    typography: "Geometric Sans-Serif (Inter Custom)",
    pages: [
      {
        type: 'overview',
        contentLabel: "Fuel Strategy",
        title: "Brand Overview",
        description: "Nova Bites targets the active professional who values both rich flavor and clean energy performance. The identity reflects a powerful burst of focus, inspired by the premium daily coffee ritual.Their protein bars Hero Ingridient is COFFEE",
        additionalParagraphs: [
          "Our visual solution captures raw morning workflow momentum: crisp, typographic layout, grounding organic colors, and eye catching packaging details that stand out in high-end gyms.",
          "The design bypasses cheap generic supplement aesthetics, utilizing matte textured espresso papers and metallic foil details to create an authentic gourmet food artifact."
        ]
      },
      {
        type: 'process',
        contentLabel: "Packaging Design",
        title: "Initial Explorations",
        description: "Tracing the curves of coffee beans and high-impact energy bars, our sketching phase locked down structured rectangular blocks which house raw functional nutrients.",
        sketches: {
          image: "https://i.ibb.co/hq3Dbh7/Untitled-design-1.jpg",
          caption: "Packaging configuration layouts exploring typographic spacing, grid balance, and matte coffee-infused wrapper orientations."
        }
      },
      {
        type: 'primary_logo',
        contentLabel: "Final Output",
        title: "Primary Logo",
        description: "The main final presentation showcases the balanced wordmark. It represents soft energy & momentum. I choose this soft pallate because the whole market is crowded with strong and bold brand colors and so this  brand pallate stands out   ",
        logoImage: "https://i.ibb.co/nNPTZsDg/NOVA-primary123.png"
      },
      {
        type: 'core_concept',
        contentLabel: "Creative Roots",
        title: "Core Concept",
        description: "Fusing the daily morning focus ritual with modern athletic power, structuring an elegant yet highly impactful gourmet food packaging foundation.",
        logoImage: "https://i.ibb.co/ccZL7ZHL/core-concept.png"
      },
      {
        type: 'unique_mark',
        contentLabel: "Signature Touch",
        title: "Unique Mark",
        description: "Fusing athletic intensity with organic simplicity, this specialized icon signature has been crafted to anchor strong off-shelf brand recognition.",
        logoImage: "https://i.ibb.co/1f8wPyNV/Nova-N-color.png"
      },
      {
        type: 'variations',
        contentLabel: "Brand Architectur",
        title: "Logo Variations & Palette",
        description: "Nova Bites utilizes colors of rich organic earth paired with high luxury metals, allowing instant shelf recognition on our premium matte foil wrappers.",
        palette: ["6e4523ff", "c48431ff", "4b3621ff", "b1916fff", "8b4512ff", "f3a361ff"],
        variants: [
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/Lh29PzXM/Nova-black-white.png"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/60bq6y5H/Nova-white-black.png"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/6RykpKS5/Nova-2.png"
          },
          {
            name: "",
            bgStyle: "bg-neutral-900 border border-neutral-800",
            textColor: "",
            image: "https://i.ibb.co/Q741cD14/Nova-3.png"
          }
        ]
      },
      {
        type: 'grid_system',
        contentLabel: "Engineering Aesthetics",
        title: "Logo Construction",
        description: "Designed for small consumer surfaces. The sans-serif branding is built for immediate legibility at a distance, featuring a perfectly balanced spatial hierarchy.",
        gridImage: "https://i.ibb.co/8grDStLF/Nova-grid.png",
        gridSpec: {
          geometryConcept: "The black and yellow lines mark the baseline and cap height, ensuring “NOVA” and “Bites” align consistently and proportionally.",
          rules: [
            "Typographic Hierarchy: “NOVA” is bold and uppercase, while “Bites” is lighter and lowercase, creating clear visual hierarchy.",
            "Baseline Consistency: Both words sit on shared alignment guides, keeping the layout stable.",
            "Proportional Balance: The size contrast between “NOVA” and “Bites” follows modular proportion, giving rhythm and harmony."
          ]
        }
      },
      {
        type: 'mockups',
        contentLabel: "Physical Touchpoints",
        title: "Real World Mockups",
        description: "From textured matte wrappers on dark slate benches to elegant raw carton dispenser boxes. The identity shines across premium consumer touchpoints.",
        mockupsList: [
          {
            title: "Store Outlook",
            image: "https://i.ibb.co/67sV4Xsh/Chat-GPT-Image-May-27-2026-08-05-26-PM.png"
          },
          {
            title: "Wrapper",
            image: "https://i.ibb.co/7Jd6dtPD/Copilot-20260527-191227.png"
          },
          {
            title: "Billboard",
            image: "https://i.ibb.co/YTtpvsCF/Copilot-20260527-193941.png"
          },
          {
            title: "Box",
            image: "https://i.ibb.co/hTQq872/Copilot-20260527-191707.png"
          },
          {
            title: "Counter Display",
            image: "https://i.ibb.co/LzgPKZR3/Chat-GPT-Image-May-27-2026-08-13-10-PM.png"
          }
        ]
      }
    ]
  }
];
