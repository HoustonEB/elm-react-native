import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
import PropTypes from 'prop-types'
import {px2dp} from "../../utils/px2dp";

export default class Button extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['normal', 'special']),
        btnStyle: PropTypes.object,
        textStyle: PropTypes.object,
        imageStyle: PropTypes.object,
        image: PropTypes.number,
        text: PropTypes.string
    };

    static defaultProps = {
        type: 'normal',
        text: 'btn',
        textStyle: {fontSize: px2dp(12)}
    };

    styles = StyleSheet.create({
        wrapper: this.props.type === 'normal' ? {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        } : {}
    });

    constructor(props) {
        super(props);
    }

    render() {
        const {
            image,
            text,
            imageStyle,
            textStyle,
            btnStyle,
            children
        } = this.props;
        const {wrapper} = this.styles;
        let btn;
        switch (Platform.OS) {
            case 'ios':
                btn = <TouchableOpacity {...this.props}>
                    <View style={wrapper}>
                        {image ? <Image style={imageStyle} source={image}></Image> : null}
                        {text ? <Text style={textStyle}>{text}</Text> : null}
                        {children}
                    </View>
                </TouchableOpacity>;
                break;
            case 'android':
                btn = <TouchableNativeFeedback {...this.props}>
                    <View style={wrapper}>
                        {image ? <Image style={imageStyle} source={image}></Image> : null}
                        {text ? <Text style={textStyle}>{text}</Text> : null}
                        {children}
                    </View>
                </TouchableNativeFeedback>;
                break;
            default:
                btn = <TouchableNativeFeedback {...this.props}>
                    <View style={wrapper}>
                        {image ? <Image style={imageStyle} source={image}></Image> : null}
                        {text ? <Text style={textStyle}>{text}</Text> : null}
                        {children}
                    </View>
                </TouchableNativeFeedback>;
        }

        return (
          <View style={btnStyle}>
              {btn}
          </View>
        );
    }
}