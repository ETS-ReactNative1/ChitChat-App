import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute, useTheme } from '@react-navigation/native';

import { Camera, Calls, Contacts, Chat } from './screens';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default (props) => {
    const { colors } = useTheme()
    const tabColor = colors.colorPrimary
    const tabIconActiveColor = colors.colorTernary
    const tabIconInActiveColor = colors.textSubColor

    return (
        <Tab.Navigator
            initialRouteName="ChatsTab"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: tabColor,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: 55
                },
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen
                name="ChatsTab"
                component={Chat}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialIcons
                            name="chat-bubble-outline"
                            style={{ color: focused ? tabIconActiveColor : tabIconInActiveColor, fontSize: 25 }}
                        />
                    )
                })}
            />
            <Tab.Screen
                name="CameraTab"
                component={Camera}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather
                            name="camera"
                            style={{ color: focused ? tabIconActiveColor : tabIconInActiveColor, fontSize: 25 }}
                        />
                    )
                })}
            />
            <Tab.Screen
                name="CallsTab"
                component={Calls}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name="call-outline"
                            style={{ color: focused ? tabIconActiveColor : tabIconInActiveColor, fontSize: 25 }}
                        />
                    )
                })}

            />
            <Tab.Screen
                name="ContactsTab"
                component={Contacts}
                options={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather
                            name="users"
                            style={{ color: focused ? tabIconActiveColor : tabIconInActiveColor, fontSize: 25 }}
                        />
                    )
                })}
            />
        </Tab.Navigator>
    );
}
