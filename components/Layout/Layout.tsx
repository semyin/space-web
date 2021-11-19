import Head from "next/head";
import {ReactElement} from "react";
import {baseTitle} from "@/config/constant";

interface IMeta {
  name: string,
  content: string
}

interface ILayoutProps {
  children: ReactElement,
  title?: string,
  meta?: Array<IMeta>
}

const Layout = ({children, title = baseTitle, meta = []}: ILayoutProps): ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {getMeta(meta)}
      </Head>
      <main>{children}</main>
    </>
  )
}

const getMeta: (meta: Array<IMeta>) => ReactElement[] = (meta: Array<IMeta>) => {
  return meta.map((item, index) => {
    return (
      <meta key={index} name={item.name} content={item.content}/>
    )
  })
}

export default Layout
