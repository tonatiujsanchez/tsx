import { FC, ReactNode } from "react"
import Head from "next/head"

import { Header } from '../shared';



interface Props {
    children: ReactNode
}

export const LayoutMain:FC<Props> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Tonatiuj Sánchez</title>
            </Head>
            <Header />

            { children }
        </>
    )
}
