import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

// const { privateKey } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY || "");

const firebaseAdminConfig = {
    credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
    })
};

export const firebaseAppAdmin =
    getApps().length === 0 ? initializeApp(firebaseAdminConfig) : getApps()[0];
export const authAdmin = getAuth(firebaseAppAdmin);
