import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home,DestinationDetail,Onboarding,NotFoundScreen } from '../screens';
import { icons,COLORS } from '../constants';
const Tab = createBottomTabNavigator()

const tabOptions = {
    showLabel: false,
    style: {
        height: 90,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height:10
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation:21
    }
}

export default function Tabs(){
    return (
        <Tab.Navigator tabBarOptions={tabOptions} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                const tintColor = focused ? COLORS.primary : COLORS.gray;
                switch (route.name) {
                    case "Home": return (
                        <Image source={icons.home} resizeMode='contain' style={{tintColor:tintColor, width:30,height:30}} />
                    )
                    case "Search": return (
                        <Image source={icons.search} resizeMode='contain' style={{tintColor:tintColor, width:30,height:30}} />
                    )
                    case "Bookmark": return (
                        <Image source={icons.bookmark} resizeMode='contain' style={{tintColor:tintColor, width:30,height:30}} />
                    )
                    case "Account": return (
                        <Image source={icons.user} resizeMode='contain' style={{tintColor:tintColor, width:30,height:30}} />
                    )
                }
            }
        })} >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Search' component={NotFoundScreen} />
        <Tab.Screen name='Bookmark' component={NotFoundScreen} />
        <Tab.Screen name='Account' component={NotFoundScreen} />
        </Tab.Navigator>
    )
}