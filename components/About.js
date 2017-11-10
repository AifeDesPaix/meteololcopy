import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import style from '../Style';

export default class About extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('./icons/lol.png')} style={{width: 40, height: 40}}></Image>
    }
  };

  search() {
    this.props.navigation.navigate('Search');
  }

  render() {
    return (
      <View style={style.view}>
        <Text style={style.title}>A propos de ta soeur</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dicta eaque error eum
          expedita itaque laudantium magni nesciunt quae ratione, rem ullam veniam vero voluptatem? Corporis natus
          necessitatibus quae?
        </Text>
        <Button color={style.color} onPress={() => this.search()} title="ntm" />
      </View>
    )
  }


}