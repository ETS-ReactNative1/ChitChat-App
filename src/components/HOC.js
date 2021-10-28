import React from 'react'
import { useDispatch } from 'react-redux'
import { useTheme, useNavigation } from '@react-navigation/native'

const HOC = (WrappedComponent) => {
    const MyComponent = (props) => {
        const { colors } = useTheme()
        const dispatch = useDispatch()
        const navigation = useNavigation()

        return (
            <WrappedComponent
                theme={colors}
                dispatch={dispatch}
                navigation={navigation}
                {...props}
            />
        )
    }
    return MyComponent
}

export default HOC
