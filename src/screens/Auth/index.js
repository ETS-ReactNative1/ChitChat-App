import React from 'react'
import { View, Text, Image } from 'react-native'
import HOC from '../../components/HOC'
import Container from '../../components/Container'
import Images from '../../assets/images'
import { SF_PRO_TEXT_REGULAR, SF_PRO_TEXT_SEMIBOLD } from '../../styles/typography'

const index = ({ theme }) => {
    return (
        <Container
            SafeAreaView
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <>
                <Image
                    style={{
                        height: 150,
                        resizeMode: 'contain',
                    }}
                    source={Images.chat_app_icon}
                />
                <Text style={{
                    color: theme?.textColor,
                    marginVertical: 25,
                    fontSize: 20,
                    fontFamily: SF_PRO_TEXT_SEMIBOLD
                }}>Chit Chat</Text>
            </>
        </Container>
    )
}

export default HOC(index)
