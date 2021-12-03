import {ChangeEvent, ReactElement, useState} from "react";
import style from '@/styles/Layout/Header.module.scss'
import Link from "next/link";
import {baseName} from "@/config/constant";
import {IMenu} from "@/types";
import classNames from "classnames";

const Header = ({menu, loginStatus = false}: { menu: Array<IMenu>, loginStatus?: boolean }): ReactElement => {

  const [inputValue, setInputValue] = useState<string>('')

  const [isBlur, setIsBlur] = useState<boolean>(false)

  const searchContainerClass = classNames({
    [style.search]: true,
    [style.searchActive]: isBlur
  })

  return (

    <header className={style.navHeader}>
      <nav className={style.nav}>
        <div className={style.left}>
          <div className={style.logo}>
            <Link href={'/'}>
              <a>{baseName}</a>
            </Link>
          </div>
          <div className={style.menuList}>
            <ul className='list-style-none'>
              {menu.map(item => (
                <li key={item.id}>
                  <Link href={`/articleTypes/${item.id}`}>
                    <a>{item.typeName}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.right}>
          <div className={searchContainerClass}>
            <input
              className={isBlur ? style.inputBlur : ''}
              onFocus={() => setIsBlur(true)}
              onBlur={() => setIsBlur(false)}
              type="text"
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
            <img src={isBlur ? '/assets/img/searchActive.svg' : '/assets/img/search.svg'} alt=""/>
          </div>
          <div className={style.user}>
            {
              loginStatus ? <img className={style.notLogin} src={'/assets/img/user.svg'} /> : '登录'
            }
          </div>
        </div>
      </nav>
    </header>

  );
}

export default Header
