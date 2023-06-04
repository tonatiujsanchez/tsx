import Image from "next/image"


export const SkillsAndExperience = () => {
    return (
        <article className="py-10 sm:py-20">

            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-28 justify-evenly">
                <div>
                    <h2 className="text-center font-extrabold text-3xl md:text-3xl uppercase mb-5 sm:mb-10 lg:mb-16">Habilidades</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:w-[80%] mx-auto">
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-javascript-600/20">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/javascript-icon.svg'}
                                    alt={'Icono de Javascript'}
                                    title={'Javascript'}
                                    className='cover w-8'
                                />
                            </figure>
                            <p className="font-semibold">Javascript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-typescript-600/20">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/typescript-icon.svg'}
                                    alt={'Icono de Typescript'}
                                    title={'Typescript'}
                                    className='cover w-8'
                                />
                            </figure>
                            <p className="font-semibold">Typescript</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-react-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/react-icon.svg'}
                                    alt={'Icono de React.js'}
                                    title={'React.js'}
                                    className='cover w-10'
                                />
                            </figure>
                            <p className="font-semibold">React</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-next-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/nextjs-icon.svg'}
                                    alt={'Icono de Next.js'}
                                    title={'Next.js'}
                                    className='cover w-12'
                                />
                            </figure>
                            <p className="font-semibold">Next.js</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-node-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/nodejs-icon.svg'}
                                    alt={'Icono de Node.js'}
                                    title={'Node.js'}
                                    className='cover w-8'
                                />
                            </figure>
                            <p className="font-semibold">Node</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-sql-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/db-icon.svg'}
                                    alt={'Icono de SQL'}
                                    title={'SQL'}
                                    className='cover w-10 opacity-90'
                                />
                            </figure>
                            <p className="font-semibold">SQL</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-mongo-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/mongodb-icon.svg'}
                                    alt={'Icono de MongoDB'}
                                    title={'MongoDB'}
                                    className='cover w-11'
                                />
                            </figure>
                            <p className="font-semibold">MongoDB</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-git-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/git-icon.svg'}
                                    alt={'Icono de GIT'}
                                    title={'GIT'}
                                    className='cover w-10'
                                />
                            </figure>
                            <p className="font-semibold">GIT</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-24 h-24 mb-2 flex items-center justify-center rounded-full bg-github-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/github-icon.svg'}
                                    alt={'Icono de GitHub'}
                                    title={'GitHub'}
                                    className='cover w-11'
                                />
                            </figure>
                            <p className="font-semibold">GitHub</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-20 h-20 mb-2 flex items-center justify-center rounded-full bg-sass-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/sass-icon.svg'}
                                    alt={'Icono de Sass'}
                                    title={'Sass'}
                                    className='cover w-11'
                                />
                            </figure>
                            <p className="font-semibold">Sass</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-20 h-20 mb-2 flex items-center justify-center rounded-full bg-tailwind-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/tailwind-icon.svg'}
                                    alt={'Icono de Tailwind'}
                                    title={'Tailwind'}
                                    className='cover w-11'
                                />
                            </figure>
                            <p className="font-semibold">Tailwind</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <figure className="w-20 h-20 mb-2 flex items-center justify-center rounded-full bg-figma-600/10">
                                <Image
                                    priority
                                    width={50}
                                    height={50}
                                    quality={80}
                                    src={'/icons/figma-icon.svg'}
                                    alt={'Icono de Figma'}
                                    title={'Figma'}
                                    className='cover w-11'
                                />
                            </figure>
                            <p className="font-semibold">Figma</p>
                        </div>
                    </div>

                </div>
                <div className="px-5 mx-auto sm:mx-10 lg:mx-0">
                    <h2 className="text-center font-extrabold text-3xl md:text-3xl uppercase mb-5 sm:mb-10 lg:mb-16">Experiencia</h2>

                    <div className="max-h-[620px] overflow-y-auto custom-scroll">
                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2023</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">Contextos Guerrero</p>
                                    <p className="text-slate-700 lg:text-lg mb-1">Diseño y Desarrollo de un sitio web de noticias auto administrable.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span>HTML, CSS, TailwindCSS, Styled Componets, Javascript, Typescript, React, Next.js, Node.js y MongoDB</p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">Legado de Tlapa</p>
                                    <p className="text-slate-700 lg:text-lg mb-1">Diseño, Desarrollo y Mantenimento de un sitio web de noticias auto administrable.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span>HTML, CSS, TailwindCSS, Styled Componets, Javascript, Typescript, React, Next.js, Node.js y MongoDB</p>

                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2022</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">JMX (Agencia de Publicidad)</p>
                                    <p className="text-slate-700">Desarrollador fullstack.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span>HTML, CSS, TailwindCSS, Styled Componets, Javascript, Typescript, React, Next.js, Node.js, MongoDB, Figma y Photoshop</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2021</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">Nunca más un Tlapa sin Nosotros</p>
                                    <p className="text-slate-700">Diseñador y Copywriter.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span>Photoshop, Ilustrator y Premiere Pro</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2020</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">JMX (Agencia de Publicidad)</p>
                                    <p className="text-slate-700">Diseñador y Community Manager.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span>Photoshop, Ilustrator, Premiere Pro, Camtasia y Facebook Ads</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2019</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">H. Ayuntamiento Municipal de Atlamajalcingo del Monte (2018-2021)</p>
                                    <p className="text-slate-700">Desarrollo y Mantenimiento de un sitio web gubernamental.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span> HTML, CSS, Javascript, Joomla, PHP y MySql</p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">H. Ayuntamiento Municipal de Malinaltepec (2018-2021)</p>
                                    <p className="text-slate-700">Desarrollo y Mantenimiento de un sitio web gubernamental.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span> HTML, CSS, Javascript, Joomla, PHP y MySql</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2018</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">Legado de Tlapa</p>
                                    <p className="text-slate-700">Desarrollo y Mantenimiento de un sitio web de noticias.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span> HTML, CSS, Javascript, Joomla, PHP y MySql</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2018-2017</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">Despertar de la Montaña</p>
                                    <p className="text-slate-700">Desarrollo y Mantenimiento de un sitio web de noticias y Desarrollo, Depliegue y Mantenimiento de una aplicación hibrida de noticias para dispositivos móviles.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span> HTML, CSS, Javascript, Joomla, PHP, MySql, Typescript, Angular y Ionic</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12 mb-10">
                            <div className="text-blue-700 font-semibold">2016</div>
                            <div className="flex flex-col gap-5">
                                <div>
                                    <p className="font-bold text-lg lg:text-xl">Instituto Marcial de Taekwondo</p>
                                    <p className="text-slate-700">Desarrollo de un Sistema de puntuación para competencias y torneos de Taekwondo.</p>
                                    <p className="text-slate-500 italic text-sm"><span className="underline">Tecnologías: </span>Java y MySql</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
