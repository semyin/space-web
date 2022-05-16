import React from "react";
import Layout from '@/components/Layout/Layout';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ArticleList from "@/components/ArticleList/ArticleList";
import {InferGetServerSidePropsType} from 'next';
import {articles} from "@/api";
import {IArticle} from "@/types";

function Page({articleList}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <Layout title={'首页'}>
      <>
        <Header/>
        <section>
          <ArticleList list={articleList}/>
        </section>
        <Footer/>
      </>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  let articleList: Array<IArticle>;
  const params = {
    currentPage: 1,
    pageSize: 10
  };
  const res = await articles(params);
  articleList = res.data.data;
  return {
    props: {
      articleList
    },
  };
};

export default Page
