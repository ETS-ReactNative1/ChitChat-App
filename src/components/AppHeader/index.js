import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import HOC from '../HOC'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MSG } from '../../constants/text'
import { useRoute, useNavigation } from '@react-navigation/native'
import { routeNames, ROUTE_NAME } from '../../constants/route'

const index = (props) => {
    const { theme, route } = props
    const { name: routeName, params } = useRoute()
    const navigation = useNavigation()
    // console.log(params);

    const appHeaderLeft = () => {
        return routeName === ROUTE_NAME.CHAT_ROOM
            ? <Ionicons
                name="chevron-back"
                style={{ color: theme.textSubColor, fontSize: 25 }}
                onPress={() => navigation.goBack()}
            />
            : routeName === ROUTE_NAME.CHAT
                ? <Feather
                    name="edit"
                    onPress={() => navigation.navigate('Profile')}
                    style={{ color: theme.textSubColor, fontSize: 25 }}
                />
                : null
    }

    const appHeaderCenter = () => {
        return routeName === ROUTE_NAME.CHAT
            ? <Text style={{ color: theme.textColor, fontSize: 16 }}>{`1 ${MSG.new_message}`}</Text>
            : routeName === ROUTE_NAME.CHAT_ROOM
                ? <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: theme.textColor, marginTop: 15, fontSize: 16 }}>{params?.username}</Text>
                    <Text style={{ color: theme.textSubColor, marginTop: 5 }}>{params?.status}</Text>
                    <Text></Text>
                </View>
                : null
    }

    const appHeaderRight = () => {
        return routeName === ROUTE_NAME.CHAT
            ? <Feather
                name="search"
                style={{ color: theme.textSubColor, fontSize: 25 }}
            />
            : routeName === ROUTE_NAME.CHAT_ROOM
                ? <Ionicons
                    name="call-outline"
                    style={{ color: theme.colorTernary, fontSize: 25 }}
                />
                : null
    }
    return (
        <View style={[
            styles(theme).containerStyle,
            routeName === ROUTE_NAME.CHAT && styles(theme).headerBorders
        ]}>
            {appHeaderLeft()}
            {appHeaderCenter()}
            {appHeaderRight()}
        </View>
    )
}

const styles = theme => StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: theme.colorSecondary,
    },
    headerBorders: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    }
})

export default HOC(index)
