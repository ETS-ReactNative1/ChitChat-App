import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Feather'
import auth from '@react-native-firebase/auth';

import HOC from '../../../components/HOC'
import { setAppTheme } from '../../../store/actions/theme'
import { THEME } from '../../../constants/styles'
import { setTheme } from '../../../services/async_storage'
import { useSelector } from 'react-redux'
import Container from '../../../components/Container'
import Images from '../../../assets/images'
import { SF_PRO_TEXT_SEMIBOLD, SF_PRO_TEXT_MEDIUM, SF_PRO_TEXT_REGULAR } from '../../../styles/typography'
import { setLoggedinUser } from '../../../store/actions/auth';

const index = ({ dispatch, theme, navigation }) => {
    const currentTheme = useSelector(state => state.theme.appTheme)
    const loggedInUser = useSelector(state => state.auth.user)

    const onChangeThemePress = () => {
        const getCurrentTheme = currentTheme == THEME.dark ? THEME.light : THEME.dark
        dispatch(setAppTheme(getCurrentTheme))
        setTheme(getCurrentTheme)
    }

    const onLogoutPress = async () => {
        await auth().signOut()
        dispatch(setLoggedinUser(null))
    }

    const Row = ({ iconname, text, onpress }) => {
        return <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}
            onPress={onpress}
        >
            <Icon
                name={iconname}
                style={{ marginRight: 15, fontSize: 24, color: theme?.textColor }}
            />
            <Text style={{ fontSize: 16, color: theme?.textColor, fontWeight: "500" }}>{text}</Text>
        </TouchableOpacity>
    }
    return (
        <Container SafeAreaView style={{ flex: 1 }}>
            <View>
                <Image
                    source={Images.profile_image}
                    style={styles.imageStyle}
                    blurRadius={2}
                />
                <View style={styles.section1}>
                    <Text style={styles.username}>{loggedInUser?.displayName}</Text>
                    <Text style={styles.email}>{loggedInUser?.email}</Text>
                </View>
                <Ionicons
                    onPress={() => navigation?.goBack()}
                    name="arrow-back-outline"
                    style={styles.backarrow}
                />
            </View>
            <View
                style={styles.itemcontainer}
            >
                <Row iconname="key" text="Account" />
                <Row iconname="bell" text="Notifications" />
                <Row iconname="star" text="Saved" />
                <Row iconname="sun" text={`Theme (${currentTheme?.toLowerCase()})`} onpress={onChangeThemePress} />
                <Row iconname="power" text="Logout" onpress={onLogoutPress} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    section1: {
        position: 'absolute',
        bottom: 15,
        left: 15
    },
    username: {
        fontSize: 20,
        marginVertical: 8,
        color: '#FFF',
        fontFamily: SF_PRO_TEXT_SEMIBOLD
    },
    email: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: SF_PRO_TEXT_REGULAR
    },
    backarrow: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 26,
        color: '#FFF'
    },
    itemcontainer: { marginHorizontal: 20, marginVertical: 10 },
    imageStyle: {
        height: 250,
        width: '100%',
    }
})

export default HOC(index)