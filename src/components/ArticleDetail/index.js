import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {px2dp} from "../../utils/px2dp";
import Icon from 'react-native-vector-icons/Ionicons';

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderContent() {
        return (
            <View>
                <View>
                    <Image source={require('../../images/logo_og.png')}></Image>
                </View>
                <View>
                    <View><Text></Text></View>
                    <View>
                        <Text></Text>
                        <text></text>
                    </View>
                    <View>
                        <Text></Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {

        return (
            <View><Text>sd</Text></View>
            // this.renderContent()
        )
    }
}

const styles = StyleSheet.create({

});