import {
    GoogleAuthProvider,
    signInWithPopup,
    getAuth,
    User
} from "firebase/auth";
import { auth } from "./client";

export async function googleSignIn(): Promise<User | null> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.useDeviceLanguage();
    try {
        provider.setCustomParameters({
            login_hint: "user@example.com"
        });
        const response = await signInWithPopup(auth, provider);
        return response.user;
    } catch (error) {
        console.error("TODO ERROR", error);
        return null;
    }
}

export async function googleSignOut() {
    try {
        await auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}
