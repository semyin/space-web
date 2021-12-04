import Head from "next/head";
import {ReactElement} from "react";
import {baseTitle} from "@/config/constant";
import style from '@/styles/Layout/Layout.module.scss'
import {BackTop} from "antd";
import 'antd/lib/back-top/style/index.css'


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
      <BackTop visibilityHeight={400} className={style.antdBackTop}>
        <div className={style.goTopIcon}>
          <img className={style.triangle} src='/assets/img/triangle.svg'/>
        </div>
      </BackTop>
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
