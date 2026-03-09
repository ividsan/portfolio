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
  detailMedia?: string
  detailBodySecondary?: string
  detailMediaSecondary?: string
  detailMediaStack?: string[]
  detailBodyTertiary?: string
  detailMediaTertiary?: string
  detailLogo?: string
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
    title: "LQNM",
    image: "/imagenes/guapa.png",
    summary: "Variacion del sistema visual con nuevas reglas de jerarquia.",
    description:
      "Segunda iteracion del proyecto para probar consistencia entre piezas y adaptar el lenguaje grafico a distintos formatos de salida.",
  },
  {
    slug: "lqnm-03",
    code: "03",
    title: "LQNM",
    image: "/imagenes/guapa.png",
    summary: "Desarrollo de look and feel para soporte digital e impreso.",
    description:
      "Trabajo de direccion de arte y maquetacion con especial cuidado en ritmo visual, reticula y relacion entre imagen y texto.",
  },
  {
    slug: "lqnm-04",
    code: "04",
    title: "LQNM",
    image: "/imagenes/guapa.png",
    summary: "Serie fotografica aplicada a un sistema grafico modular.",
    description:
      "Investigacion de variaciones cromaticas, recortes y escalas para mantener una identidad reconocible en todos los soportes.",
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
