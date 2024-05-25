import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const NavItems = [
  {
    id: 1,
    name: "Text",
    link: "/text",
  },
  {
    id: 2,
    name: "AI Writer",
    link: "/ai-writer",
  },
  {
    id: 3,
    name: "Image Editor",
    link: "/image-editor",
  },
  {
    id: 4,
    name: "Converter",
    link: "/converter",
  },
  {
    id: 5,
    name: "Chat File",
    link: "/chat-file",
  },
  {
    id: 6,
    name: "Blogs",
    link: "/blogs",
  },
  {
    id: 7,
    name: "Pricing",
    link: "/pricing",
  },
];
export const ServiceItems = [
  {
    id: 1,
    title: "Unlock the Power of Words with Text",
    description:
      "Introducing a cutting-edge feature that seamlessly integrates word, image, speech-to-text, and text-to-speech capabilities into one powerful tool. Now, users can effortlessly count words, convert images to text, and transcribe spoken words into written text—all in one platform. This multifaceted feature streamlines tasks, enhances productivity, and offers unparalleled convenience.",
    link: "/text",
  },
  {
    id: 2,
    title: "Harness the Magic of AI Writing",
    description:
      "Say goodbye to writer's block and hello to endless inspiration with our AI writing feature. Our advanced algorithms analyze your prompts and generate compelling, original content in seconds. From product descriptions to email newsletters, Textify's AI writing capabilities ensure that your message resonates with your audience, every time.",
    link: "/ai-writer",
  },
  {
    id: 3,
    title: "Play with Image",
    description:
      "Introducing our versatile image editing feature, empowering users to effortlessly compose, resize, and convert images into any desired format. Whether you're adjusting dimensions for specific platforms, crafting the perfect visual composition, or converting between formats seamlessly, this tool has you covered. Elevate your visuals with our all-in-one image editing feature.",
    link: "/image-editor",
  },
  {
    id: 4,
    title: "Convert the files ",
    description:
      "Introducing our versatile file conversion feature, enabling users to seamlessly convert between PDFs, Word documents, images, and more. With just a few clicks, transform your files into the format that best suits your needs. Whether it's extracting text from images, converting documents for compatibility, or transitioning between formats effortlessly, this feature simplifies the process.",
    link: "/converter",
  },
  {
    id: 5,
    title: "Chat with file",
    description:
      "Introducing our versatile file conversion feature, enabling users to seamlessly convert between PDFs, Word documents, images, and more. With just a few clicks, transform your files into the format that best suits your needs. Whether it's extracting text from images, converting documents for compatibility, or transitioning between formats effortlessly, this feature simplifies the process.",
    link: "/chat-file",
  },
];

export const socialIcons = [
  {
    id: "Github",
    link: "https://github.com/Ashu6200",
    icon: <FaGithub color='#6126DD' size={30} />,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/ashutosh-kewat-585969167/",
    icon: <FaLinkedinIn color='#6126DD' size={30} />,
  },
  {
    id: "instagram",
    link: "https://www.instagram.com/ashuuu_._/",
    icon: <FaInstagram color='#6126DD' size={30} />,
  },
];

export const TextTools = [
  {
    id: 1,
    title: "Word Counter",
    description:
      "Counts words, characters, and paragraphs in text for analysis and editing.",
    link: "/text/word-counter",
  },
  {
    id: 2,
    title: "Speech to Text",
    description:
      "Transcribes spoken words into written text for easy documentation and note-taking.",
    link: "/text/speech-to-text",
  },
  {
    id: 3,
    title: "Text to Speech",
    description:
      "Converts written text into spoken words for accessibility and hands-free listening.",
    link: "/text/text-to-speech",
  },
  {
    id: 4,
    title: "Image to Text",
    description:
      "Extracts text from images or photos to digitize printed content or handwritten notes.",
    link: "/text/image-to-text",
  },
];

export const AIwriterTools = [
  {
    id: 1,
    title: "Generate Text",
    description: "Create unique and engaging content for various purposes.",
    link: "/ai-writer/generate-text",
  },
  {
    id: 2,
    title: "Edit Text",
    description:
      "Automatically generate and edit text based on provided input or prompts.",
    link: "/ai-writer/edit-text",
  },
  {
    id: 3,
    title: "Content",
    description:
      "Produce high-quality articles, blog posts, and web content efficiently.",
    link: "/ai-writer/content",
  },
  {
    id: 4,
    title: "Business & Marketing",
    description:
      "Craft compelling copy and promotional materials to enhance marketing efforts.",
    link: "/ai-writer/bsm-text",
  },
];

export const ImageTools = [
  {
    id: 1,
    title: "Compress Image",
    description:
      "The easiest and fastest way to compress your JPEGs, PNGs, and any other images.",
    link: "/image-editor/compress-image",
  },
  {
    id: 2,
    title: "Rotate Image",
    description:
      "Easily rotate any image for social media, messages, document, or share it with your friends.",
    link: "/image-editor/rotate-image",
  },
  {
    id: 3,
    title: "Resize Image",
    description:
      "Resize images without cropping or losing the quality of the original image.",
    link: "/image-editor/resize-image",
  },
  {
    id: 4,
    title: "Crop Image",
    description:
      "Is your image too big? Use our social media presets or crop it yourself with our Crop Image tool.",
    link: "/image-editor/crop-image",
  },
  {
    id: 5,
    title: "PNG to SVG",
    description:
      "Convert your PNG images into SVG format in a snap. Use our easy-to-use PNG to SVG converter for free.",
    link: "/image-editor/png-to-svg",
  },
  {
    id: 6,
    title: "HEIC to JPG",
    description:
      "Convert HEIC photos to JPG in no time with our file converter.",
    link: "/image-editor/heic-to-jpg",
  },
  {
    id: 7,
    title: "JPG to PNG",
    description:
      "This online JPG to PNG Converter is the easiest and fastest way to convert your JPGs into PNGs.",
    link: "/image-editor/jpg-to-png",
  },
  {
    id: 8,
    title: "PNG to JPG",
    description:
      "Convert your PNG images into JPG format in a snap. Use our easy-to-use PNG to JPG converter for free & without signing up.",
    link: "/image-editor/png-to-jpg",
  },
  {
    id: 9,
    title: "Color Palette from Image",
    description:
      "Upload an image and generate a color palette with a single click.",
    link: "/image-editor/color-palette-from-image",
  },
  {
    id: 10,
    title: "SVG to PNG",
    description:
      "Convert your SVGs into PNG images in a snap. Use our easy-to-use SVG to PNG converter for free.",
    link: "/image-editor/svg-to-png",
  },
];

