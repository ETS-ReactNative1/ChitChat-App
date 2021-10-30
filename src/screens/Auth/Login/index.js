import React from 'react'
import { View, Button, Image, Text, NativeModules } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const { RNTwitterSignIn } = NativeModules;

import Container from '../../../components/Container'
import HOC from '../../../components/HOC'
import { setLoggedinUser } from '../../../store/actions/auth';
import { isValid } from '../../../utils/validation';
import Images from '../../../assets/images';
import { SF_PRO_TEXT_SEMIBOLD } from '../../../styles/typography';
import Socialbutton from './components/Socialbutton';
import { webClientId, twitterApikey, twitterkeySecret } from '../../../config';

RNTwitterSignIn.init(twitterApikey, twitterkeySecret).then(() =>
    console.log('Twitter SDK initialized'),
);

GoogleSignin.configure({
    webClientId: webClientId,
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

    async function onTwitterButtonPress() {
        try {// Perform the login request
            const { authToken, authTokenSecret } = await RNTwitterSignIn.logIn();

            // Create a Twitter credential with the tokens
            const twitterCredential = auth.TwitterAuthProvider.credential(authToken, authTokenSecret);

            // Sign-in the user with the credential
            return auth().signInWithCredential(twitterCredential);
        }
        catch (error) {
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

    const onPressTwitter = () => {
        onTwitterButtonPress()
            .then((res) => {
                console.log("onTwitterButtonPress = ", res);
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
                    A new approach to chat with people around you.
            </Text>
            </View>

            <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 15 }}>
                <Socialbutton text="Log in with Google" source={Images.google} onPress={onPressGoogle} />
                <Socialbutton text="Log in with Facebook" source={Images.facebook} onPress={onPressGoogle} />
                <Socialbutton text="Log in with Twitter" source={Images.twitter} onPress={onPressTwitter} />
            </View>
        </Container>
    )
}

export default HOC(index)
