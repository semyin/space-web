import {toBase64} from "next/dist/shared/lib/to-base-64";

const baseName: string = 'SEMYIN'

const baseTitle: string = baseName +'\'s space'

const cookiePrefix = toBase64('space-web') // c3BhY2Utd2Vi

const Authorization = 'Authorization'

export {
  baseName,
  baseTitle,
  cookiePrefix,
  Authorization
}
