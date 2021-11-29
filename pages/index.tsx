import {ReactElement, useContext, useEffect} from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Link from 'next/link'
import type {AppProps} from "next/app";
import {GetServerSideProps} from "next";
import {useCookies} from "react-cookie";
import {cookiePrefix} from "@/config/constant";
import {IArticle, IInitData, IPage} from "@/types";
import style from '@/styles/pages/index.module.scss'
import {parseCookies} from "@/utils/parseCookies";
import {getRequestAuthHeader} from "@/utils/auth";
import request from "@/plugins/request";
import {serverApi} from "@/api";
import {format} from 'date-fns'


type Props = {
  articleList: IArticle[]
}

export default function Page({ articleList }: Props) {
  console.log(articleList)
  return (
    <section className={style.home}>
      <div className={style.wrap}>
        <div className={style.left}>
          <div className={style.articleList}>
            {
              articleList.map(item => {
                return (
                  <Link key={item.id} href={`/post/${item.id}`}>
                    <div className={style.item}>
                      {
                        item.coverImg ?
                          (<div className={style.coverImg}>
                            <img src={item.coverImg} alt=""/>
                          </div>)
                          : ''
                      }
                      <div className={style.content}>
                        <h3 className={`${style.title} overflow-one-line`}>
                          {item.title}
                        </h3>
                        <div className={style.brief}>
                          {item.brief}
                        </div>
                        <div className={style.bottom}>
                          <div className={style.bottomLeft}>
                            <div className={style.time}>
                              {format(item.createdAt, 'yyyy-MM-dd HH:mm')}
                            </div>
                            <div className={style.tagList}>
                              {
                                item.tagList.map(tag => {
                                  return (
                                    <div className={style.tag} key={tag.id}>{tag.tagName}</div>
                                  )
                                })
                              }
                            </div>
                          </div>
                          <div className={style.bottomRight}>
                            <span>{item.viewNum}</span>
                            <span>{item.commentNum}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </Link>

                )
              })
            }

          </div>
        </div>
        <div className={style.right}>
          右边
        </div>
      </div>

    </section>
  )
}

async function getArticleList(params: IPage) {
  try {
    const res = await request.get(serverApi.article, {
      params
    })
    return res.data.data || []
  } catch (e) {
    console.log(e)
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params: IPage = {
    currentPage: 1,
    pageSize: 10
  }
  const articleList = await getArticleList(params)
  return {
    props: {
      articleList
    }
  }
}

Page.getLayout = function GetLayout(page: ReactElement, initData: IInitData) {
  const {loginStatus, menu} = initData
  // const [cookies] = useCookies([cookiePrefix])
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

