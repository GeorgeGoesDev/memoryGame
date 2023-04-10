import React, { useEffect, useState } from 'react'
import HomeButton from '../HomeButton/HomeButton'
import './HighScoreBoard.css'

interface HighScoreBoardProps {
    navigate: (urk: string) => void
}
const HighScoreBoard = (props: HighScoreBoardProps) => {

    const [highscores, setHighScores] = useState<{ name: string; score: number; }[]>([]);

    useEffect(() => {
        fetch("https://europe-west1-memorygame-9de72.cloudfunctions.net/app/api/highscores", {
        })
            .then((response) => response.json())
            .then((data) => setHighScores(data))
            .catch((error) => console.log(error));
    }, []);

    const { navigate } = props
    return (
        <>

            <HomeButton navigate={navigate} />
            <div className='title'>High scores</div>
            <div className='scoretable'>
                {highscores!.map((h, i) => <div className='scoreitem rainbow_animated' key={i}><div className='name'>{h.name}:</div>   <div className='score'>{h.score}</div> </div>)}
            </div>
        </>
    )
}

export default HighScoreBoard