import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { onUserLogOut } from '../action';
import  {CommonActions}  from '@react-navigation/native'

class LogOut extends React.Component {

  componentDidUpdate() {
    if(!this.props.user.token){
      return this.resetStack()
    }
      
    
  }
  resetStack = () => {
    const navigateAction = CommonActions.reset({
        index : 0,
        routes : [
          {name : 'Login'}
        ]
    });

    return this.props.rootStackNavigation.dispatch(navigateAction);
}


  render() {
    return (
      <View style = {styles.containerStyle}>
        <Button
          title = "Log out"
          containerStyle = {
            {
              marginVertical: 15,
              borderWidth: 0.5,
              borderColor: 'grey'
            }
          }
          titleStyle = {{ color: 'black' }}
          onPress = {this.props.onUserLogOut}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  containerStyle : {
    backgroundColor: '#afff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = ({ user }) => {
  return {
    user
  }
}

export default connect(mapStateToProps, { onUserLogOut })(LogOut)