import Head from "next/head";
import {ReactElement} from "react";
import {baseTitle} from "@/config/constant";
import styles from '@/styles/Layout/Layout.module.scss'

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
      <main className={styles.main}>{children}</main>
    </>
  );
}

const getMeta: (meta: Array<IMeta>) => ReactElement[] = (meta: Array<IMeta>) => {
  return meta.map((item, index) => {
    return (
      <meta key={index} name={item.name} content={item.content}/>
    )
  })
}

export default Layout
