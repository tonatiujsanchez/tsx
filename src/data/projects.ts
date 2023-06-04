import { IProject } from "@/interfaces";


export const projects:IProject[] = [
    {
        title: "Legado de Tlapa",
        subtitle: "Medio de comunicacion digital",
        slug:"legado-de-tlapa",
        type: "Sitio Web",
        summary: "Diseñe y Desarrolle el sitio web de noticias del medio de comunicacion 'Legado de Tlapa' con un dashboard administrativo para administrar su contenido con roles de usuario. Tambien implementé una API Rest del mismo para ser consumida por una Aplicación movil.",
        image:"img/projects/legado-de-tlapa-pc.webp",
        imagePreview: "img/projects/legado-de-tlapa-pc.webp",
        bgImage: "img/projects/legado-de-tlapa-bg-yellow.webp",
        banner: "img/projects/legado-de-tlapa-banner.webp",
        technologies: [
            {
                name: "React",
                icon: "react-icon.svg",
                styleClases: "border border-react-600 text-react-600"
            },
            {
                name: "NEXT.JS",
                icon: "nextjs-icon-circle.svg",
                styleClases: "border border-next-600"
            },
            {
                name: "Node",
                icon: "nodejs-icon.svg",
                styleClases: "border border-node-600"
            },
            {
                name: "Typescript",
                icon: "typescript-icon.svg",
                styleClases: "border border-typescript-600"
            },
            {
                name: "Tailwind",
                icon: "tailwind-icon.svg",
                styleClases: "border border-tailwind-600"
            },
        ],
        client: "Legado de Tlapa",
        position: "right",
        links: [
            {
                title: "Ver proyecto",
                type: "preview",
                url: "https://www.legadodetlapa.mx"
            },
            {
                title: "Ver repositorio",
                type: "repository",
                url: "https://github.com/jmx-desarrolloweb/legado-de-tlapa"
            }
        ],
        images: []
    }
]