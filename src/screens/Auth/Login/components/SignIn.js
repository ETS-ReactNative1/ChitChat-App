import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

const SignIn = ({ theme }) => {
    const [form, setForm] = useState({
        email: '',
        emailError: '',
        password: '',
        passwordError: ''
    })
    const onChangeText = (text, value) => {
        setForm(prevState => ({
            ...prevState,
            [value]: text,
        }))
    }
    console.log(form);
    return (
        <View style={{ marginVertical: 10 }}>
            {/* <Text style={{ color: theme.textColor }}>Sign In</Text> */}
            <TextInput
                style={{
                    borderColor: theme.textColor,
                    borderWidth: 1,
                    height: 40,
                    color: theme.textColor,
                    borderRadius: 5,
                    paddingLeft: 8
                }}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Email"
                placeholderTextColor={theme.textColor}
                onChangeText={text => onChangeText(text, form.email)}
            />
            <TextInput
                style={{
                    borderColor: theme.textColor,
                    borderWidth: 1,
                    height: 40,
                    color: theme.textColor,
                    borderRadius: 5,
                    paddingLeft: 8,
                    marginVertical: 15
                }}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Password"
                placeholderTextColor={theme.textColor}
                onChangeText={text => onChangeText(text, form.password)}
            />
        </View>
    )
}

export default SignIn
