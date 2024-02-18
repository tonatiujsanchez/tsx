import { FC } from "react"


interface Props {
    bgColor?: string
}

export const Footer:FC<Props> = ({ bgColor='' }) => {
    return (
        <footer className={`border-t py-1 sm:py-4 ${ bgColor }`}>
            <p className="text-center">
                © { new Date().getFullYear() } &nbsp;
                <a href="https://twitter.com/tonatiujsanchez"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block sm:inline hover:text-blue-700"
                >
                        @tonatiujsanchez 
                </a>
            </p>
        </footer>
    )
}
