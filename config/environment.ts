/**
 * @author semyin
 * @description 环境变量
 */
const NODE_ENV: string | undefined = process.env.NODE_ENV

const currentEnv: string | undefined = process.env.NEXT_PUBLIC_APP_ENV

const isProd: boolean = currentEnv === 'pro'

const isDev: boolean = currentEnv === 'dev'

const isTest: boolean = currentEnv === 'test'

const isServer: boolean = !process.browser


export {
  NODE_ENV,
  currentEnv,
  isDev,
  isTest,
  isProd,
  isServer
}
