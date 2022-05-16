import {IMenu} from "@/types";

const baseName: string = 'SEMYIN'

const baseTitle: string = baseName +'\'s space'

const cookiePrefix = 'c3BhY2Utd2Vi' // c3BhY2Utd2Vi space-web

const Authorization = 'Authorization'

const menuList: Array<IMenu> = [
  {
    id: 1,
    typeName: '后端'
  },
  {
    id: 2,
    typeName: '前端'
  },
  {
    id: 3,
    typeName: '代码片段'
  },
  {
    id: 4,
    typeName: '随想'
  }
]

export {
  baseName,
  baseTitle,
  cookiePrefix,
  Authorization,
  menuList
}
