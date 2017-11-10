import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr'

moment.locale('fr');

const style = StyleSheet.create({
  view: {
    backgroundColor: globalStyle.color,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#202340',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    flexDirection: row,
    justifyContent: 'space-between'
  },
  temp: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default class Row extends React.Component {

  static propTypes = {
    day: React.PropTypes.object,
    index: React.PropTypes.number
  }

  icon () {
    const type = this.props.day.weather[0].main.toLowerCase();

  }

  day () {
    let day = moment(this.props.day.dt * 1000).format('ddd');
    return (
      <Text>{ day.toUpperCase() }</Text>
    );
  }

  date () {
    let day = moment(this.props.day.dt * 1000).format('DD/MM');
    return (
      <Text>{ day }</Text>
    );
  }

  render () {
    return (
      <View style={style.view}>
        <Text>{this.day()} {this.date()}</Text>
        <Text style={style.temp}>{this.props.day.temp.day}°C</Text>
      </View>
    )
  }
}
