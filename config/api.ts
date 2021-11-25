import {isDev} from "@/config/environment";

export const apiDomain: string = isDev ? 'http://localhost:5735' : 'http://localhost:5735'

export const appDomain: String = isDev ? 'http://localhost:5630' : 'http://localhost:5630'

export const requestPrefix = '/api'