export const ConversionTools = [
  {
    id: 1,
    title: "JPG to PDF",
    description:
      "Convert JPG images to PDF in seconds. Easily adjust orientation and margins, too.",
    link: "/converter/jpg-to-pdf",
  },
  {
    id: 2,
    title: "HEIC to JPG",
    description:
      "Convert HEIC photos to JPG in no time with our file converter.",
    link: "/converter/heic-to-jpg",
  },
  {
    id: 3,
    title: "PDF to Word",
    description:
      "Easily convert your PDF files to Word documents in a single click.",
    link: "/converter/pdf-to-word",
  },
  {
    id: 4,
    title: "PNG to JPG",
    description:
      "Convert your PNG images into JPG format in a snap. Use our easy-to-use PNG to JPG converter for free & without signing up.",
    link: "/converter/png-to-jpg",
  },
  {
    id: 5,
    title: "PDF to JPG",
    description:
      "Convert a PDF to JPG without any software to download. Our file conversion service is free to use.",
    link: "/converter/pdf-to-jpg",
  },
  {
    id: 6,
    title: "Excel to PDF",
    description:
      "Instantly convert Excel spreadsheet to PDF file online just in seconds.",
    link: "/converter/excel-to-pdf",
  },
  {
    id: 7,
    title: "MOV to MP4",
    description:
      "Simply upload your MOV video and download your clip in MP4 format.",
    link: "/converter/mov-to-mp4",
  },
  {
    id: 8,
    title: "Word to PDF",
    description:
      "The most effortless way to convert your DOC and DOCX files to PDF in one click.",
    link: "/converter/word-to-pdf",
  },
  {
    id: 9,
    title: "PNG to SVG",
    description:
      "Convert your PNG images into SVG format in a snap. Use our easy-to-use PNG to SVG converter for free.",
    link: "/converter/png-to-svg",
  },
  {
    id: 10,
    title: "PNG to PDF",
    description:
      "Convert PNG images to PDF. It only takes seconds with our free online converter.",
    link: "/converter/png-to-pdf",
  },
  {
    id: 11,
    title: "WebM to MP4",
    description:
      "Simply upload your WebM video and download your clip in MP4 format.",
    link: "/converter/webm-to-mp4",
  },
  {
    id: 12,
    title: "MKV to MP4",
    description:
      "Simply upload your MKV video and download your clip in MP4 format.",
    link: "/converter/mkv-to-mp4",
  },
  {
    id: 13,
    title: "JPG to PNG",
    description:
      "This online JPG to PNG Converter is the easiest and fastest way to convert your JPGs into PNGs.",
    link: "/converter/jpg-to-png",
  },
  {
    id: 14,
    title: "PPT to PDF",
    description: "Convert PPT files to PDF in seconds.",
    link: "/converter/ppt-to-pdf",
  },
  {
    id: 15,
    title: "MP4 to MP3",
    description: "Convert any MP4 video to MP3 audio files in seconds.",
    link: "/converter/mp4-to-mp3",
  },
  {
    id: 16,
    title: "SVG to PNG",
    description:
      "Convert your SVGs into PNG images in a snap. Use our easy-to-use SVG to PNG converter for free.",
    link: "/converter/svg-to-png",
  },
];

export const toneOptions = [
  { value: "friendly", label: "Friendly" },
  { value: "luxury", label: "Luxury" },
  { value: "relaxed", label: "Relaxed" },
  { value: "professional", label: "Professional" },
  { value: "bold", label: "Bold" },
  { value: "adventuros", label: "Adventuros" },
  { value: "witty", label: "Witty" },
  { value: "persuasive", label: "Persuasive" },
  { value: "empathetic", label: "Empathetic" },
];

export const AiWriterGeentredText = [
  {
    name: "Article",
  },
  {
    name: "Email",
  },
  {
    name: "Essay",
  },
  {
    name: "Keywords",
  },
  {
    name: "Outline",
  },
  {
    name: "Paragraph",
  },
  {
    name: "Story",
  },
  {
    name: "Translations",
  },
];
export const AiWriterEditText = [
  {
    name: "Expand",
  },
  {
    name: "Grammar checker",
  },
  {
    name: "Paraphraser",
  },
  {
    name: "Shorten",
  },
  {
    name: "Summarizer",
  },
];

export const AiWriterContent = [
  {
    name: "Article",
  },
  {
    name: "Paragraph",
  },
  {
    name: "Outline",
  },
  {
    name: "Keywords",
  },
  {
    name: "Script",
  },
  {
    name: "Title Generator",
  },
  {
    name: "Caption",
  },
];

export const AiWriterBM = [
  {
    name: "Bussiness Name",
  },
  {
    name: "Email writer",
  },
  {
    name: "Slogan",
  },
  {
    name: "Startup Idea",
  },
  {
    name: "Bussiness Name",
  },
  {
    name: "Ad Copy",
  },
  {
    name: "Product description",
  },
];
