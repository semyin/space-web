import React from 'react'
import style from './ArticleItem.module.scss'
import {IArticle} from "@/types";
import Link from "next/link";
import classNames from "classnames";
import {formatDate} from "@/utils/date";

type Props = {
  article: IArticle
}

const ArticleItem: React.FC<Props> = ({article}: { article: IArticle }) => {

  const articleItemClass = classNames({
    [style.item]: true,
    'animate__animated': true,
    'animate__fadeInDown': true
  });

  return (
    <div className={articleItemClass}>
      <h3>
        <Link href={'/post/' + article.id}>
          <a target={'_blank'}>{article.title}</a>
        </Link>
      </h3>
      <div className={style.brief}>{article.brief}</div>
      <div className={style.iconList}>
        <div className={style.date}>
          <i className={'fa fa-sun-o'}/>
          <span>{formatDate(article.createdAt)}</span>
        </div>
        <div className={style.comment}>
          <i className={'fa fa-comment-o'}/>
          <span><Link href={'/post/' + article.id + '#comment'}>
            <a>Comments</a>
          </Link></span>
        </div>
        <div className={style.tag}>
          {article.tagList.length > 0 ? <i className={'fa fa-tag'}/> : null}
          {
            article.tagList.map(item => {
              return <span
                key={item.tagId}
                className={style.tagItem}>
                <Link href={'/tag/' + item.tagId}>
                  <a>{item.tagName}</a>
                </Link>
              </span>
            })
          }
        </div>
      </div>
    </div>
  )
};

export default ArticleItem
