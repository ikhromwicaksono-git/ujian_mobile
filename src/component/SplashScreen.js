import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux'

class SplashScreen extends React.Component {

  

  componentDidMount() {

    if(this.props.user.token.length > 1){
      return setTimeout(() => {
        this.props.navigation.navigate('TabMenu')
      },
      1000)
    }
    else{
      setTimeout(() => {
        this.props.navigation.navigate('Login')
      },
      1000)
    }
    
  }
  render(){
    return(
      <View style={styles.containerStyle}>
        <Text style = {{fontSize: 40, color: '#fff'} }>
          TomatoApp
        </Text>
        <Icon  type = 'material-community' name ='food' size={70} color='white' />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  containerStyle : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato'
  },
  inputContainerStyle: {
    marginTop: 50,
    marginBottom: 100,
    width: "100%"
  }
})
const mapStateToProps = ({user}) => {
  return{
    user
  }
}

export default connect(mapStateToProps)(SplashScreen)