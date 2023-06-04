import styled from "@emotion/styled"
import Image from "next/image"


export const Hero = () => {
    return (
        <SectionHero id="hello">
            <div className="container px-5 flex flex-col items-center md:flex-row md:justify-center gap-4 lg:gap-20 pt-8 pb-16 sm:py-10 md:py-[6rem]">
                <div className="relative md:order-2 px-10 sm:pl-0 lg:px-10 w-[21rem] md:w-[40%]">
                    <figure className="relative border pt-4 mb-10 sm:mb-0 md:pt-5 shadow-lg rounded-full overflow-hidden bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-sky-50 via-sky-50 to-sky-100">
                        <Image
                            priority
                            width={900}
                            height={900}
                            quality={80}
                            src={'/img/ton-hero.webp'}
                            alt={'Foto de Tontiuj Sánchez'}
                            title={'Tontiuj Sánchez'}
                            className='cover h-full w-full'
                        />
                    </figure>
                    <Image
                        priority
                        width={45}
                        height={45}
                        src={'/icons/typescript-icon.svg'}
                        alt="Typescript"
                        title="Typescript"
                        className="absolute bottom-16 sm:bottom-20 md:bottom-10 left-9 md:left-0 lg:left-4 animate-bounce animate-infinite animate-duration-[4000ms] animate-delay-0 animate-ease-in animate-alternate-reverse animate-fill-forwards"
                    />

                    <Image
                        priority
                        width={55}
                        height={55}
                        src={'/icons/react-icon.svg'}
                        alt="React.js"
                        title="React.js"
                        className="absolute right-6 top-16 animate-spin animate-infinite animate-duration-[8000ms] animate-delay-0 animate-ease-in animate-alternate-reverse animate-fill-forwards"
                    />
                    <Image
                        priority
                        width={95}
                        height={950}
                        src={'/icons/nodejs-large.svg'}
                        alt="Node.js"
                        title="Node.js"
                        className="absolute right-7 bottom-5 animate-wiggle animate-infinite animate-duration-[5000ms] animate-delay-0 animate-ease-in animate-alternate-reverse animate-fill-forwards"
                    />
                    <Image
                        priority
                        width={100}
                        height={100}
                        src={'/icons/nextjs-icon.svg'}
                        alt="Next.js"
                        title="Next.js"
                        className="absolute top-10 left-5 sm:left-0 lg:left-5 animate-wiggle animate-infinite animate-duration-[3000ms] animate-delay-0 animate-ease-in animate-alternate-reverse animate-fill-forwards"
                    />
                </div>
                <div className="md:order-1 sm:px-5 sm:w-[70%] md:w-[55%]">
                    <p className="font-bold text-xl mb-0 md:mb-3">¡Hola! 👋 soy</p>
                    <h1 className="text-[2.3rem] sm:text-[2.4rem] lg:text-[3.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 mb-1 md:mb-3">Tonatiuj Sánchez</h1>
                    <p className="mb-5 md:text-xl">Desarrollador Web Frontend en React.js, con conocimientos solidos de backend.</p>
                    <LinkProjects href="#projects" className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Mis proyectos</span>
                    </LinkProjects>
                </div>
            </div>
        </SectionHero>
    )
}



const SectionHero = styled.section`
    background: radial-gradient(70.48% 49.48% at 10.38% 64.52%, #CDE9F5 0%, rgba(255, 255, 255, 0) 100%);
    
    @media (min-width: 640px) {
        /* background: radial-gradient(20.48% 40.48% at 20.38% 60.52%, #CDE9F5 5%, rgba(255, 255, 255, 0) 90%); */
        background: radial-gradient(32.48% 53.48% at 17.38% 54.52%, #CDE9F5 0%, rgba(255, 255, 255, 0) 100%);

    }
`

const LinkProjects =  styled.a`

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
        width: 14rem;
        height: auto;
    }

    &.learn-more .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
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
        left: 0.625rem;
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
        line-height: 1.6;
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