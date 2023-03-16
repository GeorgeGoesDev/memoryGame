const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const dbName = 'memorygame';
const colName = 'highscores'
export const getHighScores = async () => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const col = db.collection(colName);
    const highscores = await col.find({}).sort({ score: -1 }).toArray();
    await client.close()
    return highscores;
}

export const setHighScore = async (nickname: string, score: number) => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const col = db.collection(colName);
    await col.insertOne({ name: nickname, score: score });
    await client.close();
}
