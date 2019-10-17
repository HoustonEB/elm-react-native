import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
    };
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