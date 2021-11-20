import {ChangeEvent, ReactElement, useState} from "react";
import style from '@/styles/Layout/Header.module.scss'
import Link from "next/link";
import {baseName} from "@/config/constant";
import {IMenu} from "@/types";

const Header = ({menu}: { menu: Array<IMenu> }): ReactElement => {

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
            <ul>
              {menu.map(item => (
                <li key={item.id}>{item.typeName}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.search}>
            <input
              type="text"
              value={inputValue}
              // onChange={(e: FormEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value)}/>
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header
