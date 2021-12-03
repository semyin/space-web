/**
 * @author semyin
 * @description api请求
 */

import {appDomain, requestPrefix} from "@/config/api";
import {isServer} from "@/config/environment";

const base = isServer ? appDomain + requestPrefix : ''

export const api = {
  menu: base + '/web/articleTypes',
  article: base + '/web/articles',
  login: base + '/web/login',
  hotArticle: base + '/web/hot/articles'
}
