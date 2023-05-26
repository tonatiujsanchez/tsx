import styled from "@emotion/styled"
import Image from "next/image"

import { ProjectLeft } from "../projects"

export const Projects = () => {
    return (
        <section id="projects" className="py-10 sm:py-24">
            <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-10 md:mb-20 uppercase">Proyectos</h2>
            <ProjectLeft
                type="Sitio web"
                title="Legado de Tlapa"
                description="Diseñe y Desarrolle el sitio web de noticias del medio de comunicacion &apos;Legado de Tlapa&apos; con un dashboard administrativo para administrar su contenido con roles de usuario. Tambien implementé una API Rest del mismo para ser consumida por una Aplicación movil."
                bgImage="/img/projects/legado-de-tlapa-bg-yellow.webp"
                image="/img/projects/legado-de-tlapa-pc.webp"
                slug="/legado-de-tlapa"
            />
            {/* <article className="p-5 sm:p-0 sm:grid sm:grid-cols-2 sm:items-center gap-10 lg:gap-20 my-10">
                <div className="relative h-[25rem] sm:h-[28rem] lg:h-[40rem] mb-5">
                    <figure className="h-full w-[65%] lg:w-[75%]">
                        <Image
                            priority
                            width={720}
                            height={600}
                            quality={80}
                            src={'/img/projects/legado-de-tlapa-bg-yellow.webp'}
                            alt={'Legado de Tlapa'}
                            title={'Legado de Tlapa'}
                            className='cover h-full w-full'
                        />
                    </figure>
                    <figure className="absolute h-[32rem] lg:h-[28rem] top-[50%] -translate-y-[50%] -right-5 sm:pl-10">
                        <Image
                            priority
                            width={720}
                            height={600}
                            quality={80}
                            src={'/img/projects/legado-de-tlapa-pc.webp'}
                            alt={'Legado de Tlapa'}
                            title={'Legado de Tlapa'}
                            className='contain h-full w-full'
                        />
                    </figure>
                </div>
                <div className="max-w-[30rem] flex flex-col items-center sm:items-start lg:mb-16">
                    <p className="text-base sm:text-xl mb-2">Sitio web</p>
                    <h3 className="font-bold text-xl sm:text-[2rem] text-center sm:text-left mb-3">Legado de Tlapa</h3>
                    <p className="text-center sm:text-left mb-3 sm:mb-5 md:text-lg">Diseñe y Desarrolle el sitio web de noticias del medio de comunicacion &apos;Legado de Tlapa&apos; con un dashboard administrativo para administrar su contenido con roles de usuario. Tambien implementé una API Rest del mismo para ser consumida por una Aplicación movil.</p>
                    <LinkProject href="#projects" className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Ver detalles</span>
                    </LinkProject>
                </div>
            </article> */}
            <article className="p-5 sm:p-0 sm:grid sm:grid-cols-2 sm:items-center gap-10 lg:gap-20 my-10">
                <div className="relative h-[25rem] sm:h-[28rem] lg:h-[40rem] mb-5 order-1">
                    <figure className="h-full w-[65%] lg:w-[75%] ml-auto">
                        <Image
                            priority
                            width={720}
                            height={600}
                            quality={80}
                            src={'/img/projects/contextos-guerrero-bg.webp'}
                            alt={'Contextos Guerrero'}
                            title={'Contextos Guerrero'}
                            className='cover h-full w-full'
                        />
                    </figure>
                    <figure className="absolute h-[32rem] lg:h-[28rem] top-[50%] -translate-y-[50%] -left-5 sm:pr-10">
                        <Image
                            priority
                            width={720}
                            height={600}
                            quality={80}
                            src={'/img/projects/contextos-guerrero-pc.webp'}
                            alt={'Contextos Guerrero'}
                            title={'Contextos Guerrero'}
                            className='contain h-full w-full'
                        />
                    </figure>
                </div>
                <div className="max-w-[32rem] flex flex-col items-center sm:items-start lg:mb-16 ml-auto sm:pl-7">
                    <p className="text-base sm:text-xl mb-2">Sitio web</p>
                    <h3 className="font-bold text-xl sm:text-[2rem] text-center sm:text-left mb-3">Contextos Guerrero</h3>
                    <p className="text-center sm:text-left mb-3 sm:mb-5 md:text-lg">Diseñe y Desarrolle el sitio web de noticias del medio de comunicacion &apos;Contextos Guerrero&apos; con un dashboard administrativo con roles de usuario para administrar su estructura y contenido.</p>
                    <LinkProject href="#projects" className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Ver detalles</span>
                    </LinkProject>
                </div>
            </article>
            <article className="p-5 sm:p-0 sm:grid sm:grid-cols-2 sm:items-center gap-10 lg:gap-20 my-10">
                <div className="relative h-[25rem] sm:h-[28rem] lg:h-[40rem] mb-5">
                    <figure className="h-full w-[65%] lg:w-[75%]">
                        <Image
                            priority
                            width={1000}
                            height={600}
                            quality={80}
                            src={'/img/projects/share-groups-bg.webp'}
                            alt={'Legado de Tlapa'}
                            title={'Legado de Tlapa'}
                            className='cover h-full w-full'
                        />
                    </figure>
                    <figure className="absolute h-[32rem] lg:h-[28rem] top-[50%] -translate-y-[50%] -right-5 sm:pl-10">
                        <Image
                            priority
                            width={720}
                            height={600}
                            quality={80}
                            src={'/img/projects/share-groups-pc.webp'}
                            alt={'Legado de Tlapa'}
                            title={'Legado de Tlapa'}
                            className='contain h-full w-full'
                        />
                    </figure>
                </div>
                <div className="max-w-[30rem] flex flex-col items-center sm:items-start lg:mb-16">
                    <p className="text-base sm:text-xl mb-2">Aplicación web</p>
                    <h3 className="font-bold text-xl sm:text-[2rem] text-center sm:text-left mb-3">Share Groups</h3>
                    <p className="text-center sm:text-left mb-3 sm:mb-5 md:text-lg">Diseñe y Desarrolle una aplicación web para administrar paginas, pefiles y grupos de facebook con el objetivo de campartir publicaciones de forma aleatoria.</p>
                    <LinkProject href="#projects" className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Ver detalles</span>
                    </LinkProject>
                </div>
            </article>
        </section>
    )
}


const LinkProject =  styled.a`

    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;


    &.learn-more {
        width: 13rem;
        height: auto;
    }

    &.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 2.7rem;
        height: 2.7rem;
        background: #213547;
        border-radius: 1.625rem;
    }

    &.learn-more .circle .icon {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
    }

    &.learn-more .circle .icon.arrow {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        left: 0.525rem;
        width: 1.125rem;
        height: 0.125rem;
        background: none;
    }

    &.learn-more .circle .icon.arrow::before {
        position: absolute;
        content: "";
        top: -0.29rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.125rem solid #fff;
        border-right: 0.125rem solid #fff;
        transform: rotate(45deg);
    }

    &.learn-more .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 2rem;
        color: #282936;
        font-weight: 700;
        line-height: 1.2;
        text-align: center;
        text-transform: uppercase;
    }

    &:hover .circle {
        width: 100%;
    }

    &:hover .circle .icon.arrow {
        background: #fff;
        transform: translate(1rem, 0);
    }

    &:hover .button-text {
        color: #fff;
    }

`