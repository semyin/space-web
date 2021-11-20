import {domain} from "@/config/api";
import request from "@/plugins/request";

export const articleTypeURL = domain + '/web/articleTypes'

export const loginURL = domain + '/web/login'

export const getMenuList = () => {
  return request({
    url: articleTypeURL,
    method: 'get',
    headers: {

    }
  })
}
