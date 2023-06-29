import './App.css';
import React from 'react';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import SelectBoardForm from './components/SelectBoardForm';
import Card from './components/Card';
import { useState, useEffect } from "react";

function App() {
  const [boardsData, setBoardsData] = useState([]);

  const API =
    "https://backend-inspo-board.onrender.com/boards";

  const getAllBoards = () => {
    axios
      .get(API)
      .then((result) => {
        console.log(result.data)
        setBoardsData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllBoards();
  }, []);

  const [selectedBoard, setSelectedBoard] = useState('');
  const onNewSelect = (event) => {
    setSelectedBoard(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div className="Form-list">
          <h2>Select a Board</h2>
          <div><SelectBoardForm data={boardsData} selectedBoard={selectedBoard} onChange={onNewSelect}/></div>
          <h3>Create a New Board</h3>
          <div><NewBoardForm /></div>
          <h3>Create a New Card</h3>
          <div><NewCardForm /></div>
        </div>
        <div className='Board'>
          <h2>Board Title</h2>
          <Card/>
        </div>
      </main>
      </div>
  );
}

export default App;
