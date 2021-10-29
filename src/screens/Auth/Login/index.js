import React from 'react'
import { View, Text, Button } from 'react-native'

import Container from '../../../components/Container'
import HOC from '../../../components/HOC'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

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


    return (
        <Container SafeAreaView>
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <Button
                    title="Google Sign-In"
                    onPress={() => onGoogleButtonPress()
                        .then((res) => console.log('res', JSON.stringify(res)))
                        .catch(error => console.log('err ', error))
                    }
                />
            </View>
        </Container>
    )
}

export default HOC(index)
