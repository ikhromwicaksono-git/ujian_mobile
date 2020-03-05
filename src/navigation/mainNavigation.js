import React from 'react';
import SplashScreen from '../component/SplashScreen';
import LoginForm from '../component/LoginForm'
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './tabNav';

const stack = createStackNavigator()

export default (props) => {
  
    return (
     
        <stack.Navigator 
          initialRouteName = "Splash"
          //screenOptions = {{headerShown: false}}
          headerMode="none"
          >
          <stack.Screen name = 'Splash' component = {SplashScreen}/>
          <stack.Screen 
            name = 'Login' 
            component = {LoginForm} 
            //initialParams = {{ab : 'cuka'}}
            //options = {({route}) => ({title: route.params.ab})}
          />
          <stack.Screen name = "TabMenu" component = { TabNav}/>
        </stack.Navigator>
     
    )
  
}

