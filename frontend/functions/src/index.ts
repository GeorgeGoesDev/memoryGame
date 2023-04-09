/* eslint-disable no-console */
import express from 'express';
import { getHighScores, setHighScore } from './highscores'
import { getImages } from './images'


const functions = require('firebase-functions')


const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

const cors = require("cors");
app.use(cors());


app.get('/', (_, res) => {
    res.status(200).send("hey")
});

app.get('/api/images', async (req, res) => {
    const images = await getImages(5);


    res.status(200).send(images)
});

app.post('/api/highscore', async (req, res) => {

    await setHighScore(req.body.name, req.body.score)
    res.status(200).send()
});
app.get('/api/highscores', async (req, res) => {
    const highscores = await getHighScores();
    res.send(highscores);
})

exports.app = functions.https.onRequest(app);