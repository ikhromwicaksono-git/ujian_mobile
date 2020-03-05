import { inputText,  userLoginFailed, loadingLogin, userLoginSuccess } from './types';
import AsyncStorage from '@react-native-community/async-storage'


export const onInputText = (props, value) => {
  return {
    type: inputText,
    payload: {
      props, value
    }
  }
};


export const onErrorLogin = (value) => {
  return {
    type: userLoginFailed,
    payload: value
  }
};

export const onUserLogin = ({ username }) => {
  return async (dispatch) => {
    try{
        dispatch({ type: loadingLogin })
        let user = 'ikhrom'
        const res = await user === username
        
        await AsyncStorage.setItem('username', username)
        dispatch({
          type: userLoginSuccess,
          payload: username
        })
        if(!res){
          return  dispatch({
            type: userLoginFailed,
            payload: 'Login Failed'
          })
        }
      
        const userTokenName = await AsyncStorage.getItem('username')
        console.log('username : ', userTokenName);
        
    }
    catch(err){
        dispatch({
          type: userLoginFailed,
          payload: 'Login Failed'
        })
      
     
    }
  }
};

export const userLoginChecked =  () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem('username');
      if(!token) {
        return dispatch({ type: userLoginFailed })
      }
      console.log(token,'jhjhj');
      dispatch({
        type : userLoginSuccess,
        payload : token
      })
    }
    catch(err) {
        dispatch({ type : userLoginFailed })
    }
  }  
};

export const onUserLogOut = () => {
    return async (dispatch) => {
      await AsyncStorage.removeItem('username')
      dispatch({
        type : userLoginFailed
      })
    }
}