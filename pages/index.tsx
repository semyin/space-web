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

export default function Page(props: AppProps) {

  return (
    <section className={style.home}>
      <Link href={'/p'}>
        <a>跳转</a>
      </Link>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {

    }
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

