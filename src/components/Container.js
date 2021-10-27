import React from 'react'
import { StyleSheet, SafeAreaView, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useTheme } from '@react-navigation/native'

const Container = props => {
    //props ==>> SafeAreaView,KeyboardAvoidingView,ScrollView
    const { colors } = useTheme()
    const MainView = props.SafeAreaView
        ? SafeAreaView
        : View
    return (
        <>
            {props.KeyboardAvoidingView && Platform.OS === "ios"
                ? <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                    <MainView style={[styles(colors).container, props.style]}>
                        {
                            props.ScrollView
                                ? <ScrollView>
                                    {props.children}
                                </ScrollView>
                                : props.children
                        }
                    </MainView>
                </KeyboardAvoidingView>
                : <MainView style={[styles(colors).container, props.style]}>
                    {
                        props.ScrollView
                            ? <ScrollView>
                                {props.children}
                            </ScrollView>
                            : props.children
                    }
                </MainView>
            }
        </>
    )
}

export default Container

const styles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.colorPrimary
    }
})