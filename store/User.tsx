import React, {createContext, ReactElement, useContext, useReducer} from "react";
import {IUserInfo} from "@/types";

type UserAction = {
  type?: string,
  payload: IUserInfo
}

type UserReducer = React.Reducer<IUserInfo, UserAction>

const initialState: IUserInfo = {
  userName: '',
  token: '',
  status: 1,
  loginAccount: '',
  pic: ''
}

const reducer: UserReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOGIN_INFO':
      const {userName, loginAccount, status, pic, token} = action.payload
      return {
        // ...state,
        userName, loginAccount, status, pic, token
      }
    default:
      return state;
  }
}

// const UserStateContext = createContext<IUserInfo>(initialState)
export const UserStateContext = createContext<{state: IUserInfo, dispatch: React.Dispatch<UserAction>}>({state: initialState, dispatch: (action) => action})
// const UserDispatchContext = createContext<React.Dispatch<UserAction>>((action) => reducer)
const UserDispatchContext = createContext<React.Dispatch<UserReducer>>(() => reducer)

export const UserProvider = ({children}: { children: React.ReactNode }) => {

  const [state, dispatch] = useReducer<UserReducer>(reducer, initialState)

  return (
    // <UserDispatchContext.Provider value={{state, dispatch}}>
      <UserStateContext.Provider value={{state, dispatch}}>
        {children}
      </UserStateContext.Provider>
    // </UserDispatchContext.Provider>

  )
}

export const useIUserInfo = () => useContext(UserStateContext)
export const useUserDispatch = () => useContext(UserDispatchContext)
