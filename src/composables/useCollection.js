import { collection, addDoc } from "firebase/firestore";
import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useCollection = (collectionName) => {
    const error = ref(null);

    const addDocument = async (doc) => {
        error.value = null;

        try {
            const colRef = collection(projectFirestore, collectionName);
            await addDoc(colRef, doc);
        } catch (err) {
            console.error(err.message);
            error.value = 'Could not send the message';
        }
    };

    return { error, addDocument };
};

export default useCollection;
