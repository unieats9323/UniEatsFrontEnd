import * as React from 'react';
import {StyleSheet} from 'react-native';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs';
import Restaurants from './Restaurants';
import Menu from './Menu';
import ProfileSwitcher from './ProfileSwitcher'


export default createMaterialBottomTabNavigator(
    {
        Home : Restaurants,
        Favorites: Menu,
        Switch: ProfileSwitcher,
    },
    {
        shifting: false,
        activeColor: '#6200ee',
        inactiveColor: '#828792',
        barStyle: {
            backgroundColor: '#f8f7f9',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderStyle: 'solid',
            borderColor: '#d0cfd0',
        },
    }
);