import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebaseConfig.js';
import useStore from "../store/index";

function useResetState() {
    const state = useStore((state) => state)
    const [user, loading, error] = useAuthState(auth);


    const getDataOnce = async () => {
        const docRef = doc(db, "users", user.displayName);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data()
            // console.log("Reset Data")
            state.resetState({
                username: data.username,
                highScore: data.highScore,
                isSound: data.settings.isSound,
                isMusic: data.settings.isMusic,
            })
        } else {
            // console.log("No such document!");
        }
    }

    return () => {
        if (user) {
            getDataOnce()
            // console.log("getDataOnce()")
        } else {
            state.resetState()
            // console.log("state.resetState()")
        }
    }
}

export default useResetState