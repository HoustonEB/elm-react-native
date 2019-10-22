import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
const axios = require('axios');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
    };

    getCurrentTime() {
        function convertTime(time) {
            if (time <= 9)
                return '0' + time;
            return time;
        }

        let date = new Date();
        return date.getFullYear() + '-' + convertTime(date.getMonth() + 1) + '-' + convertTime(date.getDate()) + 'T' + convertTime(date.getHours()) + ':' + convertTime(date.getMinutes()) + ':' + convertTime(date.getSeconds() + '.' + date.getMilliseconds() + 'Z');
    }

    componentDidMount() {
        let url = 'http://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/' + this.getCurrentTime();
        console.log(url, 'url-----------')
        axios.get(url)
            .then((res) => {console.log(res, 'res')})
            .catch(err => {console.log(err, 'err')});
        console.log('did')
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Content</Text>
                <Button
                    style={{display: 'block', color: 'red',backgroundColor: 'red'}}
                    title="Go to Profile"
                    onPress={() => navigate('Profile', {name: 'Jane'})}
                />
            </View>
        );
    }
}