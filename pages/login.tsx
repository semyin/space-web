import {ChangeEvent, useState} from "react";
import {ILoginForm} from "@/types";
import {AppProps} from "next/app";
import {useCookies} from "react-cookie";
import {cookiePrefix} from "@/config/constant";

export default function Page(props: AppProps) {

  const [cookies, setCookie] = useCookies([cookiePrefix])

  const [loginAccount, setLoginAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  function login() {
    const loginForm: ILoginForm = {
      loginAccount,
      password
    }
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(loginForm)
    }).then(res => {
      setCookie(cookiePrefix, JSON.stringify({test: '1', token: '2'}), {
        path: "/",
        maxAge: 3600, // cookeie 一小时后过期
        sameSite: true,
      })
    })
  }

  return (
    <div>
      <input type="text" value={loginAccount}
             onChange={(e: ChangeEvent<HTMLInputElement>) => setLoginAccount(e.target.value)}/>
      <input type="text" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
      <button onClick={login}>登录</button>
    </div>
  )
}
