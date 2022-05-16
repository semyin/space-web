/**
 * @author semyin
 * @description api请求
 */

import {appDomain, requestPrefix} from "@/config/api";
import {isServer} from "@/config/environment";
import request from "@/plugins/request";
import {IArticlesQuery} from "@/types/api";

const base = isServer ? appDomain + requestPrefix : ''

export const api = {
  menu: base + '/web/articleTypes',
  article: base + '/web/articles',
  login: base + '/web/login',
  hotArticle: base + '/web/hot/articles',
  latestComment: base + '/web/comments/latest'
}

export const articles = (data: IArticlesQuery) => request({
  url: api.article,
  method: 'get',
  params: data
})
