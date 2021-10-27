import React from 'react'
import { View, Text } from 'react-native'
import HOC from '../../components/HOC'

const index = ({ theme }) => {
    return (
        <View>
            <Text style={{
                color: theme?.textColor
            }}>Auth Loading screen</Text>
            <Text style={{
                color: theme?.textColor
            }}>wait for 2 seconds</Text>
        </View>
    )
}

export default HOC(index)
