type ArtStyle = {
  id: string;
  name: string;
  description: string;
  previewSrc: string;
  prompt: string;
  positioning?: {
    objectPosition: string;
  };
};

export const artStyles: ArtStyle[] = [
  {
    id: "puppet",
    name: "Puppet",
    description: "Characters with doll-like features and articulated limbs",
    previewSrc: "/puppet.png",
    prompt:
      "Transform this image into a playful puppet-style artwork inspired by classic children’s shows like Sesame Street. Characters should appear as soft, handcrafted puppets made from felt, fabric, or faux fur, with button eyes, stitched mouths, and plush textures. Use vibrant, cheerful colors and simplified shapes to create a whimsical, fun atmosphere. If the image contains people, reimagine them as puppet characters while preserving recognizable facial features, hairstyles, clothing colors, and body proportions. Maintain their identity and expression, but apply a charming, Muppet-like transformation. Keep the overall composition and background elements in a colorful, kid-friendly style.",
  },
  {
    id: "ghibli",
    name: "Ghibli",
    description:
      "Studio Ghibli-inspired art style with whimsical characters and landscapes",
    previewSrc: "/ghibli.png",
    prompt:
      "Convert this image into a Studio Ghibli-inspired artwork. Use soft, painterly textures with rich, hand-drawn details and a whimsical, storybook charm. Apply warm, natural color tones, expressive lighting, and gentle gradients that evoke an emotional, cinematic atmosphere. Emphasize harmony between characters and environment for a dreamy, nostalgic effect. If the image contains people, retain facial features, expressions, and body proportions with a gentle, animated aesthetic. Focus on conveying emotion and personality through subtle gestures and natural styling. Maintain the original composition and pose, while infusing the scene with the magic, wonder, and heartwarming detail characteristic of classic Ghibli films.",
  },
  {
    id: "impressionist",
    name: "Impressionist",
    description:
      "Characterized by small, thin brush strokes and emphasis on light",
    previewSrc: "/impressionist.png",
    prompt:
      "Convert this image into an Impressionist-style painting. Use visible, expressive brush strokes, soft edges, and a focus on light, movement, and atmosphere rather than fine detail. Capture the overall mood of the scene with a luminous, vibrant palette—emphasizing natural light, fleeting expressions, and an airy, spontaneous feel. If the image contains people or characters, preserve facial features, poses, and skin tones in a loose yet recognizable way. Focus on gesture and emotion over precision, using color, silhouette, and posture to convey identity and presence. Clothing and background elements should feel integrated into the scene through textured strokes and atmospheric blending. Maintain the original composition and relational dynamics while transforming the image into a poetic, painterly snapshot—suggesting motion, life, and the beauty of the moment, in the spirit of Monet, Renoir, or Degas.",
  },
  {
    id: "pixar",
    name: "Pixar",
    description: "Pixar art style",
    previewSrc: "/pixar.png",
    prompt: "Convert this image into pixar art style",
  },
  {
    id: "19th century",
    name: "19th Century",
    description: "19th-century art with classical details and vintage tones",
    previewSrc: "/1800s.png",
    prompt:
      "Convert this image into a 19th-century painting inspired by the Romanticism and Realism movements. Use rich, naturalistic colors, dramatic lighting, and classical composition to evoke the elegance and depth typical of this era. Apply painterly brushwork with a focus on texture, shading, and period-accurate lighting to achieve a museum-worthy aesthetic. If the image contains people, preserve facial features, skin tones, hair styles, and body proportions with high fidelity. Style clothing and posture to echo the historical context—graceful, poised, and subtly idealized while maintaining individual identity and emotion. Highlight facial expressions with realism and depth, conveying subtle narratives and sentiment. Adapt the background into a period-appropriate setting—whether an ornate interior, pastoral landscape, or moody vignette—while keeping the original pose, framing, and relational dynamics intact. Capture the timeless grace and painterly sophistication of 19th-century portraiture and figurative art.",
  },
  {
    id: "watercolor",
    name: "Watercolor",
    description: "Transparent layers with soft, flowing transitions",
    previewSrc: "/watercolor.png",
    prompt:
      "Convert this image into a soft, elegant watercolor painting. Apply gentle brush strokes, fluid textures, and subtle color bleeds characteristic of traditional watercolor art. Use a pastel-toned, airy palette with soft edges and light gradients. If the image contains people, ensure facial features, expressions, skin tones, and body proportions are accurately preserved—maintain identity and natural appearance while enhancing the artistic style. Keep the composition and key details intact for a realistic yet painterly effect.",
    positioning: { objectPosition: "left 0 top 0" },
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
    prompt:
      "Convert this image into detailed pixel art. Use a low-resolution, grid-based aesthetic with clearly defined pixels, preserving color accuracy and key visual elements within simplified forms. Apply pixel shading, selective outlining, and dithering techniques to add depth, texture, and visual interest. The result should feel nostalgic and retro while remaining clean and readable. If the image includes people or characters, preserve facial features, skin tones, hairstyles, and body proportions as accurately as possible within pixel constraints. Ensure each character is recognizable, expressive, and distinct—even with minimal detail. Maintain original poses, expressions, and character interactions to retain emotional context and personality. Keep the overall composition and background layout intact, translating environments into blocky yet charming forms that reflect the original scene. Aim for a balanced mix of stylized minimalism and visual storytelling in a classic 8-bit or 16-bit video game style.",
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Pencil-like drawing with emphasis on lines and shading",
    previewSrc: "/sketch.png",
    prompt:
      "Convert this image into a detailed black-and-white pencil sketch. Use fine, expressive lines and soft shading to capture depth, form, and texture. Emphasize contrast between light and shadow, while maintaining a hand-drawn, artistic feel. If the image contains people, carefully preserve facial features, expressions, skin tones (as shades), and body proportions—ensure the likeness and natural anatomy are intact. Focus on clarity and realism while enhancing the image with the charm of traditional pencil work. Retain the original composition and key visual elements.",
    positioning: { objectPosition: "left 0 top 0" },
  },
  {
    id: "oil-painting",
    name: "Oil Painting",
    description: "Rich colors with textured brush strokes",
    previewSrc: "/oil.png",
    prompt:
      "Convert this image into a classic oil painting. Use rich, textured brush strokes with visible layering and blending to simulate the depth and dimensionality of traditional oil on canvas. Apply warm, earthy tones and painterly lighting to enhance realism and atmosphere. If the image contains people, preserve facial features, expressions, skin tones, and body proportions with high accuracy—ensure their identity remains intact while capturing them in a romantic, expressive, and artistic light. Use soft edges, natural lighting, and detailed shading to give the portrait depth and elegance. Keep the original composition and key visual elements, reinterpreted through an impressionistic or classical oil painting lens.",
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
];

// one more - cartoon form with speech bubbles. It should take an image and add speech that fits the person's emotions.
