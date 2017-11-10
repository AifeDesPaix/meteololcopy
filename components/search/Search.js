import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import style from '../../Style';
import { StackNavigator } from "react-navigation";
import Lists from '../Lists'

class Search extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('../icons/lol.png')} style={{width: 40, height: 40}}/>
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      city: "test"
    }
  }

  setCity(city) {
    this.setState({city});
  }

  submit() {
    this.props.navigation.navigate('Result', {city: this.state.city});
  }

  render() {
    return (
      <View>
        <TextInput
          underlineColorAndroid='transparent'
          onChangeText={(text) => this.setCity(text)}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.state.city}
        />
        <Button color={style.color} onPress={() => this.submit()} title="Rechercher une ville"/>
      </View>
    );
  }

}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
};

export default StackNavigator({
  Search: {
    screen: Search,
    navigationOptions
  },
  Result: {
    screen: Lists
  }
})