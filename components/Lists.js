import React from 'react';
import {ActivityIndicator, Image, ListView, StyleSheet, Text, View} from 'react-native';
import style from '../Style';
import axios from 'axios';

export default class Lists extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/lol.png')} style={{width: 40, height: 40}}/>
            }
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            city: props.navigation.state.params.city,
            report: null,
        };

        this.fetchWeather();
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=da47b844bb848726ea01a404b7148099`)
            .then(response => {
                // JSON responses are automatically parsed.
                // console.log(response.data.main.temp);
                // console.log(this);
                this.setState({report: response.data})
                // this.a();
            })
            .catch(e => {
                // this.errors.push(e)
                console.log(e);
            })

        // const a = axios.get('http://samples.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1');
        // console.log(a);
        // a.then((response) => {
        //     console.log(response);
        //     // this.setState({report: response.data})
        // })
        //     .catch(err => {
        //         alert(err);
        //         console.log(err);
        //     });
        // console.log(this.state.report);
    }

    // setState(state) {
    //     this.state = state;
    //     this.render();
    // }

    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={style.color} size={"large"}/>
            );
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return <ListView
                dataSource={ds.cloneWithRows(this.state.report.list)}
                renderRow={(row) => <Text>{row.temp.day}</Text>}
            />;
            // console.log(this.state.report.main.temp);
            // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            // return (<Text>{this.state.report.main.temp}</Text>);
        }
    }
}
