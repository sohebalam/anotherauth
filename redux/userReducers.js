import {
  CLEAR_ERRORS,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SOCIAL_REG_FAIL,
  SOCIAL_REG_REQUEST,
  SOCIAL_REG_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_SUCCESS,
} from "./userTypes"

export const registerReducer = (
  state = { loading: false, user: null },
  action
) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true }
    case REGISTER_USER_SUCCESS:
      return { loading: false, success: true, message: action.payload.message }
    case REGISTER_USER_FAIL:
      return { loading: false, error: action.payload }
    // case CLEAR_ERRORS:
    //   return { ...state, error: null }
    default:
      return state
  }
}

export const regSocialReducer = (
  state = { loading: false, user: null },
  action
) => {
  switch (action.type) {
    case SOCIAL_REG_REQUEST:
      return { loading: true }
    case SOCIAL_REG_SUCCESS:
      return { loading: false, success: true, message: action.payload.message }
    case SOCIAL_REG_FAIL:
      return { loading: false, error: action.payload }
    // case CLEAR_ERRORS:
    //   return { ...state, error: null }
    default:
      return state
  }
}

export const profileReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOAD_USER_REQUEST:
      return { loading: true }
    case LOAD_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        isAuthenticated: true,

        dbUser: action.payload,
      }
    case LOAD_USER_FAIL:
      return { loading: false, error: action.payload }
    case UPDATE_PROFILE_RESET:
      return { ...state, user: null, success: null, isAuthenticated: null }
    default:
      return state
  }
}

export const updateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return { loading: true }
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, isUpdated: action.payload }
    case UPDATE_PROFILE_RESET:
      return { loading: false, isUpdated: false }
    case UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
      return { loading: true }
    case FORGOT_PASSWORD_SUCCESS:
      return { loading: false, message: action.payload }
    case FORGOT_PASSWORD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const resetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { loading: true }
    case RESET_PASSWORD_SUCCESS:
      return { loading: false, message: action.payload }
    case RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload }
    // case CLEAR_ERRORS:
    //   return { ...state, error: null }
    default:
      return state
  }
}
