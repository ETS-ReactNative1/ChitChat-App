import AsyncStorage from "@react-native-async-storage/async-storage"

export const setTheme = async (value) => {
    await AsyncStorage.setItem('theme', JSON.stringify(value))
}

export const getTheme = async () => {
    const val = await AsyncStorage.getItem('theme')
    return JSON.parse(val)
}