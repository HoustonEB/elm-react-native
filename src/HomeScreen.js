import React, {Component} from 'react';
import {View, Text, Button, ScrollView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {px2dp} from './utils/px2dp';
import {
    themeColor,
    btnActiveOpacity
} from "./common/config";
import HotArticle from './components/HotArticle';
import Icon from 'react-native-vector-icons/Octicons';
import NewArticle from './components/NewArticle';

const axios = require('axios');

export default class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     title: '首页',
    // };

    constructor(props) {
        super(props);
        this.state = {
            articleType: ['首页', 'Android', 'IOS', '前端', '后端'],
            active: '首页',
            showArticle: true,
            hotArticleData: [
                {
                    title: '仅两步实现汉堡导航栏效果~全新底部导航交互',
                    favorite: 888,
                    author: 'android',
                    time: '一周前',
                    image: ''
                },
                {
                    title: '仅两步实现汉堡导航栏效果~全新底部导航交互',
                    favorite: 888,
                    author: 'android',
                    time: '一周前',
                    image: ''
                },
                {
                    title: '仅两步实现汉堡导航栏效果~全新底部导航交互',
                    favorite: 888,
                    author: 'android',
                    time: '一周前',
                    image: ''
                },
                {
                    title: '仅两步实现汉堡导航栏效果~全新底部导航交互',
                    favorite: 888,
                    author: 'android',
                    time: '一周前',
                    image: ''
                }
            ],
            newArticleData: [
                {
                    image: '',
                    author: '梧桐12891289212',
                    viewTime: '3小时',
                    type: 'Android',
                    title: '使用 react native 开发了一个one客户端,文章介绍了代码中用到的思路和工具',
                    image1: '',
                    abstract: 'React native 项目进阶(redux,redux saga,redux logger)',
                    favoriteNum: 44
                }
            ]
        };
    }

    renderTabs() {
        const {
            articleWrapper,
            articleItem,
            activeItem
        } = styles;

        return (
            <ScrollView horizontal={true} style={articleWrapper}>
                {this.state.articleType.map((item, index) => {
                    return <Text
                        style={[articleItem, this.state.active === item ? activeItem : null]}
                        key={index}
                        onPress={() => this.handleClickTabs(item)}>{item}</Text>
                })}
            </ScrollView>
        )
    }

    renderHotArticleContent() {
        const {
            hotHeader,
            hotTitle,
            hotOperateIcon,
            hotArticleItems
        } = styles;
        const {hotArticleData} = this.state;
        return (
            <View>
                <View style={hotHeader}>
                    <View style={hotTitle}>
                        <Icon style={{marginRight: px2dp(5)}} name="flame" size={px2dp(16)} color={themeColor}/>
                        <Text style={{marginTop: px2dp(3), color: themeColor}}>热门推荐</Text>
                    </View>
                    <View style={hotOperateIcon}>
                        <TouchableOpacity
                            onPress={this.handleRefresh.bind(this)}
                            activeOpacity={btnActiveOpacity}
                        >
                            <Icon style={{marginRight: px2dp(10)}} name="sync" size={px2dp(20)} color="#c1c1c1"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={btnActiveOpacity}
                            onPress={this.handleCloseHotArticle.bind(this)}>
                            <Icon name="x" size={px2dp(20)} color="#c1c1c1"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginBottom: px2dp(10)}}>
                    {hotArticleData.map((item, index) => {
                        return (
                            <HotArticle key={index} data={item} navigation={this.props.navigation}></HotArticle>
                        )
                    })}
                </View>
            </View>
        );
    }

    renderNewArticle() {
        const {
            newArticleData
        } = this.state;
        // const {
        //
        // } = styles;
        return (
            <View>
                {newArticleData.map((item, index) => {
                    return (
                        <NewArticle key={index} data={item}></NewArticle>
                    )
                })}
            </View>
        )
    }

    handleClickTabs(item) {
        this.setState({
            active: item
        });
        this.setState({
            hotArticleData: this.state.hotArticleData.map(itm => {
                return Object.assign(itm, {author: item});
            })
        });
        setTimeout(() => {
            switch (item) {
                case '首页':
                    break;
                case 'Android':
                    break;
                case 'IOS':
                    break;
            }
        }, 2000);
    }

    handleCloseHotArticle() {
        this.setState({showArticle: false});
        console.log('close')
    }

    handleRefresh() {
        console.log('refresh')
    }

    render() {
        const {navigate} = this.props.navigation;
        const {showArticle} = this.state;
        const {
            homeWrapper
        } = styles;

        return (
            <ScrollView style={homeWrapper}>
                <View>{this.renderTabs()}</View>
                {showArticle ? this.renderHotArticleContent() : null}
                {this.renderNewArticle()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    homeWrapper: {
        backgroundColor: '#eee'
    },
    articleWrapper: {
        display: 'flex',
        height: px2dp(40),
    },
    articleItem: {
        flex: 1,
        width: px2dp(80),
        lineHeight: px2dp(40),
        textAlign: 'center',
        color: 'rgba(255, 255, 255, .5)',
        backgroundColor: themeColor,
        fontWeight: '800'
    },
    activeItem: {
        color: '#fff',
        borderBottomWidth: px2dp(2),
        borderBottomColor: '#fff'
    },
    hotHeader: {
        display: 'flex',
        height: px2dp(40),
        flexDirection: 'row',
        marginBottom: -px2dp(10),
        paddingHorizontal: px2dp(10),
        paddingVertical: px2dp(10),
        backgroundColor: '#fff',
        marginTop: px2dp(10)
    },
    hotTitle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    hotOperateIcon: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});