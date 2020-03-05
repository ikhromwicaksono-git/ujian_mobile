import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { fillListPost } from './types';

export const getHomeListPost = () => {
  return async (dispatch) => {
    try {
          const token = await AsyncStorage.getItem('usertoken');
          console.log(token);
          const response = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating', {
                                          headers : {
                                            "user-key": "74b25737566cc5cfe2644bcdf3265f8e"
                                          }
                                       })
          console.log(response.data.restaurants[0].restaurant.thumb);
          
          dispatch({
            type : fillListPost,
            payload : response.data.restaurants
          })

    }
    catch(err) {
      console.log(err);
    }
  }
}



