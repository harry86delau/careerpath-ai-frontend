import imgSoftware from "../assets/landing/software.png";
import imgData from "../assets/data 1.png";
import imgUiux from "../assets/uiux 1.png";
import imgCyber from "../assets/cyber 1.png";
import imgMl from "../assets/machine learning 1.png";
import imgContent from "../assets/machine learning 1-1.png";
import imgBusiness from "../assets/business 1.png";
import imgPm from "../assets/pm 1.png";
import imgDigimarketing from "../assets/digimarketing 1.png";
import imgCloud from "../assets/cloud 1.png";

export const jobCards = [
  {
    slug: "software-engineer",
    name: "Software Engineer",
    img: imgSoftware,
    description:
      "Software Engineer merancang, membangun, dan memelihara perangkat lunak. Mereka mengubah ide menjadi produk nyata yang dipakai jutaan orang.",
    skills: ["Programming", "Problem Solving", "System Design", "Testing"],
    traits: ["Teliti", "Pekerja Keras", "Analitis", "Adaptif"],
    companions: ["UI/UX Designer", "Product Manager", "Data Engineer"],
  },
  {
    slug: "ui-ux-designer",
    name: "UI/UX Designer",
    img: imgUiux,
    description:
      "UI/UX Designer menciptakan pengalaman digital yang intuitif dan menyenangkan. Mereka menjembatani kebutuhan pengguna dengan teknologi.",
    skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
    traits: ["Kreatif", "Empatik", "Detail-Oriented", "Kolaboratif"],
    companions: ["Software Engineer", "Product Manager", "Copywriter"],
  },
  {
    slug: "data-analyst",
    name: "Data Analyst",
    img: imgData,
    description:
      "Data Analyst menggali data untuk menemukan insight berharga yang membantu perusahaan mengambil keputusan lebih baik.",
    skills: ["SQL", "Python", "Data Visualization", "Statistics"],
    traits: ["Analitis", "Curious", "Teliti", "Komunikatif"],
    companions: ["Data Engineer", "Business Analyst", "Product Manager"],
  },
  {
    slug: "machine-learning-engineer",
    name: "ML Engineer",
    img: imgMl,
    description:
      "Machine Learning Engineer membangun model AI yang bisa belajar dan membuat prediksi dari data.",
    skills: ["Python", "Deep Learning", "Math & Stats", "MLOps"],
    traits: ["Analitis", "Eksperimental", "Tekun", "Research-minded"],
    companions: ["Data Scientist", "Software Engineer", "Data Analyst"],
  },
  {
    slug: "content-creator",
    name: "Content Creator",
    img: imgContent,
    description:
      "Content Creator menghasilkan konten digital yang menarik, informatif, dan relevan untuk berbagai platform.",
    skills: ["Copywriting", "Video Editing", "SEO", "Storytelling"],
    traits: ["Kreatif", "Konsisten", "Komunikatif", "Trendy"],
    companions: ["Digital Marketer", "UI/UX Designer", "Brand Strategist"],
  },
  {
    slug: "digital-marketer",
    name: "Digital Marketer",
    img: imgDigimarketing,
    description:
      "Digital Marketer mempromosikan produk dan jasa lewat kanal digital agar menjangkau audiens yang tepat.",
    skills: ["SEO/SEM", "Social Media", "Analytics", "Copywriting"],
    traits: ["Kreatif", "Strategis", "Data-driven", "Komunikatif"],
    companions: ["Content Creator", "UI/UX Designer", "Product Manager"],
  },
];
