import React from 'react';
import Search from "./components/search/Search";
import About from "./components/About";
import { TabNavigator } from 'react-navigation';
import { StatusBar, View } from "react-native";

const Tabs = TabNavigator({
  About: {screen: About},
  Search: {screen: Search},
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    pressColor: '#a5f',
    style: {
      backgroundColor: '#a2273c',
      borderTopWidth: 1,
      borderColor: '#f5e'
    }
  }
});

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <Tabs/>
      </View>
    );
  }
}
