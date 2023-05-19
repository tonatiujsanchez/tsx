import NextLink from 'next/link'


export const Navbar = () => {
    return (
        <nav className="fixed sm:relative bottom-10 sm:bottom-auto left-[50%] sm:left-auto -translate-x-[50%] sm:translate-x-0 bg-white sm:bg-transparent py-3 sm:py-0 px-10 sm:px-0 w-[85%] sm:w-auto flex justify-center shadow-xl sm:shadow-none rounded-lg">
            <ul className="flex gap-2 sm:gap-0">
                <li className="flex items-center">
                    <NextLink 
                        href={'/'} 
                        className="uppercase font-normal text-slate-600 text-sm px-5 py-2 hover:bg-slate-600/10 rounded-sm">
                            <i className='bx bx-home text-[1.3rem] block sm:hidden'></i>
                            <span className="hidden sm:block">Hola</span>
                    </NextLink>
                </li>
                <li className="flex items-center">
                    <NextLink 
                        href={'/'} 
                        className="uppercase font-normal text-slate-600 text-sm px-5 py-2 hover:bg-slate-600/10 rounded-sm">
                            <i className='bx bxs-user-detail text-[1.5rem] block sm:hidden' ></i>
                            <span className="hidden sm:block">Sobre mi</span>
                    </NextLink>
                </li>
                <li className="flex items-center">
                    <NextLink 
                        href={'/'} 
                        className="uppercase font-normal text-slate-600 text-sm px-5 py-2 hover:bg-slate-600/10 rounded-sm">
                            <i className='bx bx-collection text-[1.3rem] block sm:hidden' ></i>
                            <span className="hidden sm:block">Proyectos</span>
                            {/* <i className='bx bx-spreadsheet' ></i> */}
                            {/* <i className='bx bx-layer' ></i> */}
                    </NextLink>
                </li>
                {/* <li className="flex items-center">
                    <NextLink 
                        href={'/'} 
                        className="uppercase font-normal text-slate-600 text-sm">
                            <i className='bx bx-news text-[1.3rem] block sm:hidden' ></i>
                            <span className="hidden sm:block">Blog</span>
                    </NextLink>
                </li> */}
                <li className="flex items-center">
                    <NextLink 
                        href={'/'} 
                        className="uppercase font-normal text-slate-600 text-sm px-5 py-2 hover:bg-slate-600/10 rounded-sm">
                            <i className='bx bxs-contact text-[1.3rem] block sm:hidden' ></i>
                            <span className="hidden sm:block">Contacto</span>
                    </NextLink>
                </li>
            </ul>
        </nav>
    )
}
