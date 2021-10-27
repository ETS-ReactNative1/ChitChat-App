import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import HOC from '../../../components/HOC'
import { setAppTheme } from '../../../store/actions/theme'
import { THEME } from '../../../constants/styles'
import { setTheme } from '../../../services/async_storage'
import { useSelector } from 'react-redux'

const index = ({ dispatch }) => {
    const currentTheme = useSelector(state => state.theme.appTheme)
    const onChangeThemePress = () => {
        const getCurrentTheme = currentTheme == THEME.dark ? THEME.light : THEME.dark
        dispatch(setAppTheme(getCurrentTheme))
        setTheme(getCurrentTheme)
    }
    return (
        <View
            style={{
                flex: 1,
                // backgroundColor: 'red'
            }}
        >
            <Text></Text>
            <TouchableOpacity
                style={{
                    backgroundColor: 'pink',
                    padding: 20,
                    margin: 10
                }}
                onPress={onChangeThemePress}
            >
                <Text>Change Theme</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HOC(index)