import cookie from "cookie"
import {AppContext} from "next/dist/pages/_app";

export function parseCookies(context: AppContext):
  {
    [key: string]: string
  }
{
  return cookie.parse(context.ctx.req ? context.ctx.req.headers.cookie || '' : document.cookie)
}
