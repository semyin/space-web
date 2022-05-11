import { ChangeEvent, ReactElement, useState } from 'react';
import style from '@/styles/Layout/Header.module.scss';
import Link from 'next/link';
import { baseName, menuList } from '@/config/constant';
import classNames from 'classnames';

const Header = (): ReactElement => {
  const [inputValue, setInputValue] = useState<string>('');

  const [isBlur, setIsBlur] = useState<boolean>(false);

  const searchContainerClass = classNames({
    [style.search]: true,
    [style.searchActive]: isBlur,
  });

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
            <ul className="list-style-none">
              {menuList.map((item) => (
                <li key={item.id}>
                  <Link href={`/articleTypes/${item.id}`}>
                    <a>{item.typeName}</a>
                  </Link>
                </li>
              ))}
              <li>
                <Link href={'/tags'}>
                  <a>标签</a>
                </Link>
              </li>
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
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
          </div>
          <div className={style.user}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
