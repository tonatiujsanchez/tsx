import { Inter } from 'next/font/google'
import { LayoutMain } from '@/components/layouts'
import { AboutMe, Hero, Projects } from '@/components/home'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutMain>
      <Hero />
      <AboutMe />
      <main className="container">
        <Projects />
      </main>
    </LayoutMain>
  )
}
