import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { io } from "socket.io-client";

import Container from '../../../components/Container'
import AppHeader from '../../../components/AppHeader'
import { userdata } from '../../../constants/data'
import ChatItem from './components/ChatItem'
import HOC from '../../../components/HOC'

const index = (props) => {

    const { theme, dispatch } = props;

    useEffect(() => {
    }, [])

    return (
        <Container SafeAreaView>
            <AppHeader />
            <FlatList
                data={userdata}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ChatItem data={item} theme={theme} navigation={props?.navigation} />
                )}
            />
        </Container>
    )
}

export default HOC(index)
