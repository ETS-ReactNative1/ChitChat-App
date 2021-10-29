import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

import { USER_STATUS } from '../../../../constants/types'
import { SF_PRO_TEXT_MEDIUM, SF_PRO_TEXT_REGULAR } from '../../../../styles/typography'

const ChatItem = ({ data, theme, navigation }) => {

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
                {
                    data?.status === USER_STATUS.ONLINE && (
                        <View style={{
                            position: 'absolute',
                            bottom: 3,
                            right: 3,
                            height: 10,
                            width: 10,
                            backgroundColor: theme.onlineColor,
                            padding: 5,
                            borderRadius: 10
                        }}></View>
                    )
                }
            </View>

            <View style={{ flex: 1, marginLeft: 5, marginRight: 20, alignSelf: 'flex-start' }}>
                <Text style={{ color: theme.textColor, fontSize: 16, marginVertical: 3, fontFamily: SF_PRO_TEXT_MEDIUM }}>{data?.username}</Text>
                <Text style={{ color: theme.textSubColor, fontFamily: SF_PRO_TEXT_REGULAR }} numberOfLines={1}>{data?.message?.text}</Text>
            </View>

            {/* , borderColor: 'white', borderWidth: 1 */}
            <View style={{ alignItems: 'center', marginRight: 10 }}>
                <Text style={{ color: theme.textColor, fontSize: 14 }}>{false ? "10:09" : data?.message?.dateTime}</Text>
                {
                    !data?.message?.seen && <View
                        style={{
                            padding: 5,
                            marginVertical: 5,
                            backgroundColor: theme.colorTernary,
                            borderRadius: 10
                        }}
                    >
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

export default ChatItem