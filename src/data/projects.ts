import { projectPositions } from "@/constants";
import { IProject, IProjectPositions } from "@/interfaces";


export const projects:IProject[] = [
    {
        title: "Legado de Tlapa",
        subtitle: "Medio de comunicación digital",
        slug:"legado-de-tlapa",
        type: "Sitio Web",
        summary: "<p>Diseñé y Desarrollé el sitio web de noticias del medio de comunicación digital 'Legado de Tlapa', incluyendo un dashboard para administrar su contenido con roles de usuario. También implementé una API Rest del mismo para ser consumida por una Aplicación Móvil.</p>",
        description: "<p>Diseñé y Desarrollé el sitio web de noticias del medio de comunicación digital Legado de Tlapa, incluyendo un dashboard para administrar su contenido con roles de usuario ( editor y administrador ). Tanto el sitio web como el dashboard administrativo fueron desarrollados con la metodologia Movil First. También implementé una API Rest para ser consumida por una Aplicación Móvil.</p>",
        image:"/img/projects/legado-de-tlapa-pc-mobile.webp",
        imagePreview: "/img/projects/legado-de-tlapa-pc.webp",
        bgImage: "/img/projects/legado-de-tlapa-bg-yellow.webp",
        banner: "/img/projects/legado-de-tlapa-banner.webp",
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
        position: projectPositions.LEFT as IProjectPositions,
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
                url  : "/img/projects/legado-de-tlapa/vista-01.webp"
            },
            {
                title: "Artículo completo",
                url  : "/img/projects/legado-de-tlapa/vista-02.webp"
            },
            {
                title: "Artículos por categorá",
                url  : "/img/projects/legado-de-tlapa/vista-03.webp"
            },
            {
                title: "Artículos por etiqueta",
                url  : "/img/projects/legado-de-tlapa/vista-13.webp"
            },
            {
                title: "videos",
                url  : "/img/projects/legado-de-tlapa/vista-04.webp"
            },
            {
                title: "Buscar artículos",
                url  : "/img/projects/legado-de-tlapa/vista-05.webp"
            },
            {
                title: "Iniciar seción",
                url  : "/img/projects/legado-de-tlapa/vista-06.webp"
            },
            {
                title: "Administrar articulos",
                url  : "/img/projects/legado-de-tlapa/vista-07.webp"
            },
            {
                title: "Publicar un nuevo articulo",
                url  : "/img/projects/legado-de-tlapa/vista-08.webp"
            },
            {
                title: "Administrar imagenes",
                url  : "/img/projects/legado-de-tlapa/vista-09.webp"
            },
            {
                title: "Administrar categorias",
                url  : "/img/projects/legado-de-tlapa/vista-10.webp"
            },
            {
                title: "Administrar videos",
                url  : "/img/projects/legado-de-tlapa/vista-11.webp"
            },
            {
                title: "Administrar usuarios",
                url  : "/img/projects/legado-de-tlapa/vista-12.webp"
            },
        ],
        message: "Trabajar en este proyecto ha sido grandioso, tuve la oportunidad de desarrollarlo de principio a fin, desde el diseño de la interfaz y experiencia de usuario, el modelado de la base de datos, hasta su implementación. Una gran experiencia de muchos desafíos técnicos y de colaboración, lo que me permitió perfeccionar mis habilidades de trabajo en equipo, la resolución de problemas y la comunicación efectiva.",
        properties: {
            spaceBetween: 10,
            slidesPerView: 2,

            spaceBetweenLg: 10,
            slidesPerViewLg: 5
        }
    },
    {
        title: "Contextos Guerrero",
        subtitle: "Medio de Comunicación",
        slug: "contextos-guerrero",
        type: "Sitio Web",
        summary: "<p>Diseñe y Desarrolle el sitio web de noticias del medio de comunicacion Contextos Guerrero con un dashboard administrativo con roles de usuario para administrar su estructura y contenido.</p>",
        description: "<p>Diseñé y Desarrollé el sitio web de noticias del medio de comunicación digital Contextos Guerrero, incluyendo un dashboard con roles de usuario (editor y administrador),  para administrar la estructura, la navegación y el contenido, tanto el sitio web como el dashboard administrativo fueron desarrollados con la metodología Movil First.</p>",
        image: '/img/projects/contextos-guerrero-pc-mobile.webp',
        imagePreview: '/img/projects/contextos-guerrero-pc.webp',
        bgImage: '/img/projects/contextos-guerrero-bg.webp',
        banner: '/img/projects/contextos-guerrero-banner-red.webp',
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
        client: "Contextos Guerrero",
        position: projectPositions.RIGHT as IProjectPositions,
        links: [
            {
                title: "Ver proyecto",
                type: "preview",
                url: "https://contextosguerrero.vercel.app"
            },
            {
                title: "Ver repositorio",
                type: "repository",
                url: "https://github.com/jmx-desarrolloweb/contextos-guerrero"
            }
        ],
        versions: [
            "Desktop",
            "Mobile"
        ],
        images: [
            {
                title: "Página de inicio",
                url  : "/img/projects/contextos-guerrero/vista-01.webp"
            },
            {
                title: "Artículo completo",
                url  : "/img/projects/contextos-guerrero/vista-02.webp"
            },
            {
                title: "Artículos por categorá",
                url  : "/img/projects/contextos-guerrero/vista-03.webp"
            },
            {
                title: "Artículos por etiqueta",
                url  : "/img/projects/contextos-guerrero/vista-04.webp"
            },
            {
                title: "Buscar artículos",
                url  : "/img/projects/contextos-guerrero/vista-05.webp"
            },
            {
                title: "Iniciar seción",
                url  : "/img/projects/contextos-guerrero/vista-06.webp"
            },
            {
                title: "Administrar articulos",
                url  : "/img/projects/contextos-guerrero/vista-07.webp"
            },
            {
                title: "Publicar un nuevo articulo",
                url  : "/img/projects/contextos-guerrero/vista-08.webp"
            },
            {
                title: "Administrar imagenes",
                url  : "/img/projects/contextos-guerrero/vista-09.webp"
            },
            {
                title: "Administrar categorías",
                url  : "/img/projects/contextos-guerrero/vista-10.webp"
            },
            {
                title: "Administrar autores",
                url  : "/img/projects/contextos-guerrero/vista-11.webp"
            },
        ],
        message: "Contextos Guerrero es un prometedor medio de comunicación tradicional estatal que actualmente se encuentra en etapas finales para su lanzamiento. Formar parte del proceso de su desarrollo, asumiendo la responsabilidad de la construcción de su sitio web, fue una gran experiencia que me ha permitido expandir mis conocimientos en el desarrollo de plataformas digitales, fortaleciendo así mi capacidad para enfrentar nuevos desafíos en el futuro.",
        properties: {
            spaceBetween: 10,
            slidesPerView: 2,

            spaceBetweenLg: 10,
            slidesPerViewLg: 5
        }
    },
    {
        title: "Share Groups",
        subtitle: "Aplicación web para administrar páginas y grupos de Facebook",
        slug:"share-groups",
        type: "Aplicación Web",
        summary: "<p>Diseñe y Desarrolle una aplicación web para administrar páginas, perfiles y grupos de Facebook con el objetivo de compartir publicaciones de forma aleatoria.</p>",
        description: "<p>Diseñe y Desarrolle una aplicación web para administrar páginas, perfiles y grupos de Facebook con el objetivo de compartir publicaciones de dichas páginas de forma aleatoria. Este sistema fue desarrollado con la metodología Movil First.</p><p>Aunque actualmente este sistema solo es usado por los miembros de una agencia, durante su construcción fue pensado y diseñado para que en un futuro cualquier usuario o agencia pueda registrarse y administrar sus propias páginas y grupos de Facebook.</p>",
        image: "/img/projects/share-groups-pc-mobile.webp",
        imagePreview: "/img/projects/share-groups-pc.webp",
        bgImage: "/img/projects/share-groups-bg-blue.webp",
        banner: "/img/projects/share-groups-banner.webp",
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
        ],
        client: "JMX Agencia de publicidad y desarrollo web",
        position: projectPositions.LEFT as IProjectPositions,
        links: [
            {
                title: "Ver proyecto",
                type: "preview",
                url: "https://share-groups.vercel.app"
            },
            {
                title: "Ver repositorio",
                type: "repository",
                url: "https://github.com/jmx-desarrolloweb/share-groups"
            }
        ],
        versions: [
            "Desktop",
            "Mobile"
        ],
        images: [
            {
                title: "Iniciar sesión",
                url  : "/img/projects/share-groups/vista-01.webp"
            },
            {
                title: "Crear cuenta",
                url  : "/img/projects/share-groups/vista-02.webp"
            },
            {
                title: "Administrar categorías",
                url  : "/img/projects/share-groups/vista-03.webp"
            },
            {
                title: "Administrar páginas",
                url  : "/img/projects/share-groups/vista-04.webp"
            },
            {
                title: "Agregar nueva página",
                url  : "/img/projects/share-groups/vista-05.webp"
            },
            {
                title: "Asignar grupos a una página",
                url  : "/img/projects/share-groups/vista-06.webp"
            },
            {
                title: "Administrar grupos",
                url  : "/img/projects/share-groups/vista-07.webp"
            },
            {
                title: "Agregar nuevo grupo",
                url  : "/img/projects/share-groups/vista-08.webp"
            },
            {
                title: "Administrar secciones de grupos",
                url  : "/img/projects/share-groups/vista-09.webp"
            },
            {
                title: "Agregar nueva sección",
                url  : "/img/projects/share-groups/vista-10.webp"
            },
        ],
        message: "Trabajar en este proyecto fue muy ilustrativo y grato, ya que me permitió desarrollar mis habilidades de programación y diseño de interfaces. Me enorgullece mucho el resultado final y el impacto positivo que tuvo en los usuarios.",
        properties: {
            spaceBetween: 10,
            slidesPerView: 2,

            spaceBetweenLg: 20,
            slidesPerViewLg: 3
        }
    },
    {
        title: "Admin Sites",
        subtitle: "Dashboard administrativo para sitios web informativos con roles de usuarios",
        slug:"admin-sites",
        type:"Aplicación Web",
        summary: "<p>Diseñe y Desarrolle un dashboard administrativo con roles de usuario para administrar la estructura y contenido de sitios web informativos.</p>",
        description: "<p>Diseñé y desarrollé un completo dashboard administrativo con roles de usuario, destinado a la gestión eficiente de la estructura y el contenido de sitios web informativos.</p><p>El propósito principal de este proyecto es tener una solución versátil y ágil, lista para ser implementada en los sitios web de futuros clientes. Diseñado estratégicamente, este dashboard proporciona una sólida base que puede escalarse y adaptarse fácilmente a las necesidades específicas de cada cliente. Su flexibilidad y robustez garantizan una gestión efectiva del contenido y una experiencia fluida para los usuarios finales.</p>",
        image: "/img/projects/admin-sites-pc-mobile.webp",
        imagePreview: "/img/projects/admin-sites-pc.webp",
        bgImage: "/img/projects/admin-sites-bg.webp",
        banner: "/img/projects/admin-sites-banner.webp",
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
        client: "JMX Agencia de publicidad y desarrollo web",
        position: projectPositions.RIGHT as IProjectPositions,
        links: [
            {
                title: "Ver proyecto",
                type: "preview",
                url: "https://admin-news.vercel.app"
            },
            {
                title: "Ver repositorio",
                type: "repository",
                url: "https://github.com/tonatiujsanchez/admin-news"
            }
        ],
        versions: [
            "Desktop",
            "Mobile"
        ],
        images: [
            {
                title: "Iniciar Sesión",
                url  : "/img/projects/admin-sites/vista-01.webp"
            },
            {
                title: "Administrar artículos",
                url  : "/img/projects/admin-sites/vista-02.webp"
            },
            {
                title: "Administrar imágenes",
                url  : "/img/projects/admin-sites/vista-03.webp"
            },
            {
                title: "Administrar categorías",
                url  : "/img/projects/admin-sites/vista-04.webp"
            },
            {
                title: "Administrar autores",
                url  : "/img/projects/admin-sites/vista-05.webp"
            },
            {
                title: "Administrar etiquetas",
                url  : "/img/projects/admin-sites/vista-06.webp"
            },
            {
                title: "Administrar usuarios",
                url  : "/img/projects/admin-sites/vista-07.webp"
            },
            {
                title: "Nuevo artículo",
                url  : "/img/projects/admin-sites/vista-08.webp"
            },
            {
                title: "Añadir imágenes al artículo",
                url  : "/img/projects/admin-sites/vista-09.webp"
            },
            {
                title: "Añadir etiquetas al artículo",
                url  : "/img/projects/admin-sites/vista-10.webp"
            },
            {
                title: "Agregar autor",
                url  : "/img/projects/admin-sites/vista-11.webp"
            },
        ],
        message: "El proceso de desarrollo de este proyecto ha sido una experiencia enriquecedora y gratificante. A lo largo del camino, he fortalecido mis habilidades en diseño y desarrollo web, así como en la creación de soluciones prácticas, escalables y eficientes para las necesidades específicas de los clientes. Esta experiencia me ha permitido adquirir una comprensión más profunda de la gestión de proyectos, la arquitectura de software y la optimización de la experiencia del usuario.",
        properties: {
            spaceBetween: 10,
            slidesPerView: 2,

            spaceBetweenLg: 20,
            slidesPerViewLg: 3
        }
    },
    {
        title: "DevManager",
        subtitle: "Gestor de Proyectos Colaborativos en Tiempo Real",
        slug:"devmanager",
        type:"Aplicación Web",
        summary: "<p>DevManager es un proyecto personal en constante evolución, diseñado para la gestión eficiente de proyectos colaborativos con características en tiempo real. Lo utilizo diariamente y estoy comprometido con su mejora continua y la adición de nuevas funcionalidades.</p>",
        description: "<p>DevManager es un proyecto personal en constante evolución, diseñado para la gestión eficiente de proyectos colaborativos con características en tiempo real. Lo utilizo diariamente y estoy comprometido con su mejora continua y la adición de nuevas funcionalidades.</p>",
        image: "/img/projects/devmanager-pc-mobile.webp",
        imagePreview: "/img/projects/devmanager-pc.webp",
        bgImage: "/img/projects/devmanager-bg.webp",
        banner: "/img/projects/devmanager-banner.webp",
        technologies: [
            {
                name: "React",
                icon: "react-icon.svg",
                styleClases: "border border-react-600 text-react-600"
            },
            {
                name: "Node",
                icon: "nodejs-icon.svg",
                styleClases: "border border-node-600"
            },
            {
                name: "Express.js",
                icon: "expressjs-icon.svg",
                styleClases: "border border-gray-800"
            },
            {
                name: "Typescript",
                icon: "typescript-icon.svg",
                styleClases: "border border-typescript-600"
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
                name: "Redux Toolkit",
                icon: "redux-icon.svg",
                styleClases: "border border-redux-600"
            },
            {
                name: "Socket.IO",
                icon: "socket-io-icon.svg",
                styleClases: "border border-gray-950"
            },
        ],
        client: "Proyecto personal",
        position: projectPositions.LEFT as IProjectPositions,
        links: [
            {
                title: "Ver proyecto",
                type: "preview",
                url: "https://devmanager.xyz"
            },
            {
                title: "Ver repositorio - Frontend",
                type: "repository",
                url: "https://github.com/tonatiujsanchez/devmanager.xyz-frontend"
            },
            {
                title: "Ver repositorio - Backend",
                type: "repository",
                url: "https://github.com/tonatiujsanchez/devmanager.xyz-backend"
            }
        ],
        versions: [
            "Desktop",
            "Mobile"
        ],
        images: [
            {
                title: "Inicio",
                url  : "/img/projects/devmanager/vista-01.webp"
            },
            {
                title: "Crear Cuenta",
                url  : "/img/projects/devmanager/vista-02.webp"
            },
            {
                title: "Iniciar Sesión",
                url  : "/img/projects/devmanager/vista-03.webp"
            },
            {
                title: "Administrar proyectos",
                url  : "/img/projects/devmanager/vista-04.webp"
            },
            {
                title: "Buscar proyectos",
                url  : "/img/projects/devmanager/vista-05.webp"
            },
            {
                title: "Administrar tareas del proyecto",
                url  : "/img/projects/devmanager/vista-06.webp"
            },
            {
                title: "Agregar nueva tarea al proyecto",
                url  : "/img/projects/devmanager/vista-07.webp"
            },
            {
                title: "Añadir colaborador al proyecto",
                url  : "/img/projects/devmanager/vista-08.webp"
            },
            {
                title: "Colaboradores del proyecto",
                url  : "/img/projects/devmanager/vista-09.webp"
            },
            {
                title: "Recuperar contraseña",
                url  : "/img/projects/devmanager/vista-10.webp"
            },
        ],
        message: "Desarrollar este proyecto ha sido muy emocionante, ya que DevManager es un proyecto al que le he puesto mucho empeño y cariño, y constantemente añado mejoras, lo utilizo en mi día a día para mantener el rumbo a la hora de desarrollar mis proyectos personales y el de mis clientes. En el camino he aprendido mucho sobre los procesos de desarrollo de software y la colaboración de los mismos.",
        properties: {
            spaceBetween: 10,
            slidesPerView: 2,

            spaceBetweenLg: 20,
            slidesPerViewLg: 3
        }
    }
]

