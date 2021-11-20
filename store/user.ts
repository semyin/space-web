import {createContext, useContext} from "react";
import {UserInfo} from "@/types";

const UserContext = createContext<UserInfo>({
  userName: '',
  loginAccount: '',
  pic: '',
  status: 1,
  token: ''
})

export default UserContext
