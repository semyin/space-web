import type {NextApiRequest, NextApiResponse} from "next";
import type {IMenu, IResponse} from "@/types";
import {articleTypeURL} from "@/api";

export default async function getMenuList(
  req: NextApiRequest,
  res: NextApiResponse<Array<IMenu>>
) {
  try {
    const result = await fetch(articleTypeURL)
    const list: IResponse<[]> = await result.json()
    const { code, data } = list
    res.status(200)
    res.send(list.data)
  } catch (e) {
    console.log(e)
  }

}
