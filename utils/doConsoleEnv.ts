/**
 * @author semyin
 * @description 运行时打印环境
 */
import {currentEnv, NODE_ENV} from "@/config/environment";

const doConsoleEnv = (): void => {
  console.log('%cCurrent environment: ' + currentEnv,
    'color: #43bb88; font-size: 14px; font-weight: bold; text-decoration: underline;')
  console.log('%cCurrent NODE_ENV: ' + NODE_ENV,
    'color: #43bb88; font-size: 14px; font-weight: bold; text-decoration: underline;')
}

export default doConsoleEnv
