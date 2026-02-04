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
  videoUrl?: string | string[];  // For embedded video(s) - single or array
  processImages?: string[];      // For process documentation images
}

export const allProjects: Project[] = [
  // DATA Projects
  {
    slug: 'uwaterloo-kaggle',
    id: 'data-1',
    title: 'UWATERLOO KAGGLE',
    image: '/images/uwaterloo.png',
    year: '2024',
    tags: ['Machine Learning', 'Python', 'Kaggle', 'Ensemble Methods'],
    subtitle: 'Household Poverty Classification Challenge',
    bannerImage: '/images/uwaterloo.png',
    overview: 'During my exchange at the University of Waterloo, my teammate Kenneth and I took on a high-stakes Kaggle challenge as part of our Machine Learning coursework. Our goal was to build a model capable of accurately classifying household poverty levels. Competing against a field of both undergraduate and graduate students, we developed a sophisticated ML pipeline that ultimately secured us a Top 6 finish university-wide. 🏆',
    contributions: [
      'Ensemble Mastery: This was a deep dive into the power of "strength in numbers." We experimented heavily with XGBoost, Gradient Boosting, and SVMs, learning how to tune hyperparameters to squeeze out every bit of predictive power.',
      'The Art of Stacking: We didn\'t just stop at individual models; we implemented complex stacking and ensemble methods to minimize variance and improve our generalization on the leaderboard.',
      'Feature Engineering: I realized that the best model in the world is only as good as the data you feed it. We spent significant time engineering features that captured the nuances of household demographics.',
      'Collaboration & Efficiency: Working in a tight-knit duo meant we had to communicate clearly and divide tasks effectively to iterate fast.'
    ],
    keyFeatures: [
      {
        title: 'The "Cherry on Top" (The Video)',
        description: 'Beyond the code, we had to document our process. I took the lead on directing and producing our project video to give a behind-the-scenes look at our methodology. It turns out that explaining complex stacking methods is a lot easier when you have a bit of creative direction!'
      }
    ],
    implementation: [
      { label: 'Models', value: 'XGBoost, Gradient Boosting, SVM' },
      { label: 'Techniques', value: 'Stacking, Ensemble Methods, Hyperparameter Tuning' },
      { label: 'Achievement', value: 'Top 6 University-Wide' }
    ],
    links: [],
    videoUrl: '/videos/uwaterloo-kaggle.mp4'
  },
  {
    slug: 'meditrace',
    id: 'data-2',
    title: 'MediTrace',
    image: '/images/meditrace.jpg',
    year: '2024',
    tags: ['AI/ML', 'NLP', 'Healthcare', 'LLM', 'XAI'],
    subtitle: 'XAI-Powered Clinical Documentation & Teleconsultation',
    bannerImage: '/images/meditrace.jpg',
    overview: 'Teleconsultation promised efficiency, but it delivered a "documentation tax." Clinicians are currently drowning in a high-cognitive-load task: cleaning up messy, noisy transcripts and manually restructuring them into formal SOAP (Subjective, Objective, Assessment, Plan) notes. I developed a Human-AI solution, which is a modular, two-stage LLM architecture that transforms raw clinical dialogue into structured medical data. The system doesn\'t just summarize; it categorizes and verifies, saving clinicians an estimated 3–5 minutes per patient encounter.',
    contributions: [
      'Engineering for High-Stakes Environments: I learned that in healthcare, accuracy isn\'t enough. You need accountability. Designing a "Human-in-the-Loop" system taught me how to balance automation with the clinician\'s ultimate responsibility for patient safety.',
      'Mitigating Hallucination: By confining LLMs to specific, modular tasks (refinement vs. extraction) rather than one "do-it-all" prompt, I learned how to drastically reduce the risk of AI hallucinations.',
      'Local Deployment & Privacy: I gained experience working with Open-Source models for on-premises deployment. This was crucial to ensure sensitive patient data never left the local environment, adhering to strict healthcare privacy regulations.',
      'Dealing with "Dirty" Data: Real-world audio is noisy. I learned how to build robust refinement stages that can handle conversational fragments and accented speech without losing the underlying medical meaning.'
    ],
    keyFeatures: [
      {
        title: 'AI Precision (The Pipeline)',
        description: 'We utilized a dual-LLM approach. The first model performs Linguistic Refinement (stripping filler words and fragments), while a second, constrained LLM handles Structured Semantic Extraction to map facts into EMR-ready fields.'
      },
      {
        title: 'Human Trust (The UI)',
        description: 'We implemented a Source Tracing UI. This allows clinicians to hover over any generated note and instantly see the exact snippet of the raw transcript it was derived from.'
      },
      {
        title: 'The Impact',
        description: 'Our solution bridges the gap between raw conversational speech and the structured mandates of Electronic Medical Records (EMRs). By turning a 10-minute manual task into a 30-second verification process, we directly address the primary driver of physician burnout.'
      }
    ],
    implementation: [
      { label: 'Architecture', value: 'Dual-LLM Pipeline (Refinement + Extraction)' },
      { label: 'Output Format', value: 'SOAP Notes, EMR-Ready Fields' },
      { label: 'Impact', value: '10-minute task → 30-second verification' }
    ],
    links: [],
    processImages: [
      '/images/userpersona.png'
    ]
  },
  {
    slug: 'qwen-sentiment-analysis',
    id: 'data-3',
    title: 'Fine-Tuning Qwen3-0.6B',
    image: '/images/imdb.jpg',
    year: '2024',
    tags: ['NLP', 'Deep Learning', 'LLM', 'LoRA', 'Fine-Tuning'],
    subtitle: 'Sentiment Analysis Fine-Tuning Strategies',
    bannerImage: '/images/imdb.jpg',
    overview: 'In this technical deep dive, I implemented a comprehensive sentiment analysis pipeline using the Qwen3-0.6B (600M parameter) model. The project focused on classifying 50,000 IMDB movie reviews by comparing three distinct Large Language Model (LLM) strategies. My goal was to analyze the trade-offs between raw performance, computational demand, and parameter efficiency.',
    contributions: [
      'The Power of LoRA: I learned how to drastically reduce memory usage and training time without sacrificing significant accuracy. Understanding how to freeze the backbone while training adapters is a game-changer for deploying models on limited hardware.',
      'Model Benchmarking: I gained experience in setting up rigorous evaluation metrics to compare base models vs. fine-tuned versions, specifically looking at how "instruction following" improves after SFT.',
      'Hugging Face Ecosystem: I deepened my expertise in using the transformers, peft (Parameter-Efficient Fine-Tuning), and datasets libraries to handle large-scale NLP tasks.',
      'Computational Trade-offs: This project taught me the "economics" of AI—deciding when a project justifies the cost of full fine-tuning versus when a zero-shot or LoRA approach is "good enough" for production.'
    ],
    keyFeatures: [
      {
        title: 'Zero-Shot Inference',
        description: 'Evaluating the base model\'s "out-of-the-box" ability to classify sentiment without any prior training on the dataset.'
      },
      {
        title: 'Full-Parameter Supervised Fine-Tuning (SFT)',
        description: 'Updating all 600M parameters. This served as our performance baseline, though it was the most computationally expensive.'
      },
      {
        title: 'LoRA (Low-Rank Adaptation)',
        description: 'Implementing parameter-efficient fine-tuning by injecting trainable low-rank matrices. This allowed us to achieve near-SFT performance while only training a fraction of the total weights.'
      }
    ],
    implementation: [
      { label: 'Model', value: 'Qwen/Qwen3-0.6B' },
      { label: 'Libraries', value: 'PyTorch, Hugging Face (Transformers, PEFT, Accelerate)' },
      { label: 'Dataset', value: 'IMDB (50,000 reviews)' },
      { label: 'Hardware Optimization', value: 'LoRA, Gradient Checkpointing' }
    ],
    processImages: [
      '/images/resultsnlp.png'
    ],
    links: []
  },
  // WEB DEV Projects
  {
    slug: 'gantt',
    id: 'webdev-1',
    title: 'GANTT',
    image: '/images/gantt.png',
    year: '2024',
    tags: ['React', 'Front-End', 'UI/UX', 'Scheduling'],
    subtitle: 'Resource Allocation Scheduling Application',
    bannerImage: '/images/ganttweb.png',
    overview: 'I led the front-end development team in building a specialized scheduling application designed to solve complex resource allocation problems. Coming from an Engineering Systems and Design background, this project marked my first major step into the world of front-end engineering. I took the initiative to lead the UI/UX efforts, building an interactive interface that visualizes and communicates with sophisticated back-end scheduling algorithms.',
    contributions: [
      'The React Ecosystem: Since this was my first real front-end role, I had to rapidly learn the fundamentals of React, state management, and component-based architecture.',
      'Technical Leadership: Leading a team where everyone was "new" to the stack taught me the importance of collaborative learning. We navigated the hurdles of web development together, turning a daunting task into a successful build.',
      'UI/UX for Complex Data: I learned how to translate dense algorithmic output into a visual Gantt Chart that is actually intuitive and useful for a user.',
      'The Importance of Feedback Loops: This project taught me the value of user feedback. For example, I realized in hindsight that incorporating a "loading state" or progress bar for long-running algorithm generations is crucial for a smooth user experience.'
    ],
    keyFeatures: [
      {
        title: 'See It In Action',
        description: 'Check out the video below to see how we transformed back-end logic into a functional, visual scheduling tool.'
      }
    ],
    implementation: [
      { label: 'Frontend', value: 'React, State Management' },
      { label: 'Visualization', value: 'Interactive Gantt Chart' },
      { label: 'Role', value: 'Front-End Team Lead, UI/UX Lead' }
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/nathanansel28/40.014-ESA-webapp' },
    ],
    videoUrl: '/videos/gantt.mp4'
  },
  {
    slug: 'petbnb',
    id: 'webdev-2',
    title: 'PetBNB',
    image: '/images/petbnb.png',
    year: '2024',
    tags: ['UI/UX', 'Figma', 'User Research', 'Mobile App'],
    subtitle: 'A Trusted Marketplace for In-Home Pet Care',
    bannerImage: '/images/petbnb.png',
    overview: 'PetBNB was born out of a desire to solve the "trust gap" in the pet-sitting industry. This project was the culmination of my UI/UX journey at SUTD—a fast-paced, 4-month intensive where we took an idea from raw user research to a fully functional app. I led the design for the Pet Owner experience, focusing on creating a seamless flow from sitter discovery to real-time peace of mind.',
    contributions: [
      'Rapid Iteration: We went through three major design iterations in just four months. I learned how to "kill my darlings"—discarding designs that didn\'t work after user testing to make room for more intuitive solutions.',
      'User Research as a Compass: Conducting deep user research taught me that "features" aren\'t as important as "feelings." The integration of the pet tracker wasn\'t just a technical add-on; it was a psychological solution to user anxiety.',
      'Bridging Design and Development: Seeing my Figma designs come to life in a functional app was incredibly rewarding. I learned how to communicate design specs to the development side to ensure the final product matched the pixel-perfect vision.',
      'Information Architecture: Managing a two-sided marketplace (Owner vs. Sitter) required a complex but clear hierarchy to ensure both users had a streamlined experience without being overwhelmed by data.'
    ],
    keyFeatures: [
      {
        title: 'The Problem',
        description: 'Pet owners face a stressful dilemma: finding reliable, verified sitters who offer personalized care. Existing platforms often feel transactional and lack the transparency needed for owners to feel safe leaving their pets during long trips. Conversely, great sitters struggle with a lack of centralized tools to prove their credibility and manage bookings effectively.'
      },
      {
        title: 'Detailed Pet Profiling',
        description: 'Owners create "Pet Passports" so sitters know every quirk and medical need before the stay begins.'
      },
      {
        title: 'Intuitive Discovery',
        description: 'A robust, filter-based search allows owners to match with sitters based on budget, amenities, and specific certifications.'
      },
      {
        title: 'The "Trust Tracker"',
        description: 'Inspired by the seamlessness of AirTags, I ideated and designed an integrated pet tracker and activity log. This allows sitters to send one-tap updates, photos, and GPS summaries, ensuring owners never feel disconnected.'
      },
      {
        title: 'The Result',
        description: 'The feedback from our user testing was overwhelmingly positive, specifically regarding the Activity Logs. Users noted that the structured, system-generated updates made them feel significantly more secure compared to standard messaging apps.'
      }
    ],
    implementation: [
      { label: 'Design Tools', value: 'Figma' },
      { label: 'Duration', value: '4-month intensive' },
      { label: 'Role', value: 'Pet Owner Experience Design Lead' }
    ],
    links: [
      { label: 'Try PetBNB', url: 'https://petbnb-pwa2.vercel.app/' },
    ],
    videoUrl: [
      '/videos/PetBNB-1.mp4',
      '/videos/PetBNB-2.mp4',
      '/videos/PetBNB-3.mp4'
    ],
    processImages: [
      '/images/PetBNB-Poster.png'
    ]
  },
  {
    slug: 'emotion-aware-detection',
    id: 'webdev-3',
    title: 'Emotion-Aware Detection',
    image: '/images/emotionaware.png',
    year: '2024',
    tags: ['NLP', 'XAI', 'GPT-2', 'Conversational AI', 'Multilingual'],
    subtitle: 'Explainable NLP Conversational Agent',
    bannerImage: '/images/emotionaware.png',
    overview: 'The core objective of this project was to dismantle the "black box" of emotional AI. Working in a research-focused group, we integrated eXplainable AI (XAI) directly into a multilingual conversational agent. While traditional AI often gives a result without context, our system was designed to engage users with emotionally-tuned responses while providing a precise, verifiable explanation for every interaction. This project served as an advanced extension of our work with GPT-2, pushing the boundaries of how machines interpret and explain human sentiment.',
    contributions: [
      'Dismantling the Black Box: I gained deep insights into XAI methodologies, learning how to bridge the gap between complex model outputs and human-readable explanations. It\'s one thing for a model to detect "Anger," but another to explain why (e.g., highlighting specific linguistic tokens or syntax).',
      'Multilingual Challenges: We didn\'t just stick to English. I learned about the complexities of cross-lingual sentiment analysis, including how different cultures express emotion and how to handle low-resource languages within an NLP pipeline.',
      'Research & Development Rigor: This project was research-heavy. I spent a significant amount of time diving into recent papers on Integrated Gradients and understanding the "trend" of interpretability in the current AI landscape.'
    ],
    keyFeatures: [
      {
        title: 'The Challenge & The "Fun"',
        description: 'Moving from a standard GPT-2 generation task to an "Emotionally Aware + Explainable" system was a steep climb. We had to balance the model\'s creative generation with the rigid logic required for XAI. It was a puzzle of engineering and ethics: ensuring the AI was helpful, empathetic, and, most importantly, transparent.'
      }
    ],
    implementation: [
      { label: 'Model', value: 'GPT-2, XAI Integration' },
      { label: 'Techniques', value: 'Integrated Gradients, Cross-lingual Sentiment Analysis' },
      { label: 'Scope', value: 'Multilingual Conversational Agent' }
    ],
    links: [
      { label: 'GitHub Repository', url: 'https://github.com/Xephori/nlp-is-difficult' },
    ],
    processImages: [
      '/images/NLP1.jpg',
      '/images/NLP2.jpg',
      '/images/NLP3.jpg',
    ]
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
    externalLink: 'https://www.behance.net/gallery/225050421/Healthy-Smoothie-Website-Redesign-UIUX-Case-Study',
    overview: 'I conducted a comprehensive UX/UI redesign for Smoodee (formerly Noshinom). This project was my introduction to the world of design, where I was tasked with not only refreshing the visual identity but also overhauling the digital experience. My goal was to transform a dated interface into a modern, intuitive, and streamlined platform that matched Smoodee\'s fun and vibrant new brand personality.',
    contributions: [
      'End-to-End Research: I learned how to move from "gut feeling" to data-driven design. This involved conducting competitive research to see how market leaders handled similar flows and performing user research to uncover actual pain points.',
      'Visual Storytelling: I discovered how much typography, color palettes, and spacing impact a user\'s perception of a brand. I had to ensure the "fun" aesthetic didn\'t come at the cost of readability.',
      'Iterative Design: This was my first time building a project from the ground up—from initial sketches and wireframes to high-fidelity prototypes. I learned that UX is never "done"; it\'s about constant refinement.',
      'Usability Heuristics: I applied industry-standard principles to ensure the new user flow felt natural and reduced cognitive load for returning customers.'
    ],
    keyFeatures: [
      {
        title: 'The Deep Dive',
        description: 'Below is the full documentation of my process.'
      }
    ],
    implementation: [
      { label: 'Design Tools', value: 'Figma, Adobe Illustrator' },
      { label: 'Prototyping', value: 'Figma, Principle' },
      { label: 'Design System', value: 'Component library with tokens' }
    ],
    links: [
      { label: 'Full Documentation', url: 'https://www.behance.net/gallery/225050421/Healthy-Smoothie-Website-Redesign-UIUX-Case-Study' },
      { label: 'Smoodee Current Website', url: 'https://smoodee.sg/?srsltid=AfmBOopGWR_VQKpSOGfSRyNqZaoUuySJrwWPs-P1RUdSLot0wpP269EQ' }
    ],
    processImages: [
      '/images/smoodee-uiux.png',  // Add more pages as needed
    ]
  },
  {
    slug: 'shioya',
    id: 'design-2',
    title: 'SHIOYA PASSION PROJECT',
    image: '/images/shioya.png',
    year: '2024',
    tags: ['Branding', 'Visual Design', 'Restaurant'],
    subtitle: 'Brand Identity: Shioya (Passion Project)',
    bannerImage: '/images/shioya.png',
    overview: 'Born out of a personal obsession with shiopan (Japanese salt bread), Shioya is a conceptual bakery brand I designed from the ground up. I wanted to explore the intersection of traditional Japanese aesthetics and modern, minimalist branding. This project allowed me to act as both the client and the lead designer, creating a visual identity that feels as warm and comforting as a fresh tray of bread.',
    contributions: [
      'Symbolism in Typography: I experimented with how to subtly integrate the product (the shiopan roll) directly into the logomark without making it feel cluttered.',
      'Brand Storytelling: I learned that a brand is more than just a logo; it\'s an atmosphere. I worked on conceptualizing how this logo would live on different touchpoints—from wax paper packaging to store signage.',
      'Creative Freedom & Constraints: Without a client brief, I had to set my own constraints to ensure the design remained cohesive. It taught me how to self-critique and refine a concept through multiple "internal" iterations.',
      'Vector Illustration for Branding: I used this project to further sharpen my skills in translating a hand-drawn sketch into a clean, scalable vector format that retains its "human" touch.'
    ],
    keyFeatures: [
      {
        title: 'The Design Philosophy',
        description: 'The logo features a custom, hand-illustrated icon integrated into the typography, evoking an "organic and artisanal" feel. I chose an earthy, bread-crust brown to anchor the brand, moving away from sterile, corporate colors to something more inviting and home-baked.'
      }
    ],
    implementation: [
      { label: 'Design Tools', value: 'Adobe Illustrator' },
      { label: 'Typography', value: 'Custom hand-illustrated logomark' },
      { label: 'Color System', value: 'Earthy, bread-crust brown tones' }
    ],
    links: [
      { label: 'Full Documentation', url: 'https://www.behance.net/gallery/227111665/shioya-Bakery-Branding-Logo' }
    ],
    processImages: [
      '/images/shioya/1.png',
      '/images/shioya/2.png',
      '/images/shioya/3.png',
      '/images/shioya/4.png',
      '/images/shioya/5.png'
      // Add more pages as needed
    ]
  },
  {
    slug: 'noshinom',
    id: 'design-3',
    title: 'NOSHNOM PRODUCT DESIGN',
    image: '/images/noshinom.png',
    year: '2023',
    tags: ['Product Design', 'Packaging', 'Adobe Illustrator'],
    subtitle: 'Retro-Aesthetic Product Packaging Redesign',
    bannerImage: '/images/noshinom.png',
    overview: 'I was commissioned by Noshinom to lead the creative redesign of their product packaging. The goal was to pivot from their existing look to a sophisticated yet playful "Retro-Aesthetic" that would resonate with working adults in their 20s and 30s (Gen Z and Millennials). As someone with a lifelong passion for art, I translated my creative instincts into a commercial brand identity.',
    contributions: [
      'Targeted Brand Positioning: I learned how to design for a specific demographic. Moving toward a "retro" vibe required a deep understanding of nostalgia-driven design trends that appeal to young professionals.',
      'Vector Mastery (Adobe Illustrator): This project was my "bootcamp" for professional vector design. I mastered the use of the Pen tool, pathfinders, and color swatches to create high-resolution, print-ready assets.',
      'Designing for Print: Unlike web design, physical packaging requires precision regarding bleed lines, typography legibility at small scales, and color profiles (CMYK vs. RGB).',
      'Creative Directing: Since I was leading the creative effort, I had to balance my artistic vision with the client\'s business objectives, ensuring the final result was both beautiful and "on-brand."'
    ],
    keyFeatures: [
      {
        title: 'Fun Fact',
        description: 'This was one of those projects where "work" didn\'t feel like work. Being able to blend my love for art with a professional commission was a massive milestone for my creative career!'
      }
    ],
    implementation: [
      { label: 'Design Tools', value: 'Adobe Illustrator' },
      { label: 'Output', value: 'Print-ready packaging assets (CMYK)' },
      { label: 'Target Audience', value: 'Gen Z & Millennials (20s-30s)' }
    ],
    links: [],
    processImages: [
      '/images/noshinom/1.png',
      '/images/noshinom/2.png',
      '/images/noshinom/3.png'
      // Add more pages as needed
    ]
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
