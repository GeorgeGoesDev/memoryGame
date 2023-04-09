import React from 'react'
import HomeButton from '../HomeButton/HomeButton';
import './ScoreBoard.css'

interface ScoreBoardProps {
    score: number;
    lives: number;
    navigate: (url: string) => void;
}
const ScoreBoard = (props: ScoreBoardProps) => {
    const { score, lives, navigate } = props;

    return (
        <div >
            <HomeButton navigate={navigate} />
            <div className='score-board'>
                <p className='score-item'>Lives: {lives}</p>
                <p className='score-item'>Score: {score}</p>
            </div>
        </div>
    )
}

export default ScoreBoard