import React from 'react'
import { TouchableOpacity, Text, Image, View } from 'react-native'
import { SF_PRO_TEXT_MEDIUM } from '../../../../styles/typography'
import HOC from '../../../../components/HOC'

const Socialbutton = ({ text, source, onPress, theme }) => {
    return (
        <TouchableOpacity
            style={{
                // backgroundColor: 'grey',
                borderRadius: 10,
                paddingVertical: 10,
                marginVertical: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth: 1,
                borderColor: 'grey'
            }}
            onPress={onPress}
        >
            <Image
                source={source}
                style={{
                    height: 30,
                    width: 30,
                    marginHorizontal: 15,
                    borderRadius: 30,
                    resizeMode: 'contain'
                }}
            />
            <>
                <Text
                    style={{
                        flexGrow: 1,
                        textAlign: 'center',
                        marginLeft: -40,
                        fontFamily: SF_PRO_TEXT_MEDIUM,
                        fontSize: 16,
                        color: theme?.textSubColor
                    }}
                >{text}</Text>
            </>
        </TouchableOpacity>
    )
}

export default HOC(Socialbutton)
