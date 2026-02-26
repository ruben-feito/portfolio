export interface Sector {
  icon: "cart" | "home" | "calendar";
  title: string;
  description: string;
}

export const sectors: Sector[] = [
  {
    icon: "cart",
    title: "E-commerce",
    description: "Plataformas de venta online con integraciones complejas",
  },
  {
    icon: "home",
    title: "Marketplaces",
    description: "Sincronización multi-plataforma y automatización",
  },
  {
    icon: "calendar",
    title: "Empresas",
    description: "Sistemas internos y herramientas de gestión",
  },
];
