import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>

        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700;800;900&display=swap" rel="stylesheet"/>

      </Head>
      <body className='bg-blue-50 custom-scroll' style={{ backgroundImage: 'linear-gradient( to right, rgb(191 219 254 / 0), rgb( 191 219 254 / 0) )' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
