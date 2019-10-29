import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
    ScrollView
} from 'react-native';
import {WebView} from 'react-native-webview';
import {px2dp} from "../../utils/px2dp";
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class ArticleDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderContent() {
        const {
            navigation
        } = this.props;
        const {
            bannerImage
        } = styles;
        let data = navigation.getParam('data');
        const {
            title,
            content,
            createDate
        } = data;

        return (
            <View style={{flex: 1}}>
                <View>
                    <Image style={bannerImage} source={require('../../images/14.jpg')}></Image>
                </View>
                <View>
                    <View>
                        <Text style={{
                            fontSize: px2dp(18),
                            fontWeight: '800',
                            paddingHorizontal: px2dp(10),
                            paddingVertical: px2dp(10)
                        }}>{title}</Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: px2dp(10)
                    }}>
                        <Text style={{
                            color: 'gray',
                            borderWidth: 1 / PixelRatio.get(),
                            borderColor: 'gray',
                            display: 'flex',
                            alignItems: 'center',
                            height: px2dp(20),
                            paddingHorizontal: px2dp(5),
                            // paddingVertical: px2dp(1),
                            marginHorizontal: px2dp(10),
                            textAlign: 'center',
                            lineHeight: px2dp(20),
                            borderRadius: px2dp(4)
                        }}
                        >原创</Text>
                        <Text style={{color: 'gray'}}>{createDate}</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <WebView
                        source={{
                            uri: 'https://www.baidu.com'
                        }}
                    />
                </View>
                <View style={{
                    height: px2dp(50),
                    backgroundColor: '#fff',
                    borderTopWidth: 1/PixelRatio.get(),
                    borderColor: 'gray',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                   <View style={{flex: 1, flexDirection: 'row'}}>
                       <Icon
                           name="ios-heart-empty"
                           size={px2dp(20)}
                           color="#41c600"
                           style={{marginHorizontal: px2dp(15)}}/>
                       <FeatherIcon
                           name="message-square"
                           size={px2dp(20)}
                           color="#e8e8e8"
                           style={{marginRight: px2dp(15)}}/>
                       <Icon
                           name={'md-share'}
                           size={px2dp(20)}
                           color="#e8e8e8"/>
                   </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingRight: px2dp(15)
                    }}>
                        <Text>阅读 {11} - </Text>
                        <Text>收藏 {22} - </Text>
                        <Text>评论 {33}</Text>
                    </View>
                </View>
            </View>
        )
    }

    render() {

        return (
            this.renderContent()
        )
    }
}

const styles = StyleSheet.create({
    bannerImage: {
        width: px2dp(Dimensions.get('window').width),
        height: px2dp(150),
        resizeMode: 'stretch'
    }
});