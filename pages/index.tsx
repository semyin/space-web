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
  console.log(page.props)
  return (
    <Layout title={'首页'}>
      <>
        <Header/>
        {page}
        <div>{page.props.text}</div>
        <Footer/>
      </>
    </Layout>
  )
}

