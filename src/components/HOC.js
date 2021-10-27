import React from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from '@react-navigation/native'

const HOC = (WrappedComponent) => {
    const MyComponent = (props) => {
        const { colors } = useTheme()
        const dispatch = useDispatch()

        return (
            <WrappedComponent
                theme={colors}
                dispatch={dispatch}
                {...props}
            />
        )
    }
    return MyComponent
}

export default HOC
