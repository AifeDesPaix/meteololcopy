import React from 'react';
import { ActivityIndicator, ListView, StyleSheet, Text, View } from 'react-native';
import * as axios from "lodash";
import style from '../Style';

export default class Row extends React.Component {

  static  navigationOptions = ({navigation}) => {
    return {
      title: `Météo / ${navigation.state.params.city}`
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      city: "",
      report: null,
    }
  }

  fetchWeather() {
    // axios.get(``)
    //   .then((response) => {
    //     this.setState({report: response.data})
    //   })
  }

  render() {
    if (this.state.report === null) {
      return (
        <ActivityIndicator color={style.color} size={"large"}/>
      );
    } else {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.report.list)}
          renderRow={(row) => <Text>{row.temp.day}</Text>}
        />

      );
    }
  }
}
