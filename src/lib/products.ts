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
            'AI Dev Genius genera, revisa y optimiza código en más de 25 lenguajes…',
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
            'Desde planos BIM hasta cálculos estructurales, AI Builder Pro acelera el ciclo de obra…',
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
            'Crea planes de estudio personalizados, explica conceptos con ejemplos interactivos…',
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
            'Genera wireframes, paletas de color y maqueta tu UI directamente en Figma…',
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
            'Arrastra tus CSV y obtén dashboards, pronósticos y explicaciones en lenguaje natural…',
        category: 'analysis',
        price: 35,
        rating: 5,
        image: '/images/ai-data-sage.png',
    },
];
