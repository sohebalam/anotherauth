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
import axios from "axios"

export const userRegister = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(`/api/auth/register`, userData, config)

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}
export const clearProfile = () => async (dispatch) => {
  dispatch({
    type: UPDATE_PROFILE_RESET,
  })
}

//loadUserProfile

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST })

    const { data } = await axios.get(`/api/profile`)

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.put(`/api/profile/update`, userData, config)

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    })
    dispatch({
      type: UPDATE_PROFILE_RESET,
      payload: null,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const passwordForgot = (userData) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(`/api/auth/forgot`, userData, config)

    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    })
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const passwordReset = (userData, resetToken) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.put(
      `/api/auth/reset/${resetToken}`,
      userData,
      config
    )

    console.log(data.message)
    dispatch({
      type: RESET_PASSWORD_SUCCESS,
      payload: data.message,
    })
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const socialReg = (userData) => async (dispatch) => {
  // console.log(userData)
  try {
    dispatch({ type: SOCIAL_REG_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    console.log("here")

    const { data } = await axios.post(`/api/auth/social`, userData, config)
    console.log(data)
    dispatch({
      type: SOCIAL_REG_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: SOCIAL_REG_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
