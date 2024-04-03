import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string)
{
    const querySnapshot = await getDocs(collection(firestore, collectionName));

    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}