import React, { useState, useEffect } from "react";
import './MainGame.css';
import cardimg from './cardback.png'
const cardSound = require('./cardSound.mp3');
const dingSound = require('./ding.mp3')

interface Card {
    value: string;
    flipped: boolean;
}

interface GameProps {
    score: number;
    lives: number;
    setLives: (n: number) => void;
    setScore: (n: number) => void
    navigate: (url: string) => void;
}



const MemoryGame = (props: GameProps) => {
    const { score, lives, setLives, setScore, navigate } = props;
    const [cards, setCards] = useState<Card[]>([]);
    const [selected, setSelected] = useState<number[]>([]);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [audio] = useState(new Audio(cardSound));
    const [dingAudio] = useState(new Audio(dingSound));
    const cardSoundPlay = () => {
        audio.play();
    }
    const dingPlay = () => {
        dingAudio.play();
    }

    const moreCards = (reset: boolean) => {
        if (isMounted && reset) {
            fetch("http://localhost:5000/api/images")
                .then((response) => response.json())
                .then((data) => {
                    const newCards: Card[] = [];
                    data.urls.forEach((card: string) => {
                        newCards.push({ value: card, flipped: false });
                        newCards.push({ value: card, flipped: false });
                    });
                    for (let i = newCards.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
                    }
                    setCards(newCards);
                    setTimeout(() => {
                        cardSoundPlay();
                        const flippedCards = newCards.map((card) => {
                            return { ...card, flipped: true };
                        });
                        setCards(flippedCards);
                        setTimeout(() => {
                            const unflippedCards = flippedCards.map((card) => {
                                return { ...card, flipped: false };
                            });
                            cardSoundPlay();
                            setCards(unflippedCards);
                        }, 3000);
                    }, 1000);
                })
                .catch((error) => console.log(error));
        }
    }

    useEffect(() => {
        setIsMounted(true);
        if (lives <= 0) {
            navigate('/gameover')
        }
    }, [lives])

    useEffect(() => {
        moreCards(true)
    }, [isMounted]);


    const handleCardClick = (index: number) => {

        if (selected.length === 2 || cards[index].flipped) {
            return;
        }
        cardSoundPlay();
        const newCards = [...cards];
        newCards[index].flipped = true;
        setCards(newCards);
        setSelected([...selected, index]);
        if (selected.length === 1 && cards[selected[0]].value === cards[index].value) {
            dingPlay();
            setScore(score + 1);

            if (cards.every((card) => card.flipped) && lives > 0) {
                moreCards(true)
            }
            setSelected([]);


        } else if (selected.length === 1) {
            setLives(lives - 1);

            setTimeout(() => {
                const newCards = [...cards];
                newCards[selected[0]].flipped = false;
                newCards[index].flipped = false;
                setCards(newCards);
                setSelected([]);
            }, 1000);
        }

    }


    return (
        <div>
            <div className="cardBoard" style={{}}>
                {cards.map((card, index) => (
                    <div key={index} className="card" onClick={() => handleCardClick(index)}>
                        <img className="cardImg" alt="" src={card.flipped ? card.value : cardimg}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MemoryGame;