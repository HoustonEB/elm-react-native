import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {themeColor} from "./common/config";
import {px2dp} from "./utils/px2dp";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{backgroundColor: '#eee'}}>
                <View style={{
                    height: px2dp(35),
                    flexDirection: 'row',
                    backgroundColor: themeColor,
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: px2dp(14)}}>我</Text>
                </View>
                <View style={{
                    height: px2dp(90),
                    marginTop: px2dp(10),
                    backgroundColor: '#fff',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingHorizontal: px2dp(20),
                        alignItems: 'center'
                    }}>
                        <Image
                            style={{
                                height: px2dp(50),
                                width: px2dp(50),
                                marginRight: px2dp(10),
                                borderRadius: px2dp(50)
                            }}
                            source={require('./images/logo_og.png')}></Image>
                        <View>
                            <Text style={{fontSize: px2dp(14)}}>YUOP</Text>
                            <Text style={{fontSize: px2dp(12), color: 'gray'}}>添加职位@添加公司</Text>
                        </View>
                        <Icon
                            name={'ios-arrow-forward'}
                            size={px2dp(40)}
                            style={{color: '#eee', flex: 1, textAlign: 'right'}}/>
                    </View>
                </View>
            </View>
        );
    }
}