import React from 'react'
import { View, Button, Image, Text, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Container from '../../../components/Container'
import HOC from '../../../components/HOC'
import { setLoggedinUser } from '../../../store/actions/auth';
import { isValid } from '../../../utils/validation';
import Images from '../../../assets/images';
import { SF_PRO_TEXT_SEMIBOLD } from '../../../styles/typography';
import Socialbutton from './components/Socialbutton';

GoogleSignin.configure({
    webClientId: '20527970609-a3u7ggat8349h3dovq0akhmdm1a83v3s.apps.googleusercontent.com',
});
const index = (props) => {
    const { theme, dispatch } = props


    async function onGoogleButtonPress() {
        try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            return error
        }
    }

    const onPressGoogle = () => {
        onGoogleButtonPress()
            .then((res) => {
                if (isValid(res)) {
                    dispatch(setLoggedinUser(res?.user))
                }
            })
            .catch(error => console.log('err ', error))
    }


    return (
        <Container
            SafeAreaView
        >
            <View style={{}}>
                <Image
                    source={Images.chat_app_icon}
                    style={{
                        height: 200,
                        width: '100%',
                        resizeMode: 'contain',
                        marginVertical: 10
                    }}
                />
                <Text style={{
                    fontSize: 18,
                    fontFamily: SF_PRO_TEXT_SEMIBOLD,
                    textAlign: 'center',
                    marginVertical: 10,
                    marginHorizontal: 40,
                    lineHeight: 28,
                    color: theme?.textColor
                }}>
                    A new approach to chat with around you.
            </Text>
            </View>

            <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 15 }}>
                <Socialbutton text="Login in with Google" source={Images.google} onPress={onPressGoogle} />
                <Socialbutton text="Login in with Facebook" source={Images.facebook} onPress={onPressGoogle} />
                <Socialbutton text="Login in with Twitter" source={Images.twitter} onPress={onPressGoogle} />
            </View>
        </Container>
    )
}

export default HOC(index)
