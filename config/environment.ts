/**
 * @author semyin
 * @description 环境变量
 */

const currentEnv: string | undefined = process.env.NEXT_PUBLIC_APP_ENV

const isProd: boolean = currentEnv === 'pro'

const isDev: boolean = currentEnv === 'dev'

const isTest: boolean = currentEnv === 'test'


export {
  currentEnv,
  isDev,
  isTest,
  isProd
}
