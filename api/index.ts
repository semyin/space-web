import {appDomain, requestPrefix} from "@/config/api";

export const clientApi = {
  menu: '/web/articleTypes',
  article: '/web/articles',
  login: '/web/login',
  hotArticle: '/web/hot/articles'
}

export const serverApi = {
  menu: appDomain + requestPrefix + clientApi.menu,
  article: appDomain + requestPrefix + clientApi.article,
  hotArticle: appDomain + requestPrefix + clientApi.hotArticle
}
