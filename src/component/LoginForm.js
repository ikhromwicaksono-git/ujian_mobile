import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as animaTable from 'react-native-animatable';
import { connect } from 'react-redux'
import { onUserLogin, onInputText, userLoginChecked } from '../action'
import { StackActions } from '@react-navigation/native'


class LoginForm extends React.Component {


  componentDidMount() {
    this.props.userLoginChecked()
  };
  
  
  componentDidUpdate() {
    console.log(this.props.user);
    
    if(this.props.user.token){
        this.props.navigation.dispatch(StackActions.replace("TabMenu"))
    }
  };

  onBtnLogin = () => {
      // console.log(this.props.user.authChecked);
      this.props.onUserLogin({ 
        username: this.props.LoginForm.username,
      });   
  };

  render(){
    
          return (
            <View style = {styles.containerStyle}>
              <animaTable.Text animation = {'fadeInDown'} duration = {2000}>
                <Text h3>TomatoApp</Text>
              </animaTable.Text>
              <View style = {styles.inputContainerStyle}>
                <Input
                    placeholder = 'username'
                    value = { this.props.LoginForm.username }
                    onChangeText = { (val) => this.props.onInputText('username', val) }
                    leftIcon = {
                      <Icon
                        name = 'user'
                        size = {24}
                        color = 'black'
                        type = 'feather'
                      />
                    }

                />
                
              </View>
              <Text style = {{color : 'red'}}>{this.props.LoginForm.error}</Text>
              <Button 
                title = "Enter"
                containerStyle = {{ width: '95%', marginBottom: 10}}
                buttonStyle = {{ backgroundColor: 'tomato'}}
                onPress = {this.onBtnLogin}
                // loading = {this.props.loginForm.loading}
                
              />
            </View>
          )
   
    
  }
}

const styles = StyleSheet.create({
  containerStyle : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  inputContainerStyle: {
    marginTop: 50,
    marginBottom: 100,
    width: "100%"
  }
})

const mapStatetoProps = ({ LoginForm, user }) => {
  return { LoginForm, user }
}

export default connect(mapStatetoProps,{onUserLogin,onInputText, userLoginChecked}) (LoginForm)

//export default LoginForm
  