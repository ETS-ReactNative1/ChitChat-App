import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Container from '../../../../components/Container'
import AppHeader from '../../../../components/AppHeader'

const index = () => {
    return (
        <Container SafeAreaView>
            <AppHeader />
            <FlatList
                data={[{ type: 'user' }, { type: 'sender' }]}
                renderItem={({ item }) => {
                    return item?.type === 'user'
                        ? <Text style={{
                            color: 'red', borderWidth: 1,
                            borderColor: 'white',
                            alignSelf: 'flex-start',
                            maxWidth: '75%'
                        }}>LeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeft</Text>
                        : <Text style={{
                            color: 'green', borderWidth: 1,
                            borderColor: 'white',
                            alignSelf: 'flex-end'
                        }}>Right</Text>
                }}
            />
        </Container>
    )
}

export default index
