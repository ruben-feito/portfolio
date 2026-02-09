export interface Project {
  title: string;
  description: string;
  gradient: string;
  tags: Array<{ label: string; color: string }>;
}

export const projects: Project[] = [
  {
    title: "CosladaFon",
    description:
      "Plataforma e-commerce de telefonía móvil reacondicionada con integraciones de múltiples marketplaces europeos (Amazon, Fnac, Carrefour, etc.) y sistemas de pago.",
    gradient: "from-blue-500 to-indigo-600",
    tags: [
      { label: "Laravel", color: "red" },
      { label: "Marketplaces", color: "pink" },
      { label: "AWS", color: "orange" },
    ],
  },
  {
    title: "Álvaro Catalán de Ocón",
    description:
      "Portafolio personal de un Diseñador Industrial premiado con el Premio Nacional de Diseño 2023. Web que muestra proyectos realizados y información biográfica.",
    gradient: "from-teal-500 to-cyan-600",
    tags: [
      { label: "CodeIgniter", color: "orange" },
      { label: "Portfolio", color: "teal" },
      { label: "cPanel", color: "yellow" },
    ],
  },
  {
    title: "Boris Pena Architects",
    description:
      "Web corporativa de un estudio de arquitectura con proyectos a nivel mundial. Incluye panel de administración para gestión de contenidos y proyectos.",
    gradient: "from-green-500 to-teal-600",
    tags: [
      { label: "Laravel", color: "red" },
      { label: "Next.js", color: "blue" },
      { label: "Tailwind", color: "cyan" },
    ],
  },
  {
    title: "Paco Martinez",
    description:
      "E-commerce de bolsos, maletas y complementos con integraciones en Amazon y El Corte Inglés. Backend robusto con gestión de múltiples canales de venta.",
    gradient: "from-purple-500 to-pink-600",
    tags: [
      { label: "Laravel", color: "red" },
      { label: "Next.js", color: "blue" },
      { label: "AWS", color: "orange" },
    ],
  },
  {
    title: "Paraninfo",
    description:
      "Aplicación web completa para gestión de academia: alumnos, cursos, profesores, clases y pagos. Múltiples sistemas de pago integrados (Paycomet, PayPal, Stripe).",
    gradient: "from-orange-500 to-red-600",
    tags: [
      { label: "Laravel", color: "red" },
      { label: "Full Stack", color: "red" },
      { label: "AWS", color: "orange" },
    ],
  },
  {
    title: "SAPI",
    description:
      "Administrador web para gestión de centros de día. Sistema integral desde análisis de requisitos, diseño de BBDD hasta desarrollo como MVP.",
    gradient: "from-cyan-500 to-blue-600",
    tags: [
      { label: "Laravel", color: "red" },
      { label: "Admin Panel", color: "purple" },
      { label: "Bootstrap", color: "purple" },
    ],
  },
  {
    title: "Yoga con Gloria",
    description:
      "Plataforma de clases online de yoga pregrabadas. Web informativa y aplicación para visualizar clases. Integración de pagos con PayPal y Stripe.",
    gradient: "from-pink-500 to-rose-600",
    tags: [
      { label: "Laravel", color: "red" },
      { label: "Membresías", color: "rose" },
      { label: "Pagos", color: "fuchsia" },
    ],
  },
  {
    title: "ACdO",
    description:
      "Web de venta de artesanía sostenible con compromiso social. Sistema de pedidos conectado con Zoho CRM. Gestión manual de pagos para mayor acercamiento con clientes.",
    gradient: "from-indigo-500 to-purple-600",
    tags: [
      { label: "CodeIgniter", color: "orange" },
      { label: "CRM Integration", color: "violet" },
      { label: "cPanel", color: "yellow" },
    ],
  },
  {
    title: "The Worldfolio",
    description:
      "Portal de noticias de economía y negocios para audiencia asiática. Migración de PHP 5.3 a 8.0 con rediseño completo manteniendo estructura original.",
    gradient: "from-emerald-500 to-green-600",
    tags: [
      { label: "PHP Native", color: "indigo" },
      { label: "Bootstrap", color: "purple" },
      { label: "AWS", color: "orange" },
    ],
  },
  {
    title: "PET Lamp",
    description:
      "E-commerce de lámparas artesanales de botellas recicladas. Configurador avanzado con control de stock único y gestión de electrificación por país.",
    gradient: "from-yellow-500 to-orange-600",
    tags: [
      { label: "CodeIgniter", color: "orange" },
      { label: "Configurador", color: "green" },
      { label: "cPanel", color: "yellow" },
    ],
  },
];
