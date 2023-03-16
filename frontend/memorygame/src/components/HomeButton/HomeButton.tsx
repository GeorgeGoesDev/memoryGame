import React, { useState } from 'react'
import './HomeButton.css'
const clickSound = require('./click.mp3');

interface HomeButtonProps {
    navigate: (url: string) => void;
}

const HomeButton = (props: HomeButtonProps) => {
    const { navigate } = props
    const [audio] = useState(new Audio(clickSound));


    const handleClick = () => {
        audio.play();
        navigate('/');
    }

    return (
        <p className='back-image' onClick={handleClick}>HOME</p>
    )
}

export default HomeButton