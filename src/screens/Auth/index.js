import React, { useEffect } from 'react'
import { Text, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import auth from '@react-native-firebase/auth';

import HOC from '../../components/HOC'
import Container from '../../components/Container'
import Images from '../../assets/images'
import { SF_PRO_TEXT_SEMIBOLD } from '../../styles/typography'
import { setLoggedinUser, setAuthLoading } from '../../store/actions/auth'
import { setAppTheme } from '../../store/actions/theme'
import { getTheme } from '../../services/async_storage'
import { THEME } from '../../constants/styles'

const index = ({ theme }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    const onAuthStateChanged = async (user) => {
        await dispatch(setLoggedinUser(user))
        const themeInStorage = await getTheme()
        const setCurrentAppTheme = themeInStorage == THEME.dark ? THEME.dark : THEME.light
        dispatch(setAppTheme(setCurrentAppTheme))
        dispatch(setAuthLoading(false))
    }

    return (
        <Container
            SafeAreaView
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <>
                <Image
                    style={{
                        height: 150,
                        resizeMode: 'contain',
                    }}
                    source={Images.chat_app_icon}
                />
                <Text style={{
                    color: theme?.textColor,
                    marginVertical: 25,
                    fontSize: 20,
                    fontFamily: SF_PRO_TEXT_SEMIBOLD
                }}>Chit Chat</Text>
            </>
        </Container>
    )
}

export default HOC(index)
