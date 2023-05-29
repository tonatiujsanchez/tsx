import { FC } from "react"
import Image from "next/image"

import styled from "@emotion/styled"


interface Project {
    type       : string
    title      : string
    description: string
    bgImage    : string
    image      : string
    slug       : string
}

export const ProjectLeft:FC<Project> = ({ type, title, description, bgImage, image, slug }) => {
    return (
        <article className="p-5 sm:p-0 sm:grid sm:grid-cols-2 sm:items-center gap-10 lg:gap-20 my-10">
            <div className="relative h-[25rem] sm:h-[28rem] lg:h-[40rem] mb-5">
                <figure className="h-full w-[65%] lg:w-[75%]">
                    <Image
                        priority
                        width={720}
                        height={600}
                        quality={80}
                        src={ bgImage }
                        alt={ title }
                        title={ title }
                        className='cover h-full w-full'
                    />
                </figure>
                <figure className="absolute h-[32rem] lg:h-[28rem] top-[50%] -translate-y-[50%] -right-5 sm:pl-10">
                    <Image
                        priority
                        width={720}
                        height={600}
                        quality={80}
                        src={image}
                        alt={ title }
                        title={ title }
                        className='contain h-full w-full'
                    />
                </figure>
            </div>
            <div className="max-w-[35rem] flex flex-col items-center sm:items-start lg:mb-16 sm:px-5">
                <p className="text-base sm:text-xl mb-2">{ type }</p>
                <h3 className="font-bold text-xl sm:text-[2rem] text-center sm:text-left mb-3">{ title }</h3>
                <p className="text-center sm:text-left mb-3 sm:mb-5 md:text-lg">{ description }</p>
                <LinkProject href={`/proyectos/${ slug }`} className="learn-more">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Ver detalles</span>
                </LinkProject>
            </div>
        </article>
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