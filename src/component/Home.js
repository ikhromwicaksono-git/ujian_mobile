import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { Header,Icon } from 'react-native-elements';
import { getHomeListPost } from '../action';
import { connect } from 'react-redux'
import PostCard from './postCard'

class Home extends React.Component {

  componentDidMount() {
      this.props.getHomeListPost()
      console.log(this.props.homeList);
  }

  

  render() {
    
    return (
      <View style = {styles.containerStyle}>
       <Header 
          leftComponent = {{
            icon: 'verified-user',
            style:{color: 'white'}
            
            
          }}
          leftContainerStyle ={{ flex : 3 }}
          containerStyle = {{
            backgroundColor : 'tomato',
            justifyContent : 'space-around',
            marginTop : Platform.OS === 'ios' ? 0 : -25,
            elevation : 2
          }}
          rightComponent={{
            text: `Hello ${this.props.user.token}`,
            style:{color: 'white'}
        
            
          }}
          rightContainerStyle={{
            flex : 3,
           
            
          }}
       />
       <View style={{flexDirection:'row', justifyContent: 'space-around',width: '100%'}}>
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
        <Icon
            type = 'material-community'
            name = 'credit-card' 
            color = 'tomato'
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2,padding: 20}}
            
          />
          <Text>
            Card
          </Text>
       </View>
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
        <Icon
            type = 'material-community'
            name = 'food-variant'
            color = 'tomato' 
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2,padding: 20}}
          />
           <Text>
            Variant
          </Text>
        </View>
         <View style={{justifyContent: 'center' , alignItems: 'center'}}>
         <Icon
            type = 'material-community'
            name = 'food-fork-drink'
            color = 'tomato'
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2,padding: 20}}
          />
           <Text>
            Recipe
          </Text>
         </View>
          <View style={{justifyContent: 'center' , alignItems: 'center'}}>
          <Icon
            type = 'material-community'
            name = "google-maps"
            color = 'tomato'
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2,padding: 20}}
          />
           <Text>
            Location
          </Text>
          </View>
          
       </View>
       <View style={{flexDirection:'row', justifyContent: 'space-around',width: '100%'}}>
       <View style={{justifyContent: 'center' , alignItems: 'center'}}>
       <Icon
            type = 'material-community'
            name = 'cart' 
            color = 'tomato'
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2, padding: 20}}
          />
           <Text>
           Cart
          </Text>
       </View>
        <View style={{justifyContent: 'center' , alignItems: 'center'}}>
        <Icon
            type = 'material-community'
            name = 'food-croissant'
            color = 'tomato'
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2,padding: 20}}
          />
           <Text>
            Croisant
          </Text>
        </View>
         
         <View style={{justifyContent: 'center' , alignItems: 'center'}}>
         <Icon
            type = 'material-community'
            name = "pizza"
            color = 'tomato'
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2,padding: 20}}
          />
           <Text>
            Pizza
          </Text>
         </View>
         <View style={{justifyContent: 'center' , alignItems: 'center'}}>
         <Icon
            type = 'material-community'
            name = "more"
            color = 'tomato'
            size = {40}
            iconStyle = {{borderRadius: 50, borderColor:'tomato', borderWidth:2,padding: 20}}
          />
           <Text>
            More
          </Text>
         </View>
         
       </View>
       <FlatList 
          data = {this.props.homeList}
          renderItem = {({item}) => <PostCard post = {item} />}
          keyExtractor = {item => item.restaurant.id.toString()}
          style = {{width: '100%'}}
          //onRefresh={() => this.props.getHomeListPost()}
          //refreshing={this.props.loading}
       />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle : {
    backgroundColor: '#fff',
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = ({user, homeList}) => {
  return {
    user: user,
    homeList : homeList.listPost
  }
}
export default connect(mapStateToProps, {getHomeListPost})(Home)