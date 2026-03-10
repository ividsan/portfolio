export type ProjectItem = {
  slug: string
  code: string
  title: string
  image: string
  summary: string
  description: string
  detailHeading?: string
  detailSubheading?: string
  detailBody?: string
  detailHeroMedia?: string
  detailMedia?: string
  detailTextureMedia?: string
  detailTextureBody?: string
  detailBodySecondary?: string
  detailMediaSecondary?: string
  detailSecondaryMediaFirst?: boolean
  detailMediaStack?: string[]
  detailBodyTertiary?: string
  detailMediaTertiary?: string
  detailLogo?: string
  detailTypographyMedia?: string
  detailFinalMedia?: string
  detailPosterTitle?: string
  detailPosterImage?: string
  detailPosterCaptionTitle?: string
  detailPosterCaptionBody?: string
}

export const projects: ProjectItem[] = [
  {
    slug: "lqnm-01",
    code: "01",
    title: "LQNM",
    image: "/imagenes/guapa.png",
    summary: "Exploracion visual editorial con foco en retrato y composicion.",
    description:
      "Proyecto centrado en construir una narrativa visual limpia, con decisiones tipograficas y de encuadre orientadas a identidad de marca.",
    detailHeading: "Visual Identity",
    detailSubheading: "Social Awareness Campaign",
    detailHeroMedia: "/imagenes/projects/LQNM/gif%20motion%20graphics.gif",
    detailBody:
      "\"Lo que nos mueve\" is a cross-disciplinary project from the first semester of the second year of the Design degree. It integrates the subjects of Communication Theory, Illustration, Typography, and Audiovisual Media. This group project was developed alongside Mar Albiol Marti, Alba Cardona Tudela, Sandra Perez Timoneda, Amanda Salto Mansilla, and Elena Pintado Vozmediano.",
    detailMedia: "/imagenes/projects/LQNM/cartel%20gif.gif",
    detailBodySecondary:
      "We live in a society where individualism has diluted the sense of community. \"Lo que nos mueve\" is a cross-disciplinary project born to bridge the intergenerational gap. Through visual horizontality, we seek to connect youth and seniors through the only thing that knows no age: shared passions.",
    detailMediaSecondary: "/imagenes/projects/LQNM/montaje.gif",
    detailMediaStack: [
      "/imagenes/projects/LQNM/tipograf%C3%ADa.png",
      "/imagenes/projects/LQNM/Sin-t%C3%ADtulo-1.gif",
      "/imagenes/projects/LQNM/gif%20mupi.gif",
    ],
    detailBodyTertiary:
      "This identity merges editorial illustration with an urban branding aesthetic to break stereotypes and emphasize human connection. Through organic shapes and fluid lines, the project achieves an inclusive visual language that places youth and seniors on equal footing, prioritizing shared passions over age. All this is articulated through a vibrant palette and contemporary visual codes, transforming intergenerational interaction into a fresh and modern experience.",
    detailMediaTertiary: "/imagenes/projects/LQNM/gif%20tr%C3%ADptico.gif",
    detailLogo: "/imagenes/projects/LQNM/lqnm%20logo.png",
  },
  {
    slug: "lqnm-02",
    code: "02",
    title: "CREFAD 26",
    image: "/imagenes/guapa.png",
    summary: "Variacion del sistema visual con nuevas reglas de jerarquia.",
    description:
      "Segunda iteracion del proyecto para probar consistencia entre piezas y adaptar el lenguaje grafico a distintos formatos de salida.",
    detailHeading: "Visual Identity",
    detailSubheading: "Poster design",
    detailHeroMedia: "/imagenes/projects/crefad/logo.png",
    detailBody:
      "CREFAD is a project developed for the Typography course,\nfocusing on the visual identity and poster design for the digital\nfabrication conference held at the UPV. This was a collaborative\nproject created alongside Mar Albiol Martí and Rocío Torres García.",
    detailTextureMedia: "/imagenes/projects/crefad/texturas.gif",
    detailTextureBody:
      "Digital fabrication is often perceived as a cold, intangible process. For the CREFAD conference, we wanted to challenge this notion by highlighting its physical soul. Our concept explores the intersection between technology and tradition, merging 3D printing textures with manual stamping techniques. This project serves as a visual bridge, proving that innovation and craftsmanship are intrinsically linked through the language of materials.",
    detailMediaSecondary: "/imagenes/projects/crefad/carteles.png",
    detailSecondaryMediaFirst: true,
    detailBodySecondary:
      "We used 3D-printed textures as physical stamps, creating a visual dialogue between the precision of the machine and the organic imperfection of manual ink. A bold and structural logo designed to reflect the architectural nature of digital manufacturing, balanced with the warmth of traditional printmaking.",
    detailLogo: "/imagenes/projects/crefad/logo.png",
    detailTypographyMedia: "/imagenes/projects/crefad/tipograf%C3%ADa.gif",
    detailFinalMedia: "/imagenes/projects/crefad/Dise%C3%B1o%20sin%20t%C3%ADtulo.gif",
  },
  {
    slug: "siete",
    code: "03",
    title: "Siete",
    image: "/imagenes/projects/siete/Mockup1.jpg",
    summary: "Serie de carteles inspirada en la avaricia de los Seven Deadly Sins.",
    description:
      "Exploracion visual para un poster teatral centrado en \"Greed\". Tres lenguajes graficos se confrontan para mostrar distintas caras de la avaricia.",
    detailHeading: "Poster design series",
    detailSubheading: "Seven Deadly Sins — Greed",
    detailHeroMedia: "/imagenes/projects/siete/tot.jpg",
    detailBody:
      "Siete is a design project focused on the visual exploration of the Seven Deadly Sins. This chapter tackles \"Greed\" through three disruptive graphic languages conceived for a theatrical play poster. A collaborative work made with Alba Cardona Tudela.",
    detailMedia: "/imagenes/projects/siete/documento-sin-titulo.jpg",
    detailBodySecondary:
      "Each composition exaggerates accumulation: dense typographic grids, fluorescent overlays, and overlapping textures evoke the excess that defines greed. The system works across print mockups and motion snippets, pushing the same idea into different materialities.",
    detailMediaSecondary: "/imagenes/projects/siete/Mockup3.jpg",
    detailMediaStack: [
      "/imagenes/projects/siete/gifescaneado.gif",
      "/imagenes/projects/siete/gifplano.gif",
    ],
    detailBodyTertiary:
      "Motion tests translate the poster into a breathing surface where letters pulse and compress, reinforcing the feeling of insatiable desire. The result is a loud, unapologetic visual statement that refuses to feel comfortable.",
    detailMediaTertiary: "/imagenes/projects/siete/diseno-sin-titulo-1.gif",
    detailPosterTitle: "siete",
    detailPosterImage: "/imagenes/projects/siete/diseno-sin-titulo-1.gif",
    detailPosterCaptionTitle: "PROPOSAL 01: SCAN AND POTOGRAPHY",
    detailPosterCaptionBody:
      "Using photography and scanning techniques to capture a distorted reality. The human element becomes a resource to represent the obsession and hoarding nature of greed.",
  },
  {
    slug: "revista-01",
    code: "04",
    title: "Revista — Artículo 1",
    image: "/imagenes/projects/revista/1.jpg",
    summary: "Maquetación editorial centrada en salud mental y bienestar creativo.",
    description:
      "Diseño de una doble página editorial que equilibra densidad textual con claridad visual, enfocada en salud mental dentro de la industria creativa.",
    detailHeading: "Editorial Design & Typography",
    detailSubheading: "Salud mental en diseñadores",
    detailBody:
      "\"The Mindful Designer\" is an editorial project focused on the intersection of mental health and the creative industry. The challenge was to create a layout that balanced the density of a theoretical article with a visual language that reflects serenity and professional rigor. Using a structured grid and a minimalist color palette, the design prioritizes readability and emotional well-being, mirroring the very topic the article discusses.",
    detailHeroMedia: "/imagenes/projects/revista/1.jpg",
  },
  {
    slug: "lqnm-05",
    code: "05",
    title: "LQNM",
    image: "/imagenes/guapa.png",
    summary: "Propuesta final de narrativa visual para portfolio.",
    description:
      "Sintesis de aprendizajes del proyecto en una pieza final: estructura clara, composicion estable y lectura directa del concepto.",
  },
  {
    slug: "lqnm-06",
    code: "06",
    title: "LQNM",
    image: "/imagenes/guapa.png",
    summary: "Cierre del sistema con documentacion de criterios.",
    description:
      "Documento de continuidad con reglas de uso, ejemplos de aplicacion y decisiones clave para evolucionar el proyecto.",
  },
]

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug)
