// ── Single source of truth for every project ───────────────────
// Used by `/` (index.astro) and `/proyectos` (proyectos.astro).
//
// `home` decides where a project shows up on the home page:
//   'featured' → pinned horizontal "cinema" (needs `img` + `metric`)
//   'grid'     → compact text grid under the cinema
//   false      → only listed on /proyectos
//
// /proyectos shows every project that has an `img` (screenshot + name
// only), or `code` for private systems we can't screenshot: those get a
// code-editor tile with a snippet in the project's stack — clearly a
// reference, never passed off as the real product. Neither → not listed.
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
  code?: { file: string; lines: string[] };
  status?: string; // label on code tiles; defaults to "Sistema interno"
  url: string | null;
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
    name: "Blasto",
    kind: "Videojuego web",
    year: "2026", // TODO: confirmar
    img: "/img/projects/blasto.webp",
    url: "https://blasto.pro",
    description:
      "Arcade de naves que se juega directo en el navegador. Power-ups, personalización de nave, tienda integrada, anuncios recompensados y marcador global de jugadores.",
    metric: "Ranking global Top 100",
    stack: ["TypeScript", "Canvas", "Node.js"], // TODO: confirmar
    accent: "#22d3ee",
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
    name: "Lomas Travel",
    kind: "Agencia de viajes",
    year: "2022", // TODO: confirmar
    img: "/img/projects/lomas-travel.webp",
    url: "https://lomastravel.com/es",
    description:
      "Sistema web para agencia de viajes: reservas de hoteles, traslados y experiencias, catálogo de destinos y panel administrativo completo.",
    metric: "Reservas de hoteles, traslados y tours",
    stack: ["Laravel", "MySQL"],
    note: "Operado por el cliente",
    accent: "#fb923c",
    home: 'featured',
  },
  {
    name: "Ancona Autopartes",
    kind: "E-commerce automotriz",
    year: "2026", // TODO: confirmar
    img: "/img/projects/ancona-autopartes.webp",
    url: "https://www.anconaautopartes.com",
    description:
      "Tienda en línea de la refaccionaria del sureste. Catálogo por categoría, búsqueda por marca, modelo y año del vehículo, cuentas de cliente, lista de deseos y pagos con tarjeta y Mercado Pago.",
    metric: "Búsqueda de refacciones por vehículo",
    stack: ["Laravel", "MySQL", "E-commerce"], // TODO: confirmar
    accent: "#f87171",
    home: 'featured',
  },
  {
    name: "México Me Necesita",
    kind: "Plataforma institucional",
    year: "2023", // TODO: confirmar
    img: "/img/projects/mexico-me-necesita.webp",
    url: "https://mmn.org.mx",
    description:
      "Plataforma institucional con autenticación, roles y permisos granulares para múltiples tipos de usuario.",
    metric: "Roles y permisos granulares",
    stack: ["PHP", "MySQL"],
    accent: "#10b981",
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
    name: "Agua Coecytjal",
    kind: "Gobierno de Jalisco",
    year: "2023",
    img: "/img/projects/coecytjal.webp",
    url: "https://l.coecytjal.org.mx",
    description:
      "Sistema estatal de monitoreo de calidad del agua. Captura de muestreos, estadísticas comparativas entre periodos y generación de reportes para toma de decisiones públicas.",
    metric: "+50 cuerpos de agua monitoreados",
    stack: ["Laravel", "PHP", "MySQL"],
    accent: "#38bdf8",
    home: 'grid',
  },
  {
    name: "Dashboard Ohana",
    kind: "Transporte turístico",
    img: "/img/projects/ohana.webp",
    url: "https://ohanatransfers.com",
    description: "Panel operativo para empresa de transfers turísticos: asignación de choferes, monitoreo de rutas y gestión en tiempo real.",
    stack: ["Laravel", "Livewire", "MySQL"],
    note: null,
    accent: "#6ee7b7",
    home: 'grid',
  },
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
  {
    name: "Mujeres Rurales",
    kind: "Gobierno de CDMX",
    code: {
      file: "routes/web.php",
      lines: [
        "Route::middleware(['auth', 'role:validador'])",
        "    ->prefix('solicitudes')",
        "    ->group(function () {",
        "        Route::get('/', ListaSolicitudes::class);",
        "        Route::post('{solicitud}/etapa',",
        "            [ValidacionController::class, 'avanzar']);",
        "    });",
      ],
    },
    url: null,
    description: "Sistema de otorgamiento de créditos para el Gobierno de la Ciudad de México. Flujos de validación por etapas y roles granulares de acceso.",
    stack: ["Laravel", "Livewire", "MySQL"],
    note: "Sistema interno de gobierno",
    accent: "#a78bfa",
    home: 'grid',
  },
  {
    name: "Stay Color",
    kind: "Juego web",
    img: "/img/projects/stay-color.webp",
    url: "https://color.staytruemx.com",
    description: "Juego de lógica para ordenar bloques de color por columnas: más de 100 niveles por dificultad, modos por movimientos o tiempo, modo infinito y personalizado.",
    stack: ["TypeScript", "Canvas"], // TODO: confirmar
    note: null,
    accent: "#facc15",
    home: 'grid',
  },

  // ── Only on /proyectos ──────────────────────────────────────
  {
    name: "Maroma Beach",
    kind: "Club de playa",
    year: "2021",
    img: "/img/projects/maroma-beach.webp",
    url: "https://maromabeach.com/es/",
    description:
      "Sitio multiidioma para club de playa en la Riviera Maya. Buscador de disponibilidad con fechas y ocupantes, catálogo de experiencias y galería multimedia optimizada.",
    metric: "Reservas con buscador en vivo",
    stack: ["React", "Laravel"],
    accent: "#10b981",
    home: false,
  },

  // ── Only on /proyectos · private systems (code tile) ────────
  // Clients stay anonymous here — described by industry only.
  {
    name: "Plataforma multi-rol",
    kind: "Operadora turística",
    code: {
      file: "app/Enums/Rol.php",
      lines: [
        "enum Rol: string {",
        "    case Dueno       = 'dueno';",
        "    case Direccion   = 'direccion';",
        "    case Contador    = 'contador';",
        "    case Diseno      = 'diseno';",
        "    case Marketing   = 'marketing';",
        "    case CallCenter  = 'call_center';",
        "    case Aeropuerto  = 'vendedor_aeropuerto';",
        "}",
      ],
    },
    url: null,
    description: "Dashboards de usuarios y administradores para todos los niveles de una operadora turística: dueño, dirección, contabilidad, diseño, marketing, call center y vendedores en aeropuertos, cada uno con su panel y permisos.",
    stack: ["Laravel", "Livewire", "MySQL"], // TODO: confirmar
    accent: "#38bdf8",
    home: false,
  },
  {
    name: "Apps de escritorio Ancona",
    kind: "Logística y almacén · Ancona Autopartes",
    code: {
      file: "src/apps.config.ts",
      lines: [
        "export const apps = {",
        "  logistica:   { rutas: true,  inventario: true },",
        "  repartidores:{ entregas: true, firma: true },",
        "  almacen:     { surtido: true, escaneo: true },",
        "} satisfies Record<Area, Permisos>;",
        "",
        "createDesktopApp(apps[area]);",
      ],
    },
    url: null,
    description: "Suite de aplicaciones de escritorio para las áreas operativas de Ancona Autopartes: logística, repartidores y almacén, cada una con sus flujos y permisos.",
    stack: ["Electron", "TypeScript"], // TODO: confirmar
    accent: "#f87171",
    home: false,
  },
  {
    name: "CRM de clientes",
    kind: "Distribuidora de impresión industrial",
    code: {
      file: "app/Models/Cliente.php",
      lines: [
        "class Cliente extends Model {",
        "    public function equipos() {",
        "        return $this->hasMany(Equipo::class);",
        "    }",
        "    public function scopePolizaPorVencer($q) {",
        "        return $q->whereHas('contratos',",
        "            fn ($c) => $c->vencenEn(30));",
        "    }",
        "}",
      ],
    },
    url: null,
    description: "Dashboard administrativo para manejo de clientes de una distribuidora de impresoras industriales: equipos instalados, contratos de servicio y seguimiento comercial.",
    stack: ["Laravel", "MySQL"], // TODO: confirmar
    accent: "#e879f9",
    home: false,
  },
  {
    name: "Dexabyte",
    kind: "Sitio corporativo · Tecnología",
    code: {
      file: "src/pages/index.astro",
      lines: [
        "---",
        "import Layout from '../layouts/Base.astro';",
        "const servicios = await getCollection('servicios');",
        "---",
        "<Layout title=\"Dexabyte\">",
        "  <Hero />",
        "  <Servicios items={servicios} />",
        "</Layout>",
      ],
    },
    status: "Sitio fuera de línea",
    url: null,
    description: "Sitio corporativo para empresa de tecnología: presentación de servicios, casos y contacto.",
    stack: ["Astro.js"], // TODO: confirmar
    accent: "#818cf8",
    home: false,
  },
];
