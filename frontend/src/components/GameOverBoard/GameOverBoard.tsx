import React, { useEffect, useRef, useState } from 'react'
import HighScoreBoard from '../HighScoreBoard/HighScoreBoard';
import HomeButton from '../HomeButton/HomeButton';
import './GameOverBoard.css'

interface GameOverBoardProps {
    score: number;
    navigate: (url: string) => void;

}


const GameOverBoard = (props: GameOverBoardProps) => {
    const { score, navigate } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        const dataToSend = {
            name: inputRef.current?.value,
            score: score
        }
        await fetch("https://europe-west1-memorygame-9de72.cloudfunctions.net/app/api/highscore", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend),
        })
        navigate('/highscores');
    }

    return (
        <>
            <HomeButton navigate={navigate} />
            {score <= 0 && <div className='loss-message'>Better Luck next Time!</div>}
            {score > 0 && <div>
                <h1 className='congrats'>Congratulations! You scored {score}!</h1>
                <h1 className='enter-name'>Enter your name below</h1>
                <div className='input-and-button-div'>
                    <input className='name-input' placeholder='Enter Nickname' ref={inputRef} />
                    <p onClick={handleSubmit} className="submit-button">Submit Highscore</p>
                </div>
            </div>
            }


        </>
    )
}

export default GameOverBoard