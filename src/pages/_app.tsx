import Script from 'next/script'
import type { AppProps } from 'next/app'

import 'boxicons/css/boxicons.min.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="">
        {`  
          /*=== === Mostrar el enlace activo === ===*/
          const sections = document.querySelectorAll('section[id]');
          const scrollActive = ()=>{
              const scrollY = window.pageYOffset;
              
              sections.forEach( section =>{
                  const sectionHeight = section.offsetHeight;
                  const sectionTop = section.offsetTop - 150;
                  sectionId = section.getAttribute('id');
          
                  if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
                  }else{
                      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
          
                  }
              });
          }
          window.addEventListener('scroll', scrollActive);
          
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
