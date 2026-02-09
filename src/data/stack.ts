export interface SkillGroup {
  title: string;
  description: string;
  borderColor: string;
}

export interface ToolSection {
  icon: string;
  title: string;
  colorClass: string;
  items: SkillGroup[];
}

export const backendSkills: SkillGroup[] = [
  {
    title: "Laravel",
    description:
      "Framework PHP robusto con patrón MVC, ORM Eloquent, migraciones, testing, autenticación Sanctum/Passport o HMAC y herramientas para desarrollo rápido y profesional.",
    borderColor: "border-teal-500",
  },
  {
    title: "Filament & Admin Panels",
    description:
      "Construcción rápida de paneles administrativos, CMS y ERP con componentes listos para producción, formularios dinámicos y tablas interactivas.",
    borderColor: "border-red-500",
  },
  {
    title: "CodeIgniter & PHP Avanzado",
    description:
      "Desarrollo con frameworks PHP ligeros, POO, middleware, seguridad y optimización de performance.",
    borderColor: "border-blue-500",
  },
  {
    title: "APIs RESTful & GraphQL",
    description:
      "Diseño de endpoints escalables, autenticación JWT/OAuth, versionado de APIs, rate limiting y documentación con Swagger.",
    borderColor: "border-green-500",
  },
  {
    title: "Node.js & Express",
    description:
      "Aplicaciones fullstack con JavaScript/TypeScript, middleware personalizado, conexión a bases de datos y APIs en tiempo real.",
    borderColor: "border-orange-500",
  },
  {
    title: "Colas & Procesamiento Asíncrono",
    description:
      "Redis Queues, Job Scheduling, procesamiento en background, webhooks y eventos en tiempo real.",
    borderColor: "border-yellow-500",
  },
];

export const frontendSkills: SkillGroup[] = [
  {
    title: "Astro.js",
    description:
      "Sitios estáticos ultrarrápidos y optimizados, island architecture, renderizado parcial y excelente performance SEO.",
    borderColor: "border-cyan-500",
  },
  {
    title: "Laravel Blade",
    description:
      "Plantillas elegantes para aplicaciones Laravel. Componentes reutilizables y lógica de vista limpia integrada con el framework backend.",
    borderColor: "border-purple-500",
  },
  {
    title: "Filament & Admin Panels",
    description:
      "Paneles administrativos, CMS y ERP con componentes listos para producción. Diseño rápido de interfaces complejas sin necesidad de JavaScript personalizado.",
    borderColor: "border-red-500",
  },
  {
    title: "Laravel Livewire",
    description:
      "Componentes interactivos en tiempo real sin escribir JavaScript, validación en vivo y sincronización automática con backend.",
    borderColor: "border-indigo-500",
  },
  {
    title: "Next.js",
    description:
      "Aplicaciones Next.js con SSR/SSG, rutas dinámicas, API routes, optimización de imágenes y despliegue en Vercel.",
    borderColor: "border-green-500",
  },
  {
    title: "HTML5 & CSS3",
    description:
      "Semántica correcta, accesibilidad (WCAG), responsive design con mobile-first, CSS Grid, Flexbox y custom properties.",
    borderColor: "border-teal-500",
  },
  {
    title: "SASS, Tailwind CSS & Bootstrap",
    description:
      "Frameworks de estilos modernos, preprocesadores, sistema de componentes, temas dinámicos y desarrollo rápido con utilidades.",
    borderColor: "border-pink-500",
  },
];

export const databases = [
  {
    name: "MySQL",
    description:
      "Base de datos relacional principal, índices optimizados y consultas complejas",
    icon: '<svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v14a8 3 0 0 0 16 0V5"></path><path d="M4 12a8 3 0 0 0 16 0"></path></svg>',
    colorClass: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    name: "MariaDB",
    description: "Compatible con MySQL, optimizado y de código abierto",
    icon: '<svg class="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v14a8 3 0 0 0 16 0V5"></path><path d="M4 12a8 3 0 0 0 16 0"></path></svg>',
    colorClass: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    name: "Redis",
    description: "Caching, sesiones, colas y datos en tiempo real",
    icon: '<svg class="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11"></path></svg>',
    colorClass: "bg-red-100 dark:bg-red-900/30",
  },
];

