export type ProjectItem = {
  slug: string
  code: string
  title: string
  image: string
  summary: string
  description: string
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
