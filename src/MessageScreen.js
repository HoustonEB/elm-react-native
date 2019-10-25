import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class MessageScreen extends React.Component {
    // static navigationOptions = {
    //     title: '消息',
    // };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile Content</Text>
                <Button
                    title="Go to Home"
                    onPress={() => navigate('Home', {name: 'Jane'})}
                />
            </View>
        );
    }
}