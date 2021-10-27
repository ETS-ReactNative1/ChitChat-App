import React from 'react'
import { View, Text } from 'react-native'

import Container from '../../../components/Container'
import HOC from '../../../components/HOC'

const index = (props) => {
    const { theme, dispatch } = props

    const handleIndexChange = () => dispatch(setSelectedTab(currentIndex === 0 ? 1 : 0))
    return (
        <Container SafeAreaView>
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <Text
                    style={{
                        color: theme?.textColor
                    }}
                >Sign in with google</Text>
            </View>
        </Container>
    )
}

export default HOC(index)
