// Complete project data structure
export interface Project {
  slug: string;
  id: string;
  title: string;
  image: string;
  year: string;
  tags: string[];
  subtitle: string;
  bannerImage: string;
  externalLink?: string;
  overview: string;
  contributions: string[];
  keyFeatures: { title: string; description: string }[];
  implementation: { label: string; value: string }[];
  links: { label: string; url: string }[];
}

export const allProjects: Project[] = [
  // DATA Projects
  {
    slug: 'engineering-systems-analysis',
    id: 'data-1',
    title: 'Engineering Systems Analysis',
    image: '/images/data-project-1.jpg',
    year: '2024',
    tags: ['Data Analysis', 'Python', 'Systems Engineering'],
    subtitle: 'Complex Systems Optimization',
    bannerImage: '/images/data-project-1.jpg',
    overview: 'A comprehensive analysis of engineering systems focusing on optimization and performance metrics. This project involved deep data analysis and systems modeling to improve operational efficiency.',
    contributions: [
      'Developed data pipeline for systems performance tracking',
      'Created visualization dashboards for stakeholder reporting',
      'Implemented predictive models for system optimization'
    ],
    keyFeatures: [
      {
        title: 'Data Pipeline',
        description: 'Automated ETL processes for real-time system monitoring'
      },
      {
        title: 'Predictive Analytics',
        description: 'Machine learning models for performance forecasting'
      },
      {
        title: 'Interactive Dashboards',
        description: 'Real-time visualization of system metrics'
      }
    ],
    implementation: [
      { label: 'Languages', value: 'Python, SQL' },
      { label: 'Tools', value: 'Pandas, Matplotlib, Jupyter' },
      { label: 'Database', value: 'PostgreSQL' }
    ],
    links: []
  },
  {
    slug: 'supply-chain-optimization',
    id: 'data-2',
    title: 'Supply Chain Optimization',
    image: '/images/data-project-2.jpg',
    year: '2024',
    tags: ['Data Science', 'Optimization', 'Logistics'],
    subtitle: 'End-to-End Supply Chain Analysis',
    bannerImage: '/images/data-project-2.jpg',
    overview: 'Supply chain optimization project focused on reducing costs and improving delivery times through data-driven insights and predictive modeling.',
    contributions: [
      'Built optimization algorithms for route planning',
      'Analyzed historical data to identify bottlenecks',
      'Designed forecasting models for demand prediction'
    ],
    keyFeatures: [
      {
        title: 'Route Optimization',
        description: 'Algorithm-based routing to minimize delivery time and costs'
      },
      {
        title: 'Demand Forecasting',
        description: 'Time series analysis for inventory management'
      }
    ],
    implementation: [
      { label: 'Languages', value: 'Python, R' },
      { label: 'Tools', value: 'Scikit-learn, TensorFlow' }
    ],
    links: []
  },
  {
    slug: 'data-visualization-study',
    id: 'data-3',
    title: 'Data Visualization Study',
    image: '/images/data-project-3.jpg',
    year: '2023',
    tags: ['Data Viz', 'D3.js', 'Analytics'],
    subtitle: 'Interactive Data Storytelling',
    bannerImage: '/images/data-project-3.jpg',
    overview: 'Exploration of advanced data visualization techniques to communicate complex datasets through interactive and engaging visual narratives.',
    contributions: [
      'Created interactive visualizations using D3.js',
      'Designed visual storytelling frameworks',
      'Developed responsive chart libraries'
    ],
    keyFeatures: [
      {
        title: 'Interactive Charts',
        description: 'Dynamic visualizations with user-driven exploration'
      },
      {
        title: 'Responsive Design',
        description: 'Mobile-friendly data presentations'
      }
    ],
    implementation: [
      { label: 'Languages', value: 'JavaScript, Python' },
      { label: 'Libraries', value: 'D3.js, Chart.js, Plotly' }
    ],
    links: []
  },
  // WEB DEV Projects
  {
    slug: 'ecommerce-platform',
    id: 'webdev-1',
    title: 'E-Commerce Platform',
    image: '/images/webdev-project-1.jpg',
    year: '2024',
    tags: ['React', 'Node.js', 'E-Commerce'],
    subtitle: 'Full-Stack Shopping Experience',
    bannerImage: '/images/webdev-project-1.jpg',
    overview: 'Modern e-commerce platform built with React and Node.js, featuring secure payment processing, inventory management, and seamless user experience.',
    contributions: [
      'Architected full-stack application structure',
      'Implemented payment gateway integration',
      'Designed responsive UI/UX for optimal conversion'
    ],
    keyFeatures: [
      {
        title: 'Payment Processing',
        description: 'Secure integration with Stripe API'
      },
      {
        title: 'Inventory System',
        description: 'Real-time stock management and notifications'
      },
      {
        title: 'Admin Dashboard',
        description: 'Comprehensive order and product management'
      }
    ],
    implementation: [
      { label: 'Frontend', value: 'React, TypeScript, Tailwind CSS' },
      { label: 'Backend', value: 'Node.js, Express, MongoDB' },
      { label: 'Payment', value: 'Stripe API' }
    ],
    links: []
  },
  {
    slug: 'portfolio-website',
    id: 'webdev-2',
    title: 'Portfolio Website',
    image: '/images/webdev-project-2.jpg',
    year: '2024',
    tags: ['React', 'Design', 'Personal Brand'],
    subtitle: 'Personal Portfolio & Blog',
    bannerImage: '/images/webdev-project-2.jpg',
    overview: 'Custom-built portfolio website showcasing creative work with a focus on performance, accessibility, and engaging animations.',
    contributions: [
      'Designed and developed custom React components',
      'Optimized for Core Web Vitals',
      'Implemented smooth scroll animations'
    ],
    keyFeatures: [
      {
        title: 'Performance',
        description: 'Lighthouse score of 95+ across all metrics'
      },
      {
        title: 'Animations',
        description: 'Smooth transitions and interactive elements'
      }
    ],
    implementation: [
      { label: 'Framework', value: 'React, Vite' },
      { label: 'Styling', value: 'CSS Modules, Framer Motion' }
    ],
    links: []
  },
  {
    slug: 'dashboard-interface',
    id: 'webdev-3',
    title: 'Dashboard Interface',
    image: '/images/webdev-project-3.jpg',
    year: '2023',
    tags: ['React', 'Data Viz', 'Dashboard'],
    subtitle: 'Analytics Dashboard Platform',
    bannerImage: '/images/webdev-project-3.jpg',
    overview: 'Comprehensive analytics dashboard for tracking business metrics with real-time data updates and customizable widgets.',
    contributions: [
      'Built modular widget system',
      'Integrated real-time data streaming',
      'Created drag-and-drop dashboard customization'
    ],
    keyFeatures: [
      {
        title: 'Real-Time Updates',
        description: 'WebSocket integration for live data'
      },
      {
        title: 'Customizable Layout',
        description: 'User-configurable dashboard widgets'
      }
    ],
    implementation: [
      { label: 'Frontend', value: 'React, Redux, Chart.js' },
      { label: 'Backend', value: 'Node.js, Socket.io' }
    ],
    links: []
  },
  // DESIGN Projects
  {
    slug: 'smoodee',
    id: 'design-1',
    title: 'SMOODEE UI/UX REBRAND',
    image: '/images/smoodee.png',
    year: '2024',
    tags: ['UI/UX', 'Branding', 'Mobile App'],
    subtitle: 'Asia\'s First Instant Smoothie',
    bannerImage: '/images/smoodee.png',
    externalLink: 'https://smoodee.com',
    overview: 'Complete UI/UX rebrand for Smoodee, Asia\'s first instant smoothie brand. Focused on creating a fresh, modern interface that emphasizes product benefits and enhances user engagement.',
    contributions: [
      'Led complete visual rebrand from concept to implementation',
      'Designed user-friendly product browsing experience',
      'Created cohesive design system for mobile and web platforms',
      'Improved conversion rates through optimized checkout flow'
    ],
    keyFeatures: [
      {
        title: 'Visual Identity',
        description: 'Vibrant color palette reflecting fresh, healthy lifestyle with tropical fruit themes'
      },
      {
        title: 'Product Showcase',
        description: 'Interactive product cards with smooth animations and clear nutritional information'
      },
      {
        title: 'Mobile-First Design',
        description: 'Optimized for touch interactions with intuitive navigation patterns'
      }
    ],
    implementation: [
      { label: 'Design Tools', value: 'Figma, Adobe Illustrator' },
      { label: 'Prototyping', value: 'Figma, Principle' },
      { label: 'Design System', value: 'Component library with tokens' }
    ],
    links: [
      { label: 'Official Website', url: 'https://smoodee.com' }
    ]
  },
  {
    slug: 'shioya',
    id: 'design-2',
    title: 'SHIOYA PASSION PROJECT',
    image: '/images/shioya.png',
    year: '2024',
    tags: ['Branding', 'Visual Design', 'Restaurant'],
    subtitle: 'Japanese Dining Experience',
    bannerImage: '/images/shioya.png',
    overview: 'Brand identity and visual design for Shioya, a modern Japanese restaurant. Created a sophisticated design language that balances traditional aesthetics with contemporary minimalism.',
    contributions: [
      'Developed complete brand identity system',
      'Designed menu and marketing collateral',
      'Created cohesive visual guidelines',
      'Produced digital and print assets'
    ],
    keyFeatures: [
      {
        title: 'Brand Identity',
        description: 'Minimalist Japanese-inspired logo and typography system'
      },
      {
        title: 'Menu Design',
        description: 'Clean, elegant menu layouts with cultural authenticity'
      },
      {
        title: 'Marketing Materials',
        description: 'Consistent visual language across all touchpoints'
      }
    ],
    implementation: [
      { label: 'Design Tools', value: 'Adobe Illustrator, Photoshop, InDesign' },
      { label: 'Typography', value: 'Custom Japanese-English pairing' },
      { label: 'Color System', value: 'Earth tones with traditional accents' }
    ],
    links: []
  },
  {
    slug: 'noshinom',
    id: 'design-3',
    title: 'NOSHNOM PRODUCT DESIGN',
    image: '/images/noshinom.png',
    year: '2023',
    tags: ['Product Design', 'UX Research', 'Food Tech'],
    subtitle: 'Food Discovery & Social Platform',
    bannerImage: '/images/noshinom.png',
    overview: 'Comprehensive product design for NoshNom, a food discovery and social dining platform. Focused on creating delightful user experiences that connect food lovers with local restaurants.',
    contributions: [
      'Conducted extensive UX research and user interviews',
      'Designed end-to-end user flows for food discovery',
      'Created interactive prototypes for user testing',
      'Developed design system and component library'
    ],
    keyFeatures: [
      {
        title: 'Discovery Feed',
        description: 'Personalized food recommendations based on preferences and behavior'
      },
      {
        title: 'Social Features',
        description: 'Share reviews, photos, and dining experiences with friends'
      },
      {
        title: 'Reservation System',
        description: 'Seamless booking flow integrated with restaurant partners'
      }
    ],
    implementation: [
      { label: 'Design Tools', value: 'Figma, Miro' },
      { label: 'Research', value: 'User interviews, usability testing' },
      { label: 'Prototyping', value: 'High-fidelity interactive prototypes' }
    ],
    links: []
  }
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: 'data' | 'web-dev' | 'design') => {
  const categoryMap = {
    'data': ['data-1', 'data-2', 'data-3'],
    'web-dev': ['webdev-1', 'webdev-2', 'webdev-3'],
    'design': ['design-1', 'design-2', 'design-3']
  };
  
  return allProjects.filter(project => categoryMap[category].includes(project.id));
};
