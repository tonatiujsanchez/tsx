import styled from "@emotion/styled"
import Image from "next/image"


export const Hero = () => {
    return (
        <SectionHero>
            <div className="container px-5 flex flex-col items-center md:flex-row md:justify-center gap-4 sm:gap-10 pt-8 pb-16 sm:py-10 md:py-16">
                <div className="relative md:order-2 px-10 sm:pl-0 lg:px-10 w-[21rem] md:w-[40%]">
                    <figure className="relative border pt-12 mb-10 sm:mb-0 md:pt-14 shadow-lg rounded-full overflow-hidden bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-sky-50 via-sky-50 to-sky-100">
                        <Image
                            priority
                            width={900}
                            height={900}
                            quality={80}
                            src={'/img/photo-hero.png'}
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
                    <p className="font-bold text-xl mb-3">¡Hola! 👋 soy</p>
                    <h1 className="text-4xl lg:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Tonatiuj Sánchez</h1>
                    <p>Desarrollador Web Frontend en React.js, con bases solidas en Node.js</p>
                    <ul className="flex items-center gap-4 mt-4">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-linkedin-square text-2xl'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-github text-2xl' ></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/tonatiujsanchez"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="inline-block hover:scale-110 transition-all"
                            >
                                <i className='bx bxl-twitter text-2xl'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionHero>
    )
}



const SectionHero = styled.section`
    background: radial-gradient(70.48% 49.48% at 10.38% 64.52%, #CDE9F5 0%, rgba(255, 255, 255, 0) 100%);
    
    figure {
        /* background: url('/img/bg-hero-home.jpg'); */
        /* background: linear-gradient(to right, rgba(96, 165, 250, 0.8), rgba(52, 211, 153, 0.8)); */
        /* background-size: cover; */
        
    }

    @media (min-width: 640px) {
        /* background: radial-gradient(20.48% 40.48% at 20.38% 60.52%, #CDE9F5 5%, rgba(255, 255, 255, 0) 90%); */
        background: radial-gradient(32.48% 53.48% at 17.38% 54.52%, #CDE9F5 0%, rgba(255, 255, 255, 0) 100%);

    }


`