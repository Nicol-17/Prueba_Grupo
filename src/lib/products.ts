export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'coding' | 'building' | 'education' | 'design' | 'analysis';
  price: number;
  rating: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 'ai-dev-genius',
    name: 'AI Dev Genius',
    tagline: 'Tu copiloto de programación',
    description:
      'Domina más de 25 lenguajes con sugerencias inteligentes, generación de funciones completas, detección de bugs y mejoras automáticas de rendimiento. Ideal para desarrolladores junior y senior.',
    category: 'coding',
    price: 19,
    rating: 5,
    image: '/images/ai-dev-genius.png',
  },
  {
    id: 'ai-builder-pro',
    name: 'AI Builder Pro',
    tagline: 'Diseña y planifica construcciones inteligentes',
    description:
      'Genera planos BIM, calcula estructuras, simula materiales y optimiza costos en tiempo real. Impulsa tus proyectos de ingeniería o arquitectura con precisión y velocidad.',
    category: 'building',
    price: 49,
    rating: 4,
    image: '/images/ai-builder-pro.png',
  },
  {
    id: 'ai-teachmate',
    name: 'AI TeachMate',
    tagline: 'Clases y feedback a la medida',
    description:
      'Crea itinerarios de estudio personalizados, genera quizzes, explica temas con analogías visuales y adapta el aprendizaje a cada estudiante. Perfecto para docentes y autodidactas.',
    category: 'education',
    price: 15,
    rating: 4,
    image: '/images/ai-teachmate.png',
  },
  {
    id: 'ai-designify',
    name: 'AI Designify',
    tagline: 'Ideas visuales en segundos',
    description:
      'Desde wireframes hasta prototipos navegables en Figma, AI Designify convierte ideas en diseños UI/UX impactantes con paletas armónicas, tipografías modernas y sugerencias accesibles.',
    category: 'design',
    price: 25,
    rating: 5,
    image: '/images/ai-designify.png',
  },
  {
    id: 'ai-data-sage',
    name: 'AI Data Sage',
    tagline: 'Análisis y predicción sin código',
    description:
      'Carga tus datasets en CSV o Excel y deja que AI Data Sage genere dashboards, detecte anomalías, realice pronósticos y traduzca insights en texto claro. Para analistas, marketers y ejecutivos.',
    category: 'analysis',
    price: 35,
    rating: 5,
    image: '/images/ai-data-sage.png',
  },
];
