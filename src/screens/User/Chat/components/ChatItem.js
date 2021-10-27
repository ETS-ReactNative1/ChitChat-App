import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

import { USER_STATUS } from '../../../../constants/types'

const ChatItem = ({ data, theme }) => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate('ChatRoom', data)
    }
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10, marginVertical: 5, }} onPress={onPress}>
            <View style={{ marginHorizontal: 10 }}>
                <Image
                    source={{ uri: data?.imageUrl }}
                    style={{
                        height: 55,
                        width: 55,
                        borderRadius: 55 / 2
                    }}
                />
                {data?.status === USER_STATUS.ONLINE && <Entypo
                    name="dot-single"
                    style={{
                        color: theme.onlineColor,
                        position: 'absolute',
                        bottom: 3,
                        right: 3,
                        fontSize: 10,
                        backgroundColor: theme.onlineColor,
                        borderRadius: 10 / 2
                    }}
                />}
            </View>

            <View style={{ flex: 1, marginLeft: 5, marginRight: 20, alignSelf: 'flex-start' }}>
                <Text style={{ color: theme.textColor, fontSize: 16, marginVertical: 3 }}>{data?.username}</Text>
                <Text style={{ color: theme.textColor }} numberOfLines={1}>{data?.message?.text}</Text>
            </View>

            {/* , borderColor: 'white', borderWidth: 1 */}
            <View style={{ alignItems: 'center', marginRight: 10 }}>
                <Text style={{ color: theme.textColor, fontSize: 14 }}>{false ? "10:09" : data?.message?.dateTime}</Text>
                {!data?.message?.seen && <Entypo
                    name="dot-single"
                    style={{
                        marginVertical: 5,
                        color: theme.colorTernary,
                        backgroundColor: theme.colorTernary,
                        fontSize: 10,
                        borderRadius: 10 / 2
                    }}
                />}
            </View>
        </TouchableOpacity>
    )
}

export default ChatItem