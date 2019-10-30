import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import NeedLogin from './components/noticeLoginPage';

export default class DynamicScreen extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <NeedLogin navigate={navigate}/>
            </View>
        );
    }
}