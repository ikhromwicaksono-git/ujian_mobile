import {userLoginFailed, userLoginSuccess} from '../action/types'

const INITIAL_STATE = {
  authChecked : false,
  token: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case  userLoginSuccess :
        return { token : action.payload, authChecked : true }
    case userLoginFailed :
        return { authChecked : true }
    default :
        return state
  }
} 