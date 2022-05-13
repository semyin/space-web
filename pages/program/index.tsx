import type {NextPage} from "next";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const Page: NextPage = () => {

  return (
    <Layout title={'编程'}>
      <>
        <Header />
        <Footer />
      </>
    </Layout>
  )
}

export default Page
