import { ProjectLeft, ProjectRight } from "@/components/projects"
import { projects } from "@/data"

export const Projects = () => {
    return (
        <section id="projects" className="py-10 sm:py-24">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl uppercase mb-1">Proyectos</h2>
            <p className="text-center uppercase md:text-xl font-medium mb-10 md:mb-20">recientes</p>
            {
                projects.map( project => (
                    project.position === 'right' ?
                    (
                        <ProjectRight
                            key={ project.slug }
                            type={ project.type }
                            title={ project.title }
                            description={ project.summary }
                            bgImage={ project.bgImage }
                            image={ project.imagePreview }
                            slug={ project.slug }
                        />
                    ):(
                        <ProjectLeft
                            key={ project.slug }
                            type={ project.type }
                            title={ project.title }
                            description={ project.summary }
                            bgImage={ project.bgImage }
                            image={ project.imagePreview }
                            slug={ project.slug }
                        />
                    )   
                ))
            }
        </section>
    )
}
