import React from "react";
import Link from "next/link";
import {IArticle} from "@/types";
import style from './ArticleList.module.scss'

type Props = {
  list: Array<IArticle>
}

const ArticleItem: React.ReactNode = (article: IArticle) => {
  return (
    <div className={style.item}>
      <h3>
        <Link href={'/post/' + article.id}>
          <a target={'_blank'}>{article.title}</a>
        </Link>
      </h3>
      <div className={style.brief}>{article.brief}</div>
      <div className={style.iconList}>
        <div className={style.date}>
          <i className={'fa fa-sun-o'}/>
          <span>{article.createdAt}</span>
        </div>
        <div className={style.comment}>
          <i className={'fa fa-comment-o'}/>
          <span>Comment</span>
        </div>
        <div className={style.tag}>
          <i className={'fa fa-tag'}/>
          <span>Webpack</span>
        </div>
      </div>
    </div>
  )
}

const ArticleList: React.FC<Props> = (props) => {
  return (
    <div className={style.articleList}>

    </div>
  )
}

export default ArticleList
