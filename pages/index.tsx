import {ReactElement, useContext, useEffect} from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Link from 'next/link'
import type {AppProps} from "next/app";
import {GetServerSideProps} from "next";
import {useCookies} from "react-cookie";
import {cookiePrefix} from "@/config/constant";
import {IInitData} from "@/types";
import style from '@/styles/pages/index.module.scss'
import {parseCookies} from "@/utils/parseCookies";
import {getRequestAuthHeader} from "@/utils/auth";

export default function Page(props: AppProps) {

  return (
    <section className={style.home}>
      <div className={style.wrap}>
        <div className={style.left}>
          <div className={style.articleList}>
            <div className={style.item}>
              <div className={style.coverImg}>

              </div>
              <div className={style.content}>
                <div className={style.title}>

                </div>
                <div className={style.brief}>

                </div>
                <div className={style.bottom}>
                  <div className={style.bottomLeft}>
                    <div className={style.time}>

                    </div>
                    <div className={style.tagList}>

                    </div>
                  </div>
                  <div className={style.bottomRight}>
                    浏览，评论
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className={style.right}>
          右边
        </div>
      </div>

    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const header = getRequestAuthHeader(context.req)
  console.log(header)
  return {
    props: {}
  }
}

Page.getLayout = function GetLayout(page: ReactElement, initData: IInitData) {
  const {loginStatus, menu} = initData
  const [cookies] = useCookies([cookiePrefix])
  return (
    <Layout title={'首页'}>
      <>
        <Header menu={menu} loginStatus={loginStatus}/>
        {page}
        <Footer/>
      </>
    </Layout>
  )
}

