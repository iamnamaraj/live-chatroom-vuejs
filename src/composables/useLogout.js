import { getAuth, signOut } from 'firebase/auth';
import { ref } from "vue";


const error = ref(null);
const auth = getAuth();
const logout = async () => {
    error.value =null;

    try {
        await signOut(auth);
    } catch (err) {
        console.log('Error signing out:', err.message);
        error.value = err.message;
    }
}

const useLogout = () => {
    return { error, logout }
}

export default useLogout;