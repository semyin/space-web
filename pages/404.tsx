import React from "react";
import style from '@/styles/pages/_Error.module.scss'

export default function Custom404(): React.ReactElement {
  return (
    <>
      <div className={style.notFound}>
        <h4>404</h4>
        <p className={style.message}>The page you are looking for is missing</p>
      </div>
    </>
  )
}
