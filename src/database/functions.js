import Realm from 'realm';
import { getRealmApp } from './getRealApp'

export const authenticateRealmUser = async (jwt) => {
    // Create a custom jwt credential
    // const jwt = await authenticateWithExternalSystem();
    const credentials = Realm.Credentials.jwt(jwt);
    try {
        const user = await getRealmApp().logIn(credentials);
        console.log("Successfully logged in!", user);
        return user;
    } catch (err) {
        console.error("Failed to log in", err.message);
    }
}