import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../component/Home';
import LogOut from '../component/LogOut'
import { Icon } from 'react-native-elements';
//import PostPhoto from '../components/postPhotos'
const Tab = createBottomTabNavigator();

const SettingPage = (nav) => {
  return ({ navigation }) => <LogOut navigation={navigation} rootStackNavigation={nav} />
}


export default (props, navigation) => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } 
            else if (route.name === 'LogOut') {
              iconName = 'restaurant'
            } 


            // You can return any component that you like here!
            return <Icon name={iconName} size={35} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          showLabel: false
        }}
      >
        <Tab.Screen name="Home" component={ Home } />
        <Tab.Screen name="LogOut" >
          {SettingPage(navigation)}
        </Tab.Screen>

       
      </Tab.Navigator>
  )
}