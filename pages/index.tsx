import Layout from '@/components/Layout/Layout';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import {InferGetServerSidePropsType} from 'next';
import {articles} from "@/api";
import {IArticle} from "@/types";
import {GetServerSidePropsContext} from "next/types";

function Page({articleList}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <Layout title={'首页'}>
      <>
        <Header/>
        <section>

        </section>
        <Footer/>
      </>
    </Layout>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  let articleList: Array<IArticle> = [];
  const params = {
    currentPage: 1,
    pageSize: 10
  }
  const res = await articles(params)
  articleList = res.data.data
  return {
    props: {
      articleList
    },
  };
};

export default Page
