import bodyParser from 'body-parser'
import express from 'express'
import { getHighScores, setHighScore } from './highscores'
import { getImages } from './images'
const cors = require('cors')

const app = express()
const port = 5000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors({
    origin: '*'
}));

app.get('/', (_, res) => {
    res.status(200).send()
});

app.get('/api/images', async (req, res) => {
    const images = await getImages(5);


    res.status(200).json(images)
});

app.post('/api/highscore', async (req, res) => {

    await setHighScore(req.body.name, req.body.score)
    res.status(200).send()
});
app.get('/api/highscores', async (req, res) => {
    const highscores = await getHighScores();
    res.json(highscores)
})

app.listen(port, () => console.log(`Running on port ${port}`))