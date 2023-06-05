import { IProject } from "@/interfaces";


export const projects:IProject[] = [
    {
        title: "Legado de Tlapa",
        subtitle: "Medio de comunicacion digital",
        slug:"legado-de-tlapa",
        type: "Sitio Web",
        summary: "Diseñé y Desarrollé el sitio web de noticias del medio de comunicación digital 'Legado de Tlapa', incluyendo un dashboard para administrar su contenido con roles de usuario. También implementé una API Rest del mismo para ser consumida por una Aplicación Móvil.",
        description: "Diseñé y Desarrollé el sitio web de noticias del medio de comunicación digital Legado de Tlapa, incluyendo un dashboard para administrar su contenido con roles de usuario ( editor y administrador ). Tanto el sitio web como el dashboard administrativo fueron desarrolladon con la metodologia movil first. También implementé una API Rest para ser consumida por una Aplicación Móvil.",
        image:"img/projects/legado-de-tlapa-pc-mobile.webp",
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
                name: "Next.js",
                icon: "nextjs-icon-circle.svg",
                styleClases: "border border-next-600"
            },
            {
                name: "Typescript",
                icon: "typescript-icon.svg",
                styleClases: "border border-typescript-600"
            },
            {
                name: "Node",
                icon: "nodejs-icon.svg",
                styleClases: "border border-node-600"
            },
            {
                name: "Mongo DB",
                icon: "mongodb-icon.svg",
                styleClases: "border border-mongo-600"
            },
            {
                name: "Tailwind",
                icon: "tailwind-icon.svg",
                styleClases: "border border-tailwind-600"
            },
            {
                name: "Emotion",
                icon: "emotion-icon.webp",
                styleClases: "border border-emotion-600"
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
        versions: [
            "Desktop",
            "Mobile"
        ],
        images: [
            {
                title: "Página de inicio",
                url  : "img/projects/legado/vista-01.webp"
            },
            {
                title: "Artículo completo",
                url  : "img/projects/legado/vista-02.webp"
            },
            {
                title: "Artículos por categorá",
                url  : "img/projects/legado/vista-03.webp"
            },
            {
                title: "videos",
                url  : "img/projects/legado/vista-04.webp"
            },
            {
                title: "Buscar artículo",
                url  : "img/projects/legado/vista-05.webp"
            },
            {
                title: "Iniciar seción",
                url  : "img/projects/legado/vista-06.webp"
            },
            {
                title: "Administrar articulos",
                url  : "img/projects/legado/vista-07.webp"
            },
            {
                title: "Publicar un nuevo articulo",
                url  : "img/projects/legado/vista-08.webp"
            },
            {
                title: "Administrar imagenes",
                url  : "img/projects/legado/vista-09.webp"
            },
            {
                title: "Administrar categorias",
                url  : "img/projects/legado/vista-10.webp"
            },
        ]
    }
]