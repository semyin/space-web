import '../styles/globals.css'
import type { AppProps } from 'next/app'
import doConsoleEnv from "@/utils/doConsoleEnv";

function MyApp({ Component, pageProps }: AppProps) {
  doConsoleEnv()
  return <Component {...pageProps} />
}

export default MyApp
