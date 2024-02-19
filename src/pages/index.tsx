import { Inter } from 'next/font/google'
import { LayoutMain } from '@/components/layouts'
import { AboutMe, Contact, Hero, Projects, SkillsAndExperience } from '@/components/home'
import { Footer } from '@/components/shared'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <LayoutMain>
            <Hero />
            <SkillsAndExperience />
            <main>
                <Projects />
            </main>
            <AboutMe />
            <Contact />
            <Footer />
        </LayoutMain>
    )
}
