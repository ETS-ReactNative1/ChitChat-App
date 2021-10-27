import React, { useEffect } from 'react'
import { View, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { useSelector } from 'react-redux'

import RootNavigator from '../../routers'
import { THEME } from '../../constants/styles'
import { DarkTheme, LightTheme } from '../../styles/colors'

const index = () => {
    const theme = useSelector(state => state.theme.appTheme)
    const appThemecolor = theme === THEME.dark ? DarkTheme.colorPrimary : LightTheme.colorPrimary
    const appBottomTopBarcolor = theme === THEME.dark ? DarkTheme.colorSecondary : LightTheme.colorSecondary
    const bottomlightIcon = theme === THEME.dark ? true : false

    useEffect(() => {
        changeNavigationBarColor(appThemecolor, !bottomlightIcon)
    }, [theme])

    return (
        <View style={{ flex: 1, backgroundColor: appThemecolor }}>
            <RootNavigator />
            <StatusBar
                barStyle={!bottomlightIcon ? "dark-content" : "light-content"}
                backgroundColor={appBottomTopBarcolor}
            />
        </View>
    )
}

export default index
