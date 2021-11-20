import {ReactElement} from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Link from 'next/link'
import type {AppProps} from "next/app";
import {IMenu} from "@/types";

export default function Page(props: AppProps) {
  return (
    <section>
      <Link href={'/p'}>
        <a>跳转</a>
      </Link>
    </section>
  )
}

Page.getLayout = function getLayout(page: ReactElement, menu: Array<IMenu>) {
  return (
    <Layout title={'首页'}>
      <>
        <Header menu={menu}/>
        {page}
        <Footer/>
      </>
    </Layout>
  )
}

