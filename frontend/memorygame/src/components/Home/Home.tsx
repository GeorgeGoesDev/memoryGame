import React, { useState } from 'react'
import './Home.css'
import memorygamelogo from './memorygamelogo.png'
const clickSound = require('./click.mp3');
interface HomeProps {
    score: number;
    lives: number;
    setLives: (n: number) => void;
    setScore: (n: number) => void;
    navigate: (url: string) => void;

}

const Home = (props: HomeProps) => {

    const { score, lives, setLives, setScore, navigate } = props
    const handlePlayClick = () => {
        audio.play();
        setLives(3);
        setScore(0);
        navigate('/game')
    }
    const handleHighScoresClick = () => {
        audio.play();
        navigate('/highscores')
    }
    const [audio] = useState(new Audio(clickSound));


    return (
        <div className='home-main'>
            <img className='logo' src={memorygamelogo} alt="" />
            {/* <h1 className="title rainbow_animated"> Memory Game </h1> */}

            <div className='menu'>
                <div className='play-button menu-button' onClick={handlePlayClick}>Play</div>
                <div className='highscores-button menu-button' onClick={handleHighScoresClick}>Highscores</div>
            </div>
        </div>
    )
}

export default Home