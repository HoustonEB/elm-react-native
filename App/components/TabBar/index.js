import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../../HomeScreen';
import DiscoveryScreen from '../../DiscoveryScreen';
import MessageScreen from '../../MessageScreen';
import MeScreen from '../../MeScreen';

const MainNavigator = createBottomTabNavigator(
    {
        HOME: {screen: HomeScreen},
        DISCOVERY: {screen: DiscoveryScreen},
        MESSAGE: {screen: MessageScreen},
        ME: {screen: MeScreen},
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'HOME') {
                    iconName = `md-home`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    // IconComponent = HomeIconWithBadge;
                } else if (routeName === 'DISCOVERY') {
                    iconName = `md-compass`;
                } else if (routeName === 'MESSAGE') {
                    iconName = `md-notifications`;
                } else if (routeName === 'ME') {
                    iconName = `md-person`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor}></IconComponent>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const App = createAppContainer(MainNavigator);

export default App;