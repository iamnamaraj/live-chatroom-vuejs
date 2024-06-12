import { projectFirestore } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { ref, watchEffect } from "vue";

const getCollection = (collectionName) => {
    const documents = ref(null);
    const error = ref(null);

    const collectionRef = collection(projectFirestore, collectionName);
    const collectionQuery = query(collectionRef, orderBy('createdAt'));

    const unsubscribe = onSnapshot(
        collectionQuery,
        (snapshot) => {
            let results = [];
            snapshot.docs.forEach(doc => {
                // Ensure the createdAt field is valid
                if (doc.data().createdAt) {
                    results.push({ ...doc.data(), id: doc.id });
                }
            });
            documents.value = results;
            error.value = null;
        },
        (err) => {
            console.log(err.message);
            documents.value = null;
            error.value = 'Could not fetch data';
        }
    );

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsubscribe());
    });

    return { documents, error };
};

export default getCollection;
