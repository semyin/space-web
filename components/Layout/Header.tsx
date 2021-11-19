import {FormEvent, ReactElement, useState} from "react";
import style from '@/styles/Layout/Header.module.scss'
import Link from "next/link";
import {baseName} from "@/config/constant";

const Header = (): ReactElement => {

  const [inputValue, setInputValue] = useState<string>('')

  return (
    <nav className={style.nav}>
      <div className={style.bg}>
        <div className={style.left}>
          <div className={style.logo}>
            <Link href={'/'}>
              <a>{baseName}</a>
            </Link>
          </div>
          <div className={style.menuList}>

          </div>
        </div>
        <div className={style.right}>
          <div className={style.search}>
            <input
              type="text"
              value={inputValue}
              onChange={(e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}/>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header
