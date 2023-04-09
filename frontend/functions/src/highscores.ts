import { dbConnection } from './firebaseConfig';
import { addDoc, collection, getDocs, orderBy, query } from 'firebase/firestore';



const collectionName = 'highscores';
const highscoresRef = collection(dbConnection, collectionName);

export const getHighScores = async () => {
    const q = query(highscoresRef, orderBy('score', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc: any) => doc.data());
}

export const setHighScore = async (nickname: string, score: number) => {
    await addDoc(highscoresRef, { name: nickname, score: score });
}