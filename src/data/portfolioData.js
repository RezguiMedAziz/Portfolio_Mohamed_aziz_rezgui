// src/data/portfolioData.js
// Texts live in src/locales/*.json. This file holds structure, tech stacks and media.
const BASE = import.meta.env.BASE_URL;

export const profileLinks = {
  email: 'rezguiaziz32@gmail.com',
  phone: '+21658846263',
  phoneDisplay: '+216 58 846 263',
  github: 'https://github.com/RezguiMedAziz',
  linkedin: 'https://www.linkedin.com/in/mohamed-aziz-rezgui-9bb603239/',
};

// Order matters: project{n} in the locale files matches index n - 1 here.
// media.type is either 'carousel' (images list) or 'video' (single video with an optional poster).
export const projects = [
  {
    title: 'IZI Supervision',
    tech: [
      'Spring Boot',
      'Angular',
      'Flutter',
      'Python',
      'FastAPI',
      'scikit-learn',
      'Prophet',
      'PostgreSQL',
      'pgvector',
      'LLMs',
      'RAG',
    ],
    category: 'IA & ML',
    media: {
      type: 'video',
      src: `${BASE}images/izi.mp4`,
      // Optional first-frame image shown before playback. Remove this line if you don't have one.
      poster: `${BASE}images/izi-poster.jpg`,
    },
  },
  {
    title: 'Incident Reporting Platform',
    tech: ['Spring Boot', 'Angular'],
    category: 'Web',
    media: {
      type: 'carousel',
      images: [`${BASE}images/si_login.png`, `${BASE}images/si_db.png`],
    },
  },
  {
    title: 'Real Time Traffic Simulation',
    tech: ['SUMO', 'Stable-Baselines3', 'FastAPI', 'Python', 'React.js'],
    category: 'IA & ML',
    media: {
      type: 'carousel',
      images: [`${BASE}images/sumo1.png`, `${BASE}images/sumo2.png`, `${BASE}images/sumo3.png`],
    },
  },
  {
    title: 'Engineering Cycle Management',
    tech: ['Node.js', 'React.js', 'MongoDB'],
    category: 'Web',
    media: {
      type: 'carousel',
      images: [
        `${BASE}images/c1.png`,
        `${BASE}images/c2.png`,
        `${BASE}images/c3.png`,
        `${BASE}images/c4.png`,
      ],
    },
  },
  {
    title: 'Smart Farm Mobile App',
    tech: ['Flutter', 'Dart', 'Firebase', 'IoT'],
    category: 'Mobile & IoT',
    media: {
      type: 'carousel',
      images: [
        `${BASE}images/2.jpg`,
        `${BASE}images/5.jpg`,
        `${BASE}images/6.jpg`,
        `${BASE}images/7.jpg`,
        `${BASE}images/11.jpg`,
        `${BASE}images/12.jpg`,
        `${BASE}images/13.jpg`,
        `${BASE}images/14.jpg`,
      ],
    },
  },
  {
    title: 'Cryptocurrency Price Prediction',
    tech: ['Python', 'Selenium', 'Jupyter Notebook', 'React.js'],
    category: 'Data Science',
    media: {
      type: 'carousel',
      images: [`${BASE}images/image.png`],
    },
  },
];

// exp{n} in the locale files matches index n - 1. The first one is the featured one.
export const experiences = [
  {
    company: 'Excellia Solutions',
    tech: [
      'Spring Boot',
      'Spring Security',
      'Angular',
      'Flutter',
      'Python',
      'FastAPI',
      'scikit-learn',
      'Prophet',
      'pandas',
      'NumPy',
      'PostgreSQL',
      'pgvector',
      'LLMs',
      'RAG',
      'Groq',
      'Gemini',
    ],
  },
  {
    company: 'Blue Jet Engineering',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    company: 'IT Progress',
    tech: ['Angular', 'Spring Boot', 'MongoDB', 'JHipster'],
  },
  {
    company: 'Comar Assurances',
    tech: ['Angular', 'Spring Boot', 'MySQL'],
  },
  {
    company: 'Tunisair',
    tech: ['Angular', 'Spring Boot', 'PostgreSQL'],
  },
];

export const education = [{}, {}, {}];
export const associations = [{}, {}, {}, {}, {}];

export const marqueeItems = [
  'Full Stack',
  'Data & AI',
  'DevOps',
  'LLMs & RAG',
  'Spring Boot',
  'Angular',
  'Flutter',
  'Python',
  'FastAPI',
  'Docker',
];