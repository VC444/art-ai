// Art styles with real-style images
export const artStyles = [
  {
    id: "impressionist",
    name: "Impressionist",
    description:
      "Characterized by small, thin brush strokes and emphasis on light",
    previewSrc: "/plate.png",
  },
  {
    id: "ghibli",
    name: "Ghibli",
    description:
      "Studio Ghibli-inspired art style with whimsical characters and landscapes",
    previewSrc: "/ghibli.webp",
  },
  {
    id: "19th century",
    name: "19th Century",
    description: "19th-century art with classical details and vintage tones",
    previewSrc: "/1800s.png",
  },
  {
    id: "pixar",
    name: "Pixar",
    description: "Pixar art style",
    previewSrc: "/pixar.png",
  },
  {
    id: "watercolor",
    name: "Watercolor",
    description: "Transparent layers with soft, flowing transitions",
    previewSrc: "/watercolor.png",
    prompt:
      "Convert this image into a soft, elegant watercolor painting. Apply gentle brush strokes, fluid textures, and subtle color bleeds characteristic of traditional watercolor art. Use a pastel-toned, airy palette with soft edges and light gradients. If the image contains people, ensure facial features, expressions, skin tones, and body proportions are accurately preserved—maintain identity and natural appearance while enhancing the artistic style. Keep the composition and key details intact for a realistic yet painterly effect.",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    description:
      "Cyberpunk-inspired art style with neon colors and futuristic elements",
    previewSrc: "/cyberpunk.png",
    prompt:
      "Transform this image into a high-detail cyberpunk-style artwork. Apply a futuristic, neon-lit aesthetic with vibrant colors like electric blues, purples, and pinks. Add elements such as holograms, glowing circuitry, high-tech textures, and atmospheric lighting (rain, fog, or city lights). If the image contains people, preserve their facial features, expressions, skin tones, and body proportions accurately—maintain their identity while blending them naturally into the cyberpunk environment. Keep the composition and core details consistent while enhancing the scene with a gritty, tech-noir vibe.",
  },
  {
    id: "pixel-art",
    name: "Pixel Art",
    description: "Digital art created using pixel-by-pixel editing",
    previewSrc: "/pixel.png",
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Pencil-like drawing with emphasis on lines and shading",
    previewSrc: "/sketch.png",
    prompt:
      "Convert this image into a detailed black-and-white pencil sketch. Use fine, expressive lines and soft shading to capture depth, form, and texture. Emphasize contrast between light and shadow, while maintaining a hand-drawn, artistic feel. If the image contains people, carefully preserve facial features, expressions, skin tones (as shades), and body proportions—ensure the likeness and natural anatomy are intact. Focus on clarity and realism while enhancing the image with the charm of traditional pencil work. Retain the original composition and key visual elements.",
  },
  {
    id: "oil-painting",
    name: "Oil Painting",
    description: "Rich colors with textured brush strokes",
    previewSrc: "/oil-painting.avif",
  },
  {
    id: "caricature",
    name: "Caricature",
    description:
      "Caricature art style with exaggerated features and playful elements",
    previewSrc: "/caricature.png",
    prompt:
      "Convert this image into a playful caricature-style artwork. Exaggerate prominent features such as the eyes, nose, mouth, head shape, or hairstyle in a humorous yet recognizable way. Use bold outlines, vibrant colors, and smooth shading to create a polished, cartoon-like look. Ensure the overall expression and pose are energetic, lively, and fun. If the image contains people, preserve the core facial features, expressions, and skin tones so their identity remains clear, but apply exaggerated proportions that reflect their personality or expression. Keep body proportions slightly stylized and maintain the original scene or background in a simplified, cartoonish form.",
  },
  {
    id: "gothic-noir",
    name: "Gothic Noir",
    description:
      "Gothic noir art style with dark, moody elements and dramatic lighting",
    previewSrc: "/gothic.png",
    prompt:
      "Transform this image into a dramatic Gothic Noir artwork. Apply a moody, monochromatic or desaturated palette with deep shadows, high contrast lighting, and rich textures. Incorporate Gothic architectural or atmospheric elements such as candlelit interiors, crumbling stone, fog, or ironwork. Use dramatic chiaroscuro (light vs. dark) to enhance depth and emotion. If the image contains people, preserve facial features, expressions, and body proportions with high accuracy, but depict them in a brooding, cinematic light. Add subtle period touches like vintage clothing, dark lace, or cloaks where appropriate. Maintain the original composition while infusing it with a haunting, mysterious tone.",
  },
  {
    id: "puppet",
    name: "Puppet",
    description: "Characters with doll-like features and articulated limbs",
    previewSrc: "/puppet.png",
  },
];

// one more - cartoon form with speech bubbles. It should take an image and add speech that fits the person's emotions.
