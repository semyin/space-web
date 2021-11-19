import {ReactElement} from "react";
import style from '@/styles/Layout/Header.module.scss'

const Header = (): ReactElement => {

  return (
    <nav className={style.nav}>
      test
      <div className={style.bg}>
        bg
      </div>
    </nav>
  )
}

export default Header
