import { FC } from "react"


interface Props {
    bgColor?: string
}

export const Footer:FC<Props> = ({ bgColor='' }) => {
    return (
        <footer className={`border-t py-1 sm:py-4 ${ bgColor }`}>
            <p className="text-center">
                <a href="https://twitter.com/tonatiujsanchez"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block sm:inline hover:text-blue-700"
                >
                        @tonatiujsanchez 
                </a>
                &nbsp; © { new Date().getFullYear() } Todos los derechos reservados 
            </p>
        </footer>
    )
}
