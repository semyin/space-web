import {NextPageContext} from "next";
import style from '@/styles/pages/_Error.module.scss'
import {useEffect} from "react";

function Error({statusCode, err}: { statusCode: number, err: Error }) {
  useEffect(() => {
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
  })
  return (
    <>
      <div className={style.error}>
        <h4>{ statusCode }</h4>
        <p className={style.message}>
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    </>

  )
}

Error.getInitialProps = ({res, err}: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    statusCode,
    err
  }
}

export default Error
