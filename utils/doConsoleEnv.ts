/**
 * @author semyin
 * @description 运行时打语音
 */
import { currentEnv} from "@/config/environment";

const doConsoleEnv = (): void => {
  console.log('%cCurrent environment is: ' + currentEnv,
    'color: #43bb88; font-size: 14px; font-weight: bold; text-decoration: underline;')
}

export default doConsoleEnv
