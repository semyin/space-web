import React from "react";
import ArticleItem from "@/components/ArticleList/ArticleItem";
import {IArticle} from "@/types";
import style from './ArticleList.module.scss'

type Props = {
  list: Array<IArticle>
}

const ArticleList: React.FC<Props> = (props) => {
  return (
    <div className={style.articleList}>
      {props.list.map(item => {
        return <ArticleItem key={item.id} article={item} />
      })}
    </div>
  )
};

export default ArticleList
