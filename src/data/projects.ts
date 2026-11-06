// ── Single source of truth for every project ───────────────────
// Used by `/` (index.astro) and `/proyectos` (proyectos.astro).
//
// `home` decides where a project shows up on the home page:
//   'featured' → pinned horizontal "cinema" (needs `img` + `metric`)
//   'grid'     → compact text grid under the cinema
//   false      → only listed on /proyectos
//
// /proyectos shows every project that has an `img` (screenshot + name
// only). Only list work that is 100% Stay True's; no private/third-party
// systems. No `img` → not listed.
//
// Every `metric` is a verifiable fact about the build, not a claimed
// business outcome we can't back up.
//
// Adding a project: drop a 1440×900 .webp in public/img/projects/, then
//   {
//     name: "Nombre",
//     kind: "Categoría",
//     img: "/img/projects/archivo.webp",
//     url: "https://…",
//     description: "…",
//     stack: ["Astro.js"],
//     accent: "#22c55e",
//     home: false,
//   },

export const WHATSAPP = "https://wa.me/529981169584?text=Hola%20Stay%20True%2C%20quiero%20cotizar%20un%20proyecto";
export const EMAIL    = "hola@staytruemx.com";

export type Project = {
  name: string;
  kind: string;
  year?: string;
  img?: string;
  url: string | null;
  store?: string; // Google Play link, shown as a badge on the home cinema card
  displayUrl?: string; // host shown in the browser-chrome bar when it differs from `url`
  description: string;
  metric?: string;
  stack: string[];
  note?: string | null;
  accent: string;
  home: 'featured' | 'grid' | false;
};

