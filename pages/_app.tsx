import '../styles/globals.css'
import type {ReactElement, ReactNode} from "react";
import type {AppProps} from 'next/app'
import type {NextPage} from "next";

import doConsoleEnv from "@/utils/doConsoleEnv";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({Component, pageProps}: AppPropsWithLayout) {

  doConsoleEnv()

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)

}

export default MyApp
