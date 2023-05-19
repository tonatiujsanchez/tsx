import type { AppProps } from 'next/app'

import 'boxicons/css/boxicons.min.css'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
