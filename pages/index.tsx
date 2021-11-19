import {ReactElement} from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Link from 'next/link'

export default function Index() {
  return (
    <section>
      <Link href={'/p'}>
        <a>跳转</a>
      </Link>
    </section>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title={'首页'}>
      <>
        <Header/>
        {page}
        <Footer/>
      </>
    </Layout>
  )
}

