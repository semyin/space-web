import type {NextPage} from "next";
import {ChangeEvent, useState} from "react";
import {LoginForm} from "@/types";
import {AppProps} from "next/app";

export default function Page(props: AppProps) {

  console.log(props)
  const [loginAccount, setLoginAccount] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function login() {
    const loginForm: LoginForm = {
      loginAccount,
      password
    }
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(loginForm)
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
