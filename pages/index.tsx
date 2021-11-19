import {ReactElement} from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Index() {
  return (
    <section>

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