// Array order = display order, on both pages.
export const projects: Project[] = [
  // ── Home: cinema ────────────────────────────────────────────
  {
    name: "Umbral Inmobiliaria",
    kind: "Demo · Bienes raíces",
    year: "2026",
    img: "/img/projects/demo-inmobiliaria.webp",
    url: "https://demo-inmobiliaria.staytruemx.com",
    description:
      "Plataforma demo para inmobiliaria con propiedades en cinco ciudades de México. Catálogo de casas, departamentos, terrenos y desarrollos con filtros por operación, tipo y ciudad, y Lía, asistente virtual que califica al cliente, agenda visitas y pasa la conversación a WhatsApp.",
    metric: "Asistente virtual con pase a WhatsApp",
    stack: ["Astro.js", "TypeScript", "IA"], // TODO: confirmar
    accent: "#d6b98c",
    home: 'featured',
  },
  {
    name: "Notame",
    kind: "App de escritorio · Windows",
    year: "2026",
    img: "/img/projects/notame.webp",
    url: "https://notame.staytruemx.com",
    description:
      "App de notas adhesivas que flotan sobre cualquier ventana. Varias notas con listas de tareas, modo libreta, modo fantasma semitransparente, anclaje a bordes, envío cifrado entre PCs y guardado automático, todo local y sin cuenta.",
    metric: "Instalador para Windows 10/11",
    stack: ["Tauri", "Rust", "TypeScript"], // TODO: confirmar
    accent: "#facc15",
    home: 'featured',
  },
  {
    name: "Mezcal Tierra Mística",
    kind: "E-commerce artesanal",
    year: "2026",
    img: "/img/projects/tierra-mistica.webp",
    url: "https://tierramisticamezcal.com",
    description:
      "Tienda en línea para mezcal artesanal de Oaxaca. Catálogo por variedad de agave, carrito propio, cálculo de envío por código postal y contenido editorial sobre el proceso de producción.",
    metric: "Carrito y envíos a la medida",
    stack: ["Astro.js", "TypeScript", "E-commerce"],
    accent: "#22c55e",
    home: 'featured',
  },
  {
    name: "Pierusa",
    kind: "Suministro industrial",
    year: "2026", // TODO: confirmar
    img: "/img/projects/pierusa.webp",
    url: "https://pierusa.com.mx",
    description:
      "Sitio bilingüe para importadora de equipo industrial fundada en 1987. Directorio de fabricantes por línea — bombas, válvulas, instrumentación —, Line Card descargable y solicitud de cotización.",
    metric: "Bilingüe ES / EN + catálogo de marcas",
    stack: ["Astro.js", "TypeScript", "SEO"], // TODO: confirmar
    accent: "#60a5fa",
    home: 'featured',
  },
  {
    name: "ISCYTEC",
    kind: "Institución educativa",
    year: "2026",
    img: "/img/projects/iscytec.webp",
    url: "https://iscytec.mx",
    description:
      "Sitio para instituto de preparatoria y licenciatura en línea en Mazatlán. Oferta académica por plan de estudios, información de becas e inscripciones, y solicitud de informes directa por formulario y WhatsApp.",
    metric: "Bachillerato y licenciatura en línea",
    stack: ["Astro.js", "TypeScript", "SEO"],
    accent: "#fbbf24",
    home: 'featured',
  },
  {
    name: "Blasto",
    kind: "Videojuego · Web y Android",
    year: "2026", // TODO: confirmar
    img: "/img/projects/blasto.webp",
    url: "https://blasto.pro",
    store: "https://play.google.com/store/apps/details?id=pro.blasto.game&pcampaignid=web_share",
    description:
      "Arcade de naves que se juega en el navegador y ya está publicado como app en Google Play. Power-ups, personalización de nave, tienda integrada, anuncios recompensados y marcador global de jugadores.",
    metric: "Publicado en Google Play · Ranking Top 100",
    stack: ["TypeScript", "Canvas", "Node.js"], // TODO: confirmar
    accent: "#22d3ee",
    home: 'featured',
  },
  {
    name: "Grupo Maxxum",
    kind: "Construcción y bienes raíces",
    year: "2026",
    img: "/img/projects/maxxum.webp",
    url: "https://maxxum.staytruemx.com",
    description:
      "Sitio para grupo de Querétaro con dos divisiones: Maxxum Construcciones (obra, remodelación, impermeabilización y pintura) y Maxxum Real Estate (venta, renta y desarrollos). Cotización de proyectos, propiedades, contacto por WhatsApp y Lía, asistente virtual que orienta al visitante.",
    metric: "Dos divisiones, un solo sitio",
    stack: ["Astro.js", "TypeScript", "IA"], // TODO: confirmar
    accent: "#e11d48",
    home: 'featured',
  },
  {
    name: "Catálogo Digital",
    kind: "Catálogo de servicios · Abogados",
    year: "2026",
    img: "/img/projects/catalogo-digital.webp",
    url: "https://catalogo-digital.staytruemx.com",
    description:
      "Catálogo digital de servicios pensado para despachos de abogados: consultas, divorcios, testamentos, constitución de empresas y más, con perfiles del equipo, testimonios, preguntas frecuentes y solicitud de consulta por WhatsApp. El concepto se adapta a cualquier giro que venda servicios.",
    metric: "Adaptable a cualquier giro",
    stack: ["Astro.js", "TypeScript", "Tailwind CSS"], // TODO: confirmar
    accent: "#c9a45c",
    home: 'featured',
  },
  {
    name: "Brickell News",
    kind: "Portal editorial",
    year: "2024",
    img: "/img/projects/brickell-news.webp",
    url: "https://brickell.news",
    description:
      "Portal de noticias con gestor de contenidos propio, portadas dinámicas por sección y SEO técnico avanzado. Arquitectura pensada para publicar decenas de notas al día.",
    metric: "CMS propio + SEO técnico",
    stack: ["Laravel", "Astro.js"],
    accent: "#4ade80",
    home: 'featured',
  },
  {
    name: "AMX Developers",
    kind: "Desarrollo inmobiliario",
    year: "2026",
    img: "/img/projects/amx-developers.webp",
    url: "https://amxdevelopers.com",
    description:
      "Sitio bilingüe (ES/EN) para desarrolladora inmobiliaria de lujo con proyectos en México y Miami. Portafolio de obras, galerías a pantalla completa y contacto directo por WhatsApp.",
    metric: "Bilingüe ES / EN",
    stack: ["Astro.js", "TypeScript", "SEO"],
    accent: "#84cc16",
    home: 'featured',
  },
  {
    name: "Maskanieves",
    kind: "Marca local · Cancún",
    year: "2026",
    img: "/img/projects/maskanieves.webp",
    url: "https://maskanieves.com",
    description:
      "Sitio de identidad fuerte para heladería artesanal de Cancún. Catálogo de sabores por categoría, menú con precios y pedidos directos por WhatsApp para domicilio y eventos.",
    metric: "Pedidos directos por WhatsApp",
    stack: ["Astro.js", "Tailwind CSS", "TypeScript"],
    accent: "#6ee7b7",
    home: 'featured',
  },

  // ── Home: compact grid ──────────────────────────────────────
  {
    name: "Creditaria",
    kind: "Herramienta financiera",
    img: "/img/projects/cotizador-credito.webp",
    url: "https://simulador-credito-ulises.netlify.app/cotizador/",
    displayUrl: "simulador-cotizador.com",
    description: "Simulador financiero interactivo con cálculo de mensualidades en tiempo real y UX optimizada para conversión.",
    stack: ["Astro.js", "React"],
    note: null,
    accent: "#4ade80",
    home: 'grid',
  },
  // ── Only on /proyectos ──────────────────────────────────────
  {
    name: "Stay Color",
    kind: "Juego web",
    img: "/img/projects/stay-color.webp",
    url: "https://color.staytruemx.com",
    description: "Juego de lógica para ordenar bloques de color por columnas: más de 100 niveles por dificultad, modos por movimientos o tiempo, modo infinito y personalizado.",
    stack: ["TypeScript", "Canvas"], // TODO: confirmar
    note: null,
    accent: "#facc15",
    home: false,
  },
];
