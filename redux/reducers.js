import { combineReducers } from "redux"

import {
  forgotPasswordReducer,
  profileReducer,
  registerReducer,
  regSocialReducer,
  resetPasswordReducer,
  updateProfileReducer,
} from "./userReducers"

const reducer = combineReducers({
  register: registerReducer,
  profile: profileReducer,
  update: updateProfileReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  regSocial: regSocialReducer,
})

export default reducer
