export interface Skill {
  title: string;
  description: string;
  icon: string;
}

export const featuredSkills: Skill[] = [
  {
    title: "Laravel Backend",
    description:
      "Desarrollar APIs robustas, sistemas complejos y arquitecturas escalables. Implementar autenticación segura, gestionar BBDD avanzadas, manejar colas de trabajos asíncronos y optimizar rendimiento para aplicaciones de alto tráfico.",
    icon: "upload",
  },
  {
    title: "Frontend Moderno",
    description:
      "Astro.js, Laravel Blade y Laravel Livewire. Desarrollar SPAs, interfaces responsive con Tailwind y diseño centrado en UX. Crear ERP, CMS y paneles administrativos con Filament, Laravel o Next.js.",
    icon: "desktop",
  },
  {
    title: "Integraciones Marketplace",
    description:
      "Sincronizar automáticamente catálogos, stock y pedidos con plataformas europeas y nacionales. Desarrollar conectores personalizados, manejar webhooks, gestionar errores y monitoreo en tiempo real para asegurar operaciones fluidas.",
    icon: "network",
  },
  {
    title: "Análisis y Soluciones",
    description:
      "Realizar análisis detallados de requisitos para entender las necesidades del cliente, diseñar soluciones personalizadas y eficientes, y desarrollar ERPs, CRMs y aplicaciones web a medida, integrando las mejores prácticas para garantizar resultados óptimos.",
    icon: "check",
  },
  {
    title: "Bases de Datos",
    description:
      "MySQL, MariaDB y BBDD SQL similares. Diseño esquemas eficientes, optimizo consultas complejas y gestionar el rendimiento de BBDD para aplicaciones escalables.",
    icon: "database",
  },
  {
    title: "Arquitectura Moderna",
    description:
      "Implementar microservicios para dividir aplicaciones complejas, gestionar colas asíncronas para procesos en segundo plano, aplicar caching avanzado para mejorar la velocidad y optimizar el rendimiento de sistemas.",
    icon: "layers",
  },
];
