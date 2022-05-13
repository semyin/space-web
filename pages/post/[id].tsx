import type {NextPage} from "next";
import {useRouter} from "next/router";

const Page: NextPage = () => {

  const router = useRouter()
  console.log(router)

  return (
    <div>detail</div>
  )
}

export default Page
