import { 
  inputText, 
  userLoginFailed,
  loadingLogin,
  userLoginSuccess,
} from '../action/types';

const INITIAL_STATE = {
  username: ''
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case  inputText :
        return { ...state, [action.payload.props]: action.payload.value }
    case userLoginFailed : 
      return {...state, error : action.payload, loading : false }
    case  loadingLogin : 
      return { ...state, loading : true, error: '' }
    case userLoginSuccess :
      return INITIAL_STATE
    default :
      return state
  }
} 