export const architecturePatterns: SkillGroup[] = [
  {
    title: "Microservicios & Escalabilidad",
    description:
      "Arquitectura modular, comunicación entre servicios, load balancing y escalabilidad horizontal",
    borderColor: "border-purple-500",
  },
  {
    title: "Caché & Optimización",
    description:
      "Estrategias de caching, invalidación, query optimization y lazy loading",
    borderColor: "border-indigo-500",
  },
  {
    title: "SOLID & Design Patterns",
    description:
      "Single Responsibility, repositorio pattern, dependency injection, factory pattern",
    borderColor: "border-blue-500",
  },
];

export const toolSections: ToolSection[] = [
  {
    icon: '<svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><circle cx="12" cy="18" r="3"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>',
    title: "Control de Versiones",
    colorClass: "bg-purple-100 dark:bg-purple-900/30",
    items: [
      {
        title: "Git & GitHub",
        description:
          "Control de versiones distribuido, pull requests y colaboración",
        borderColor: "border-purple-500",
      },
      {
        title: "GitFlow & Conventional Commits",
        description: "Flujo de trabajo profesional y commits semánticos",
        borderColor: "border-gray-600",
      },
      {
        title: "AWS CodeCommit",
        description: "Repositorios privados seguros en AWS",
        borderColor: "border-blue-500",
      },
    ],
  },
  {
    icon: '<svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"></path><circle cx="9" cy="12" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle></svg>',
    title: "Infraestructura & DevOps",
    colorClass: "bg-orange-100 dark:bg-orange-900/30",
    items: [
      {
        title: "AWS",
        description:
          "EC2, S3, RDS, Lambda, CloudFront, CloudWatch y AWS Certified Cloud Practitioner",
        borderColor: "border-orange-500",
      },
      {
        title: "Hosting & Servidores",
        description:
          "cPanel, shared hosting, VPS y configuración de servidores",
        borderColor: "border-yellow-500",
      },
    ],
  },
  {
    icon: '<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l-1.4 1.4L9.4 19 21 7.4 19.6 6 9.4 16.6z"></path></svg>',
    title: "Desarrollo & Testing",
    colorClass: "bg-blue-100 dark:bg-blue-900/30",
    items: [
      {
        title: "Visual Studio Code",
        description: "Editor principal, extensiones y debugging",
        borderColor: "border-blue-500",
      },
      {
        title: "Postman & Swagger",
        description: "Testing y documentación de APIs",
        borderColor: "border-orange-500",
      },
    ],
  },
  {
    icon: '<svg class="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="5" cy="12" r="3"></circle><circle cx="19" cy="12" r="3"></circle><path d="M8 12h8M7 9l2 3-2 3M17 9l-2 3 2 3"></path></svg>',
    title: "Integraciones & Marketplaces",
    colorClass: "bg-pink-100 dark:bg-pink-900/30",
    items: [
      {
        title: "Plataformas de Ventas",
        description:
          "Integración con Shopify, WooCommerce, Prestashop y plataformas e-commerce",
        borderColor: "border-pink-500",
      },
      {
        title: "Marketplaces",
        description: "Amazon, BackMarket, Mirakl y otras plataformas",
        borderColor: "border-purple-500",
      },
    ],
  },
];

export const collaborationTools: SkillGroup[] = [
  {
    title: "Figma",
    description: "Diseño UI/UX colaborativo y prototipos interactivos",
    borderColor: "border-teal-500",
  },
  {
    title: "Chrome DevTools & Lighthouse",
    description: "Debugging y auditoría de rendimiento web",
    borderColor: "border-blue-500",
  },
];
