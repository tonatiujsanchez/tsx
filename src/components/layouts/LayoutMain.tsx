import { FC, ReactNode, useEffect } from "react"
import Head from "next/head"

import { Header } from '../shared'



interface Props {
    children: ReactNode
}

export const LayoutMain:FC<Props> = ({ children }) => {

    const scrollActive = (): void =>{
        const sections:NodeListOf<HTMLElement> = document.querySelectorAll('section[id]')
        const scrollY = window.pageYOffset
        
        sections.forEach( ( section:HTMLElement ) =>{
            const sectionHeight = section.offsetHeight
            const sectionTop = section.offsetTop - 150
            const sectionId = section.getAttribute('id')
    
            if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link')
    
            }
        })
    }
    
    useEffect(()=>{
        scrollActive()
    },[])

    useEffect(() => {
        window.addEventListener('scroll', scrollActive)
        return () => {
            window.removeEventListener('scroll', scrollActive)
        }
    }, [])

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
