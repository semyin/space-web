import '../styles/globals.scss'
import 'animate.css';
import 'font-awesome/css/font-awesome.css'
import type {AppProps} from 'next/app'
import type {NextPage} from "next";

import doConsoleEnv from "@/utils/doConsoleEnv";
import {useRouter} from "next/router";
import {useEffect} from "react";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {CookiesProvider} from "react-cookie";

type AppPropsWithLayout = AppProps & {
  Component: NextPage,
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {

  doConsoleEnv()

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start())
    router.events.on('routeChangeComplete', () => NProgress.done())
    router.events.on('routeChangeError', () => NProgress.done())
  })

  return (
    <div className='_app'>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </div>

  )

}

export default MyApp
