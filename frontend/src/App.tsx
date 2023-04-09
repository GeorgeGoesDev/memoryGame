import React, { useState } from 'react';
import './App.css';
import MemoryGame from './components/MainGame/MainGame';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import { Route, Routes, useNavigate } from 'react-router-dom';

import HighScoreBoard from './components/HighScoreBoard/HighScoreBoard';
import Gameboard from './components/GameBoard/Gameboard';
import Home from './components/Home/Home';
import GameOverBoard from './components/GameOverBoard/GameOverBoard';
import MusicButton from './components/MusicButton/MusicButton';

function App() {
  const navigate = useNavigate();
  const [score, setScore] = useState<number>(0); // current score
  const [lives, setLives] = useState<number>(3); // current number of lives


  return (
    <div className="App">

      <MusicButton />
      <Routes>

        <Route path="/" element={<Home score={score} lives={lives} setScore={setScore} setLives={setLives} navigate={navigate} />}></Route>
        <Route path="/game" element={<Gameboard navigate={navigate} score={score} lives={lives} setScore={setScore} setLives={setLives} />}></Route>
        <Route path="/highscores" element={<HighScoreBoard navigate={navigate} />}></Route>
        <Route path="/gameover" element={<GameOverBoard navigate={navigate} score={score} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
