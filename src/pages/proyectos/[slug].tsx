import { NextPage, GetServerSideProps } from "next"
import NextLink from 'next/link'

import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "swiper/css/pagination";


import { projects } from "@/data"
import { IProject } from "@/interfaces"
import styled from "@emotion/styled";
import { Footer } from "@/components/shared";

interface Props {
    project: IProject
}

const ProyectPage: NextPage<Props> = ({ project }) => {


    return (
        <>
            <header className="h-[60vh] sm:h-[50vh] lg:h-[85vh] bg-gradient-to-b from-black/40 to-black/90 relative flex justify-center items-center">
                <Image
                    priority
                    width={1200}
                    height={1000}
                    quality={100}
                    src={`${process.env.NEXT_PUBLIC_HOST_NAME}/${project.banner}`}
                    alt={project.title}
                    title={project.title}
                    className="h-full w-full object-cover absolute mix-blend-overlay"
                />
                <div className="text-white z-20 text-center">
                    <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl mb-2" style={{ textShadow: '1px 2px 2px rgba(0,0,0, 0.5)' }}>{project.title}</h1>
                    <p className="font-bold text-xl sm:text-2xl" style={{ textShadow: '1px 1px 2px rgba(0,0,0, 0.5)' }}>{project.subtitle}</p>
                </div>
                <NextLink
                    href={'/#projects'}
                    className="text-white absolute top-10 left-10 text-xl flex items-center gap-2"
                >
                    <i className='bx bx-arrow-back'></i> Regresar
                </NextLink>
            </header>

            <main>
                <section className="bg-white">
                    <div className="container p-8 sm:pb-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 lg:gap-28 my-10 sm:px-10 lg:px-5">
                        <figure className="max-w-[500px] lg:max-w-[600px] mx-auto">
                            <Image
                                priority
                                width={720}
                                height={600}
                                quality={80}
                                src={`${process.env.NEXT_PUBLIC_HOST_NAME}/${project.image}`}
                                alt={project.title}
                                title={project.title}
                                className='contain h-full w-full'
                            />
                        </figure>
                        <div className="flex flex-col items-center sm:items-start lg:mb-16">
                            <div>
                                <p className="text-base sm:text-xl mb-4 font-medium">{project.type}</p>
                                <h2 className="font-bold text-xl sm:text-[2rem] mb-5">{project.title}</h2>
                                <p className="mb-3 sm:mb-5 md:text-lg">{project.description}</p>
                            </div>
                            <div className="mt-5">
                                <h3 className="font-semibold mb-5 uppercase">Tecnologías</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        project.technologies.map( tech => (
                                            <div 
                                                key={ tech.name }
                                                className={`px-3 py-1 rounded-2xl text-sm flex items-center gap-2 font-medium ${ tech.styleClases }`}
                                            >
                                                <figure className="w-5 h-5 flex items-center">
                                                    <Image
                                                        priority
                                                        width={50}
                                                        height={50}
                                                        quality={80}
                                                        src={`/icons/${ tech.icon }`}
                                                        alt={tech.name}
                                                        title={tech.name}
                                                        className='cover w-11'
                                                    />
                                                </figure>
                                                { tech.name }
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-5 w-full mt-12">
                                <div>
                                    <h3 className="font-semibold mb-5 uppercase">Versiones</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {
                                            project.versions.map(version => (
                                                <p
                                                    key={version}
                                                    className="px-5 py-1 rounded-2xl bg-slate-50 border border-slate-200"
                                                >
                                                    {  version }
                                                </p>
                                            ))
                                        }                                
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-5 uppercase">Enlaces</h3>
                                    <div className=" flex flex-col gap-5">
                                        {
                                            project.links.map( link => (
                                                <a key={link.url} 
                                                    href={ link.url }
                                                    rel="noopener noreferrer"
                                                    target="_blank"
                                                    className="hover:text-blue-700 font-medium flex items-center gap-2"
                                                >
                                                    {
                                                        link.type === 'repository'
                                                        ?<i className='bx bxl-github text-2xl'></i> 
                                                        :<i className='bx bx-link-external text-2xl' ></i>
                                                    }
                                                    { link.title }
                                                </a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SliderSection className="py-[4rem] px-5 sm:px-10">
                    <h2 className="font-extrabold text-xl sm:text-[2rem] text-center lg:mb-5">Algunas vistas destacadas</h2>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={10}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 3,
                            },
                            1024: {
                              slidesPerView: 5,
                            },
                        }}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        modules={[FreeMode, Pagination, Autoplay]}
                    >
                        {
                            project.images.map( img => (
                                <SwiperSlide key={img.title} className="py-10">
                                    <figure className="relative flex flex-col justify-center gap-4">
                                        <Image
                                            priority
                                            width={750}
                                            height={750}
                                            quality={100}
                                            src={`${process.env.NEXT_PUBLIC_HOST_NAME}/${img.url}`}
                                            alt={img.title}
                                            title={img.title}
                                            className="block h-full w-full"
                                        />
                                        <figcaption className="font-medium text-base text-center">
                                            { img.title }
                                        </figcaption>
                                    </figure>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </SliderSection>
            </main>
            <section className="text-center bg-white px-10 py-16 sm:py-24 lg:py-32">
                <div className="max-w-[650px] flex flex-col items-center justify-center gap-5 mx-auto">
                    <h2 className="font-bold text-xl sm:text-[2rem]">Otra gran logro</h2>
                    <p className="sm:mb-5 md:text-lg">Trabajar en este proyecto ha sido grandioso, tuve la oportunidad de desarrollarlo de principio a fin, desde el diseño de la interfaz y experiencia de usuario, el modelado de la base de datos, hasta su implementación.</p>
                    <NextLink
                        href={'/#projects'}
                        className="text-xl flex w-36 items-center gap-1 hover:text-black"
                    >
                        <i className='bx bx-arrow-back'></i> Regresar
                    </NextLink>
                </div>
            </section>
            <footer className="border-t py-4 bg-white">
                <p className="text-center">
                    <a href="https://twitter.com/tonatiujsanchez"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="block sm:inline hover:text-blue-700"
                    >
                            @tonatiujsanchez 
                    </a>
                    &nbsp; © 2023 Todos los derechos reservados 
                </p>
            </footer>
        </>
    )
}

const SliderSection =  styled.section`

`

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    const { slug } = query

    if (!slug) {
        return { notFound: true }
    }

    const project = projects.find(project => project.slug === slug)

    if (!project) {
        return { notFound: true }
    }

    return {
        props: {
            project
        }
    }
}



export default ProyectPage