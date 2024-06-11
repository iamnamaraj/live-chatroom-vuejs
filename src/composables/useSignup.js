import { projectAuth } from "../firebase/config";
import { ref } from "vue";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const error = ref(null);
const signUp = async (email, password, userName)=>{
    error.value = null;

    try {
        const res = await createUserWithEmailAndPassword(projectAuth, email, password);
        if(!res){
        throw new Error('Could not complete signup process');
       }
        await updateProfile(res.user, { displayName:userName });
        error.value = null;
    } catch (err) {
        error.value = err.message;
    }

}

const useSignup =  ()=>{

    return { error, signUp}
}

export default useSignup