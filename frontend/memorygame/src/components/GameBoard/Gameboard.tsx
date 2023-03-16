import React from 'react'
import MemoryGame from '../MainGame/MainGame';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

interface GameboardProps {
    score: number;
    lives: number;
    setLives: (n: number) => void;
    setScore: (n: number) => void;
    navigate: (url: string) => void;
}
const Gameboard = (props: GameboardProps) => {
    const { score, lives, setLives, setScore, navigate } = props;


    return (
        <>
            <ScoreBoard score={score} lives={lives} navigate={navigate} />
            <MemoryGame score={score} lives={lives} setScore={setScore} setLives={setLives} navigate={navigate} />
        </>
    )
}

export default Gameboard