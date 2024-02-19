import { FC } from "react"


interface Props {
    bgColor?: string
}

export const Footer:FC<Props> = ({ bgColor='' }) => {
    return (
        <footer className={`border-t py-3 sm:py-4 ${ bgColor }`}>
            <p className="text-center">
                © { new Date().getFullYear() } &nbsp;
                <a href="https://www.linkedin.com/in/tonatiujsanchez"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-blue-800 hover:underline"
                >
                        @tonatiujsanchez 
                </a>
            </p>
        </footer>
    )
}
