import {ReactElement} from "react";
import style from '@/styles/Layout/Footer.module.scss'
import {baseName} from "@/config/constant";

const Footer = (): ReactElement => {

  return (
    <footer className={style.footer}>
      <div className={style.bg}>
        <div className={style.left}>
          <div className={style.logo}>
            {baseName}
          </div>
          <div className={style.copyRight}>
            Copyright © 2018 - {new Date().getFullYear()} semyin.
          </div>
          <div className={style.icp}>粤ICP备 18145168 号</div>
        </div>
        <div className={style.right}>
          Powered By <a href="https://nextjs.org/">Next.js</a>
        </div>
      </div>
    </footer>
  )

}

export default Footer
