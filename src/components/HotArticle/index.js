import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableNativeFeedback} from 'react-native';
import {px2dp} from "../../utils/px2dp";
import Icon from 'react-native-vector-icons/Ionicons';

export default class HotArticle extends Component {
    constructor(props) {
        super(props);
    }

    handleClickEntryDetail() {
        const {
            navigation
        } = this.props;

        navigation.navigate('ArticleDetail');
    }

    render() {
        const {
            wrapper,
            leftWrapper,
            rightWrapper,
            rightImage,
            title,
            titleWrapper,
            icon
        } = styles;
        const {data, style} = this.props;

        return (
            <TouchableNativeFeedback onPress={this.handleClickEntryDetail.bind(this)}>
                <View style={[wrapper, style]}>
                    <View style={leftWrapper}>
                        <View style={titleWrapper}>
                            <Text style={title} numberOfLines={1} ellipsizeMode={'middle'}>{data.title}</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Text><Icon name="md-heart" size={px2dp(15)} color="#e8e8e8"/></Text>
                            <Text style={icon}>{data.favorite}</Text>
                            <Text><Icon name="md-person" size={px2dp(15)} color="#e8e8e8"/></Text>
                            <Text style={icon}>{data.author}</Text>
                            <Text><Icon name="md-clock" size={px2dp(15)} color="#e8e8e8"/></Text>
                            <Text style={icon}>{data.time}</Text>
                        </View>
                    </View>
                    <View style={rightWrapper}>
                        <Image style={rightImage} source={require('../../images/logo_og.png')}></Image>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create(
    {
        wrapper: {
            display: 'flex',
            height: px2dp(100),
            flexDirection: 'row',
            paddingVertical: px2dp(10),
            paddingHorizontal: px2dp(10),
            alignItems: 'center',
            backgroundColor: '#fff'
        },
        leftWrapper: {
            flex: 3,
            paddingRight: px2dp(5)
        },
        titleWrapper: {
            marginBottom: px2dp(10)
        },
        title: {
            fontSize: px2dp(14),
        },
        icon: {
            marginHorizontal: px2dp(5)
        },
        rightWrapper: {
            flex: 1,
        },
        rightImage: {
            width: px2dp(80),
            height: px2dp(80),
            resizeMode: 'contain'
        }
    }
);