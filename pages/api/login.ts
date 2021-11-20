import type {NextApiRequest, NextApiResponse} from "next";


export default function login(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers)
  res.status(200).send({
    msg: 'ok'
  })
}
