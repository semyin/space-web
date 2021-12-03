import {ReactElement, useContext, useEffect} from "react";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Link from 'next/link'
import {GetServerSideProps} from "next";
import {IArticle, IHotArticle, IInitData, IPage} from "@/types";
import style from '@/styles/pages/index.module.scss'
import request from "@/plugins/request";
import {api} from "@/api";
import {format} from 'date-fns'


type Props = {
  articleList: IArticle[],
  hotArticleList: IHotArticle[]
}

export default function Page({ articleList, hotArticleList }: Props) {
  useEffect(() => {
    // request.get('/web/articles')
    getArticleList({currentPage: 2, pageSize: 10})
  }, [])
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
                        <div className={`${style.brief} overflow-2-line`}>
                          {item.brief}
                        </div>
                        <div className={style.bottom}>
                          <div className={style.bottomLeft}>
                            <div className={style.time}>
                              <img className={style.timeIcon} src='/assets/img/time.svg' alt=""/>{format(item.createdAt, 'yyyy-MM-dd HH:mm')}
                            </div>
                            <div className={style.tagList}>
                              <img className={style.tagIcon} src='/assets/img/tag.svg' alt=""/>
                              {
                                item.tagList.map(tag => {
                                  return (
                                    <div className={style.tag} key={tag.id}>
                                      {tag.tagName}
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                          <div className={style.bottomRight}>
                            <span><img src="/assets/img/view.svg" alt=""/>{item.viewNum}</span>
                            <span><img src="/assets/img/comment.svg" alt=""/>{item.commentNum}</span>
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
          <div className={style.rightHot}>
            <div className={style.rightHotTitle}><p></p>热门文章</div>
            <div className={style.hotList}>
              {
                hotArticleList.map((item, index) => {
                  return (
                    <Link key={index} href={`/post/${item.id}`}>
                      <div  className={`${style.hotItem} cursor-pointer`}>
                        {
                          item.coverImg ? (<img className={style.hotCoverImg} src={item.coverImg} alt=""/>) : ''
                        }
                        <div className={style.hotItemRight}>
                          <h4 className='overflow-2-line'>{item.title}</h4>
                          <p>{item.viewNum} 阅读</p>
                        </div>
                      </div>
                    </Link>

                  )
                })
              }
            </div>
          </div>
          <div className={style.rightComment}>

          </div>
        </div>
      </div>

    </section>
  )
}

async function getArticleList(params: IPage) {
  let res: [] = []
  try {
    const result = await request.get(api.article, {
      params
    })
    res = result.data.data || []
  } catch (e) {
    console.log(e)
  }
  return res
}

async function getHotArticleList() {
  let res: [] = []
  try {
    const result = await request.get(api.hotArticle)
    res =  result.data.data || []
  } catch (e) {
    console.log(e)
  }
  return res
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params: IPage = {
    currentPage: 1,
    pageSize: 10
  }
  const articleList = await getArticleList(params)
  const hotArticleList = await getHotArticleList()
  return {
    props: {
      articleList,
      hotArticleList
    }
  }
}

Page.getLayout = function GetLayout(page: ReactElement, initData: IInitData) {
  const {loginStatus, menu} = initData
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

