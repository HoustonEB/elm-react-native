import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableNativeFeedback,
    PixelRatio,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper'
import {px2dp} from "./utils/px2dp";
import Button from './components/Button';
import {themeColor} from "./common/config";

export default class HomeScreen extends React.Component {

    bannerImages = [
        require('./images/banner1.jpg'),
        require('./images/banner2.png'),
        require('./images/14.jpg'),
    ];
    imgBtnImages = [
        {
            image: require('./images/trend.png'),
            text: '沸点'
        },
        {
            image: require('./images/rank.png'),
            text: '贡献榜'
        },
        {
            image: require('./images/hot.png'),
            text: '本周最热'
        }
    ];

    constructor(props) {
        super(props);
    }

    renderSwiper() {
        return (
            <View style={styles.swiperWrapper}>
                <Swiper
                    // showsButtons={true}
                    autoplayDirection={true}
                    autoplayTimeout={3}
                    autoplay={true}
                    dotColor={'#fff'}>
                    {
                        this.bannerImages.map((item, index) => {
                            return (
                                <View key={index} style={styles.slide}>
                                    <Image
                                        source={item}
                                        style={{
                                            width: Dimensions.get('window').width,
                                            height: px2dp(150),
                                            resizeMode: 'stretch'
                                        }} />
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }

    renderImageButton() {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                paddingHorizontal: px2dp(10),
                paddingVertical: px2dp(10)}}>
                {this.imgBtnImages.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            text={item.text}
                            image={item.image}
                            btnStyle={{flex: 1}}
                            textStyle={{fontSize: px2dp(14)}}
                            imageStyle={{width: px2dp(35), height: px2dp(35)}}
                            onPress={() => {console.log('press'+ index)}}
                            background= {TouchableNativeFeedback.Ripple(themeColor)}/>
                    )
                })}
            </View>
        )
    }

    renderArticle() {
        return (
            <View style={{
                backgroundColor: '#fff',
                marginTop: px2dp(20),
                paddingLeft: px2dp(10),}}>
                <View style={{
                    height: px2dp(35),
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1/PixelRatio.get()}}>
                    <Text style={{
                        fontSize: px2dp(14)
                    }}>热门文章</Text>
                </View>
                {new Array(5).fill(1).map((item, index) => {
                    return (
                        <Button
                            key={index}
                            type={'special'}
                            text={null}
                            onPress={() => {console.log('click')}}>
                            <View
                                style={{flexDirection: 'row', paddingVertical: px2dp(10)}}>
                                <View style={{marginRight: px2dp(10)}}>
                                    <Image
                                        source={require('./images/14.jpg')}
                                        style={{width: px2dp(80), height: px2dp(80)}}></Image>
                                </View>
                                <View>
                                    <Text style={{fontSize: px2dp(15)}}>Android App优化之消除卡顿</Text>
                                    <Text style={{fontSize: px2dp(12), color: 'gray'}}>318人收藏 - john-don - 2天前</Text>
                                </View>
                            </View>
                        </Button>
                    )
                })}
            </View>
        )
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                {this.renderSwiper()}
                {this.renderImageButton()}
                {this.renderArticle()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    swiperWrapper: {
        height: px2dp(150)
    },
    slide: {
        flex: 1
    }
});