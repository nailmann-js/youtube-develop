import { useGoogleLogin } from "react-google-login";
import { useAuth } from "../context/auth-context";
import { authenticate } from "../utils/api-client";

export default function useAuthAction() {
    const user = useAuth();
    const { signIn } = useGoogleLogin({
        onSuccess: authenticate,
        clientId: "349308199487-c4n6uu6ftsuvjnmgrd5ose149e9qne3i.apps.googleusercontent.com"
    });

    function handleAuthAction(authAction, data) {
        if (user) {
            authAction(data)     
        }  else {
            signIn();
        }
    }

    return handleAuthAction;
}

