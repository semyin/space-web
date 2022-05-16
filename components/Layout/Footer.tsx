import {ReactElement} from "react";
import Link from "next/link";
import style from '@/styles/Layout/Footer.module.scss'
import {DOMAIN} from "@/config/constant";
import classNames from "classnames";

const Footer = (): ReactElement => {

  const headerClass = classNames({
    [style.footer]: true,
    'animate__animated': true,
    'animate__fadeInDown': true
  })

  return (
    <footer className={headerClass}>
      <div>
        <div className={style.desc}>
          Copyright © {new Date().getFullYear()} <Link href={'https://' + DOMAIN}><a>{DOMAIN}</a></Link>
        </div>
        <div className={style.desc}>
          <Link href={'https://' + DOMAIN}><a>RSS订阅</a></Link>
          <span>Powered by <Link href={'https://nextjs.org'}><a target={'_blank'}>Next.js</a></Link></span>
        </div>
      </div>
    </footer>
  )

}

export default Footer
