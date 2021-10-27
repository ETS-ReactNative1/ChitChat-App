import React from 'react'
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from "@react-navigation/stack";

import { Login, Chat, ChatRoom } from './screens';
//login stack
const StackFlow = createStackNavigator();
export const LoginStack = () => (
    <StackFlow.Navigator
        initialRouteName="Login"
        screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
    >
        <StackFlow.Screen name="Login" component={Login} />
    </StackFlow.Navigator>
)
