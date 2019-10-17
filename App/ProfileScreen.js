import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: '设置',
    };
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