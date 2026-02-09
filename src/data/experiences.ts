export interface Experience {
  year: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills?: { title: string; items: string[] }[];
  colorClass?: string;
}

export const experiences: Experience[] = [
  {
    year: "2020",
    title: "FullStack Developer Senior",
    company: "Sitelicon Ecommerce Services",
    period: "2020 - Actualmente",
    description:
      "Desarrollo y mantenimiento de soluciones full-stack para empresas de e-commerce. Análisis de requisitos colaborando con cliente final en su definición, diseño de soluciones técnicas y diagnóstico de incidencias críticas. Participación activa en desarrollo y mantenimiento de APIs, Webs Dinámicas, Aplicaciones Web, ERPs, CRMs y Landings.",
    skills: [
      {
        title: "Backend",
        items: [
          "Laravel & Codeigniter (PHP)",
          "Node.js en menor medida",
          "APIs RESTful y GraphQL",
          "Procesamiento asíncrono y colas",
        ],
      },
      {
        title: "Frontend",
        items: [
          "Laravel Blade y Livewire, Astro.js, Next.js",
          "HTML5, CSS3 (SASS)",
          "Tailwind, Bootstrap",
          "Responsive Design",
        ],
      },
      {
        title: "Bases de Datos",
        items: ["MySQL & MariaDB", "MongoDB (NoSQL)", "Optimización y diseño"],
      },
      {
        title: "Especialidades",
        items: [
          "Integraciones de marketplaces",
          "Gestión de proyectos",
          "Liderazgo de equipos",
        ],
      },
    ],
    colorClass: "bg-teal-500",
  },
  {
    year: "2020",
    title: "Consultor Business Intelligence",
    company: "Bankinter",
    period: "2020",
    description:
      "Desarrollo de soluciones Business Intelligence para análisis de datos empresariales. Diseño e implementación de datawarehouses, ETLs y reportes estratégicos.",
    skills: [
      {
        title: "Tecnologías",
        items: [
          "IBM InfoSphere DataStage",
          "Oracle Business Intelligence Enterprise Edition (OBIEE)",
          "SQL Oracle Developer PL/SQL",
        ],
      },
      {
        title: "Responsabilidades",
        items: [
          "Desarrollo de datawarehouses",
          "Construcción de ETLs",
          "Reportes BI",
        ],
      },
    ],
    colorClass: "bg-cyan-500",
  },
];
