import './App.css';
import React from 'react';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';
import SelectBoardForm from './components/SelectBoardForm';
import { useState, useEffect } from "react";

function App() {
  const [boardsData, setBoardsData] = useState([]);

  const API =
    "https://backend-inspo-board.onrender.com/boards";

  const getAllBoards = () => {
    axios
      .get(API)
      .then((result) => {
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
      setSelectedBoard(event.target.id);
  };

  const createNewBoard = (title, owner) => {
    axios.post(API, {title: title, owner: owner})
      .then((result) => {
        getAllBoards();
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const selectedBoardData = boardsData.find((board) => {
    return (board.id.toString() === selectedBoard);
  })

  //console.log(selectedBoardData);

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
          <div><NewBoardForm createNewBoard={createNewBoard}/></div>
          <h3>Create a New Card</h3>
          <div><NewCardForm /></div>
        </div>
        <div className='Board'>
          <h2>{selectedBoardData?.title}</h2>
          <Board cards={selectedBoardData?.cards} />
        </div>
      </main>
      </div>
  );
}

export default App;
