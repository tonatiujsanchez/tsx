import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'

import 'boxicons/css/boxicons.min.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="linear-gradient(to right, #38a169, #2563eb)" height={4} />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}
