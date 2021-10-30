import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useSelector } from 'react-redux';

// stacks
import { Auth, ChatRoom, Profile } from './screens';
import { LoginStack } from './stack';

import { DarkTheme, LightTheme } from '../styles/colors';
import { THEME } from '../constants/styles'
import UserNav from './UserNav';

const RootStack = createStackNavigator();
const RootNavigator = () => {
    const appTheme = useSelector(state => state.theme.appTheme);
    const user = useSelector(state => state.auth.user);
    const authLoading = useSelector(state => state.auth.authLoading);

    const theme = {
        DefaultTheme,
        colors: {
            ...appTheme === THEME.dark ? DarkTheme : LightTheme
        }
    }

    return (
        <NavigationContainer theme={theme}>
            <RootStack.Navigator>
                {
                    authLoading
                        ? <RootStack.Screen
                            name="Auth"
                            component={Auth}
                            options={{
                                headerShown: false
                            }} />
                        : user == null
                            ? <RootStack.Screen
                                name="LoginScreen"
                                // component={LoginStack}
                                component={LoginStack}
                                options={{
                                    headerShown: false
                                }}
                            />
                            : <>
                                <RootStack.Screen
                                    name="USER"
                                    component={UserNav}
                                    options={{
                                        headerShown: false
                                    }}
                                />
                                <RootStack.Screen
                                    name="ChatRoom"
                                    component={ChatRoom}
                                    options={{
                                        headerShown: false
                                    }}
                                />
                                <RootStack.Screen
                                    name="Profile"
                                    component={Profile}
                                    options={{
                                        headerShown: false,
                                        animationEnabled: true,
                                        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
                                    }}
                                />
                            </>
                }
            </RootStack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigator;