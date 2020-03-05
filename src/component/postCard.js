import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';


export default ({ post }) => {
    return (
      <Card style = {{width : '100%', alignSelf : "center"}}>
            <CardItem >
              <Left>
                <Thumbnail source={{uri: post.thu }} />
                <Body>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: `${post.restaurant.thumb}`}} style={{height: 350, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Text>{post.restaurant.user_rating.aggregate_rating}</Text>
                <Text>{post.restaurant.name}</Text>
              </Left>
            </CardItem>
          </Card>
    )
}