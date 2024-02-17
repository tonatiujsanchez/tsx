
import { ProjectLeft, ProjectRight } from "../projects"

export const Projects = () => {
    return (
        <section id="projects" className="py-10 sm:py-24">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl uppercase mb-1">Proyectos</h2>
            <p className="text-center uppercase md:text-xl font-medium mb-10 md:mb-20">recientes</p>
            <ProjectLeft
                type="Sitio web"
                title="Legado de Tlapa"
                description="Diseñe y Desarrolle el sitio web de noticias del medio de comunicación &apos;Legado de Tlapa&apos; con un dashboard administrativo para administrar su contenido con roles de usuario. También implementé una API Rest del mismo para ser consumida por una Aplicación movil."
                bgImage="/img/projects/legado-de-tlapa-bg-yellow.webp"
                image="/img/projects/legado-de-tlapa-pc.webp"
                slug="legado-de-tlapa"
            />
            <ProjectRight
                type="Sitio web"
                title="Contextos Guerrero"
                description="Diseñe y Desarrolle el sitio web de noticias del medio de comunicación &apos;Contextos Guerrero&apos; con un dashboard administrativo con roles de usuario para administrar su estructura y contenido."
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
                title="Admin Sites"
                description="Diseñe y Desarrolle un dashboard administrativo con roles de usuario para administrar la estructura y contenido de sitios web informativos."
                bgImage="/img/projects/admin-sites-bg.webp"
                image="/img/projects/admin-sites-pc.webp"
                slug="admin-sites"
            />
            <ProjectLeft
                type="Aplicación web"
                title="DevManager"
                description="DevManager es un proyecto personal que constantemente mejoro y añado funcionalidades para gestionar proyectos colaborativos con funcionalidades en tiempo real, mismo que utilizo en mi día a día."
                bgImage="/img/projects/devmanager-bg.webp"
                image="/img/projects/devmanager-pc.webp"
                slug="devmanager"
            />

        </section>
    )
}
