import NextLink from 'next/link';
import { Navbar } from './Navbar';



export const Header = () => {
    return (
        <header className="sm:shadow-sm sm:border-none overflow-hidden sm:sticky sm:top-0 z-20 sm:bg-white/40 sm:bg-sky-100/25 sm:backdrop-blur-md">
            <div className="container px-5 sm:pl-10 flex justify-between items-center py-3 sm:py-4">
                <NextLink
                    href={'/'}
                    className="hidden sm:block font-extrabold text-2xl"
                >
                    TSX
                </NextLink>
                <Navbar />
            </div>
        </header>
    )
}
