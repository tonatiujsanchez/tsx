import styled from "@emotion/styled"
import Image from "next/image"



export const AboutMe = () => {
    return (
        <section id="about" className="bg-white">
            <SectionAbout className="py-10 sm:py-28 bg-white">
                <div className="container px-5 flex flex-col md:flex-row md:items-center gap-10 lg:gap-24">
                    <div className="md:w-[40%] p-10 relative">
                        <figure className="relative border shadow-lg rounded overflow-hidden bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-slate-50 via-sky-50 to-slate-100">
                            <Image
                                priority
                                width={300}
                                height={450}
                                quality={80}
                                src={'/img/aboutme.webp'}
                                alt={'Foto de Tontiuj Sánchez'}
                                title={'Tontiuj Sánchez'}
                                className='cover h-full w-full'
                            />
                        </figure>
                        <figure className="absolute bottom-0 right-0 border-8 border-white/80 rounded">
                            <Image
                                priority
                                width={100}
                                height={200}
                                quality={80}
                                src={'/img/ton-tkd.webp'}
                                alt={'Foto de Tontiuj Sánchez'}
                                title={'Tontiuj Sánchez'}
                                className='cover h-full w-full'
                            />
                        </figure>
                    </div>
                    <div className="md:w-[60%]">
                        <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-5 md:mb-10 uppercase">Sobre mi</h2>
                        <div className="lg:text-lg">
                            <p className="mb-5">Mi nombre es <strong>Tonatiuj Sánchez Jiménez y soy Desarrollador Web FullStack</strong> con un fuerte compromiso con la colaboración y solución de problemas de software, cumpliendo con los <strong>altos estándares</strong> de <strong>experiencia de usuario, usabilidad y rendimiento</strong>. He tenido la oportunidad de utilizar diferentes programas de diseño y lenguajes de programación para satisfacer con éxito las necesidades de diferentes tipos de clientes.</p>
                            <p className="mb-5">Además de mi experiencia en el desarrollo web, también disfruto <strong>explorar nuevas tecnologías y aprender constantemente</strong>.</p>
                            <p>Fuera del ámbito profesional, soy un entusiasta del Taekwondo, una disciplina que me ha enseñado valores fundamentales como <strong>la perseverancia, la disciplina y el respeto</strong>. A través de esta práctica, he desarrollado habilidades de concentración y trabajo en equipo que aplico en mi carrera como desarrollador.</p>
                        </div>
                        <ul className="flex items-center gap-4 mt-8">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/tonatiujsanchez"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="inline-block hover:scale-110 transition-all"
                                >
                                    <i className='bx bxl-linkedin-square text-[1.8rem]'></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/tonatiujsanchez"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="inline-block hover:scale-110 transition-all"
                                >
                                    <i className='bx bxl-github text-[1.8rem]' ></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/tonatiujsanchez"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="inline-block hover:scale-110 transition-all"
                                >
                                    <i className='bx bxl-twitter text-[1.8rem]'></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/tonatiujsanchez"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="inline-block hover:scale-110 transition-all"
                                >
                                    <i className='bx bxl-instagram text-[1.8rem]'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </SectionAbout>
        </section>
    )
}


const SectionAbout = styled.div`
    
    background: radial-gradient(45.48% 30.48% at 90.38% 74.52%, #d5e9f1 0%, rgba(255, 255, 255, 0) 100%);
    
    @media (min-width: 640px) {
        background: radial-gradient(32.48% 53.48% at 90.38% 60.52%, #ddedf3 0%, rgba(255, 255, 255, 0) 100%);

    }
`