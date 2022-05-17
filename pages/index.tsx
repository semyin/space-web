import React from "react";
import Layout from '@/components/Layout/Layout';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ArticleList from "@/components/ArticleList/ArticleList";
import {InferGetServerSidePropsType, PreviewData} from 'next';
import {articles} from "@/api";
import {IArticle} from "@/types";
import {GetServerSidePropsContext} from "next/types";
import {ParsedUrlQuery} from "querystring";
import {IPage} from "@/types/api";
import {useRouter} from "next/router";

function Page({articleList}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const router = useRouter()

  const handlePage = () => {
    const currentPage = Number(router.query.currentPage) || 1
    const pageSize = router.query.pageSize
    const nextPage = currentPage + 1
    const nextQuery = pageSize ? {
      currentPage: nextPage,
      pageSize,
    } : {
      currentPage: nextPage,
    }
    router.push({
      pathname: '/',
      query: nextQuery
    }).then(r => {})
  }

  return (
    <Layout title={'首页'}>
      <>
        <Header/>
        <section>
          <ArticleList list={articleList}/>
          <button onClick={handlePage}>下一页</button>
        </section>
        <Footer/>
      </>
    </Layout>
  );
}

async function getArticleList(query: IPage) {
  let articleList: Array<IArticle>;
  const res = await articles(query);
  articleList = res.data.data;
  return articleList
}

export const getServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  const {currentPage = 1, pageSize = 10} = context.query
  console.log(currentPage, pageSize)
  const params = {
    currentPage: Number(currentPage),
    pageSize: Number(pageSize)
  }
  const articleList = await getArticleList(params)
  return {
    props: {
      articleList
    },
  };
};

export default Page
