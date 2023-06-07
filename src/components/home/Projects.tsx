
import { ProjectLeft, ProjectRight } from "../projects"

export const Projects = () => {
    return (
        <section id="projects" className="py-10 sm:py-24">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl uppercase mb-1">Proyectos</h2>
            <p className="text-center uppercase md:text-xl font-medium mb-10 md:mb-20">recientes</p>
            <ProjectLeft
                type="Sitio web"
                title="Legado de Tlapa"
                description="Diseñe y Desarrolle el sitio web de noticias del medio de comunicacion &apos;Legado de Tlapa&apos; con un dashboard administrativo para administrar su contenido con roles de usuario. Tambien implementé una API Rest del mismo para ser consumida por una Aplicación movil."
                bgImage="/img/projects/legado-de-tlapa-bg-yellow.webp"
                image="/img/projects/legado-de-tlapa-pc.webp"
                slug="legado-de-tlapa"
            />
            <ProjectRight
                type="Sitio web"
                title="Contextos Guerrero"
                description="Diseñe y Desarrolle el sitio web de noticias del medio de comunicacion &apos;Contextos Guerrero&apos; con un dashboard administrativo con roles de usuario para administrar su estructura y contenido."
                bgImage="/img/projects/contextos-guerrero-bg.webp"
                image="/img/projects/contextos-guerrero-pc.webp"
                slug="contextos-guerrero"
            />
            <ProjectLeft
                type="Aplicación web"
                title="Share Groups"
                description="Diseñe y Desarrolle una aplicación web para administrar páginas, perfiles y grupos de Facebook con el objetivo de compartir publicaciones de forma aleatoria."
                bgImage="/img/projects/share-groups-bg-blue.webp"
                image="/img/projects/share-groups-pc.webp"
                slug="share-groups"
            />
            <ProjectRight
                type="Aplicación web"
                title="Admin News"
                description="Diseñe y Desarrolle un dashboard administrativo con roles de usuario para administrar la estructura y contenido de sitios web informativos."
                bgImage="/img/projects/admin-news-bg.webp"
                image="/img/projects/admin-news-pc.webp"
                slug="admin-news"
            />
            <ProjectLeft
                type="Ecommerce"
                title="Teslo Shop"
                description="Desarrolle una tienda de ropa en linea, producto de haber concluido en el curso 'Next.js: El framework de React para producción'"
                bgImage="/img/projects/teslo-shop-bg.webp"
                image="/img/projects/teslo-shop-pc.webp"
                slug="teslo-shop"
            />

        </section>
    )
}
