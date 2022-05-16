import {ChangeEvent, ReactElement, useState} from 'react';
import style from '@/styles/Layout/Header.module.scss';
import Link from 'next/link';
import Image from "next/image";
import {useRouter} from "next/router";

type Props = {
  current?: string
}

const Header = (props: Props): ReactElement => {

  const router = useRouter()

  const current = props.current ? props.current : router.asPath

  const [inputValue, setInputValue] = useState<string>('');

  const NavList = [
    {
      href: '/',
      text: '首页'
    },
    {
      href: '/program',
      text: '编程'
    },
    {
      href: '/achieves',
      text: '归档'
    },
    {
      href: '/links',
      text: '友链'
    },
    {
      href: '/about',
      text: '关于'
    }
  ]


  const generateNav = () => {
    return NavList.map((item, index) => {
      return (
        <li key={index}>
          <Link href={item.href}>
            <a className={current === item.href ? style.current : ''}>{item.text}</a>
          </Link></li>
      )
    })
  }

  return (
    <header className={style.navHeader}>
      <nav>
        <div className={style.left}>
          {generateNav()}
        </div>
        <div className={style.right}>

          <div className={style.search}>
            <input
              type="text"
              value={inputValue}
              placeholder={'search...'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
            <Image
              className={style.searchIcon}
              width={18}
              height={18}
              alt={''}
              title={''}
              src={'/assets/img/search.png'}/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
