import React from 'react';
import Layout from '@/components/Layout/Layout';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import ArticleList from '@/components/ArticleList/ArticleList';
import Pagination from '@/components/Pagination/Pagination';
import { InferGetServerSidePropsType, PreviewData } from 'next';
import { articles } from '@/api';
import { IArticle } from '@/types';
import { GetServerSidePropsContext } from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import { IPage } from '@/types/api';
import { useRouter } from 'next/router';

function Page({
  articleList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const { currentPage = 1, pageSize = 10 } = router.query;

  const isShowNext = articleList.length >= pageSize;

  const isShowPrev = Number(currentPage) > 1;

  const handlePage = (direction: string) => {
    const targetPage =
      direction === 'next' ? Number(currentPage) + 1 : Number(currentPage) - 1;

    router
      .push({
        pathname: '/',
        query: {
          currentPage: targetPage,
          pageSize,
        },
      })
      .then((r) => {});
  };

  return (
    <Layout title={'首页'}>
      <>
        <Header />
        <section>
          <ArticleList list={articleList} />
          <Pagination
            isShowNext={isShowNext}
            isShowPrev={isShowPrev}
            handlePage={handlePage}
          />
        </section>
        <Footer />
      </>
    </Layout>
  );
}

async function getArticleList(query: IPage) {
  let articleList: Array<IArticle>;
  const res = await articles(query);
  articleList = res.data.data;
  return articleList;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const { currentPage = 1, pageSize = 10 } = context.query;
  const params = {
    currentPage: Number(currentPage),
    pageSize: Number(pageSize),
  };
  const articleList = await getArticleList(params);
  return {
    props: {
      articleList,
    },
  };
};

export default Page;
