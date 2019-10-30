import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Button from '../Button';
import {themeColor} from "../../common/config";
import {px2dp} from "../../utils/px2dp";

export default class NeedLogin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View>
                <Text style={{fontSize: px2dp(14), marginBottom: px2dp(5)}}>currently there are no any messages</Text>
                <Button
                    text={'登录 / Sign-in'}
                    textStyle={{color: themeColor, fontSize: px2dp(14)}}
                    onPress={() => {this.props.navigate('HOME')}}/>
            </View>
        );
    }
}