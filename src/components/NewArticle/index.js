import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {px2dp} from "../../utils/px2dp";
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {themeColor} from "../../common/config";

export default class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteNum: props.data.favoriteNum
        }
    }

    renderTitleDetail() {
        const {
            titleDetailWrapper,
            titleImage,
            imageWrapper,
            authorWrapper,
            typeWrapper
        } = styles;
        const {
            author,
            viewTime,
            type
        } = this.props.data;

        return (
            <View style={titleDetailWrapper}>
                <View style={imageWrapper}>
                    <Image style={titleImage} source={require('../../images/logo_og.png')}></Image>
                </View>
                <View style={[authorWrapper]}>
                    <Text style={{color: themeColor}}>{author}</Text>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Icon name="md-heart" size={px2dp(15)} color="#e8e8e8"/>
                        <Text style={{marginLeft: px2dp(5)}}>{viewTime}</Text>
                    </View>
                </View>
                <View style={typeWrapper}>
                    <Text>{type}</Text>
                </View>
            </View>
        )
    }

    renderBox() {
        const {
            abstract
        } = this.props.data;

        return (
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#eee',
                borderWidth: px2dp(1),
                borderRadius: px2dp(4)}}>
                <Image
                    style={{width: px2dp(50), height: px2dp(50)}}
                    source={require('../../images/logo_og.png')}
                ></Image>
                <View style={{flex: 1, paddingLeft: px2dp(10)}}>
                    <Text style={{fontSize: px2dp(14)}}>{abstract}</Text>
                </View>
            </View>
        )
    }

    renderFooter() {
        return (
            <View style={{flexDirection: 'row', paddingVertical: px2dp(5)}}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: px2dp(10)}}>
                    <Icon
                        name="ios-heart-empty"
                        size={px2dp(20)} color="#41c600"
                        style={{marginRight: px2dp(5)}}
                        onPress={this.handleClickFavorite.bind(this)}/>
                    <Text>{this.state.favoriteNum}</Text>
                </View>
                <FeatherIcon name="message-square" size={px2dp(20)} color="#e8e8e8"/>
            </View>
        )
    }

    handleClickFavorite() {
        this.setState((prevState, nextProps) => {
            return {favoriteNum: ++prevState.favoriteNum}
        });
    }

    handleEntryArticleDetail() {

    }

    render() {
        const {
            title
        } = this.props.data;
        const {
            wrapper
        } = styles;

        return (
            <View style={wrapper} onPress={this.handleEntryArticleDetail.bind(this)}>
                {this.renderTitleDetail()}
                <View>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode={'tail'}
                        style={{fontSize: px2dp(14), marginVertical: px2dp(10)}}>{title}</Text>
                </View>
                {this.renderBox()}
                {this.renderFooter()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: px2dp(5),
        paddingVertical: px2dp(5),
        backgroundColor: '#fff'
    },
    titleDetailWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageWrapper: {
       width: px2dp(30)
    },
    authorWrapper: {
        flex: 1,
        paddingLeft: px2dp(10)
    },
    typeWrapper: {
        width: px2dp(40)
    },
    titleImage: {
        width: px2dp(30),
        height: px2dp(30)
    }
});