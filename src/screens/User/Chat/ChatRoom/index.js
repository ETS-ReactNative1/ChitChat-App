import React from 'react'
import { View, Text, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native'
import Container from '../../../../components/Container'
import AppHeader from '../../../../components/AppHeader'
import { useTheme } from '@react-navigation/native'

const index = () => {

    const { colors } = useTheme()
    const { height } = useWindowDimensions()

    const SayHello = () => {
        return <TouchableOpacity
            activeOpacity={1}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: (height / 2) - 100
            }}
        >
            <Text style={{
                color: colors?.colorTernary,
                fontSize: 16
            }}
            >Say "Hello! 👋"</Text>
        </TouchableOpacity>
    }
    return (
        <Container SafeAreaView>
            <AppHeader />
            <FlatList
                data={[]}
                renderItem={({ item }) => {
                    return null
                }}
                ListEmptyComponent={<SayHello />}
            />
        </Container>
    )
}

export default index
