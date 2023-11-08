import { authAdmin } from "./server";

interface validateTokenProps {
    idToken: string | undefined;
}

export const validateToken = async ({
    idToken
}: validateTokenProps): Promise<boolean> => {
    if (!idToken) return false;

    try {
        await authAdmin.verifyIdToken(idToken);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
