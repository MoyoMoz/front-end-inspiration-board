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

  const APIboard = "https://backend-inspo-board.onrender.com/boards";
  
  const APIcard = "https://backend-inspo-board.onrender.com/cards";

  const getAllBoards = () => {
    axios
      .get(APIboard)
      .then((result) => {
        setBoardsData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {getAllBoards();}, []);
  
  const [selectedBoard, setSelectedBoard] = useState([]);
  
  const onNewSelect = (event) => {
    const selectedBoardData = boardsData.find((board) => {
        return (board.id.toString() === event.target.id);
      });
      setSelectedBoard(selectedBoardData);
    };
      

  const createNewBoard = (title, owner) => {
    axios.post(APIboard, {title: title, owner: owner})
      .then((result) => {
        getAllBoards();
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const createCard = (boardId, message) => {
    axios.post(`${APIboard}/${boardId}`, {message: message})
    .then((result) => {
      const newCard = {board:result.data.card.board, id:result.data.card.id, 
                        message:result.data.card.message, likes:result.data.card.likes};
      const newBoardData = {...selectedBoard};
      newBoardData.cards.push(newCard);
      setSelectedBoard(newBoardData)
       })
    .catch((err) => {
      console.log(err);
    })  
    };

  const updateLikes = (id, likes) => {
    likes += 1;
    axios.patch(`${APIcard}/${id}`, {likes: likes})
    .then((result) => {
        const newCards = [];
        for (let card of selectedBoard.cards) {
          if (card.id === id) {
            card.likes = likes;
            newCards.push({...card});
          } else {
            newCards.push({...card});
          }
        }
        const newBoard = {...selectedBoard, cards: newCards};
        setSelectedBoard(newBoard);
    })
    .catch((err) => {
        console.log(err);
    })
};

const handleSortAZ = () => {
  const sortedCards = [...selectedBoard.cards].sort((a,b) => {
    return a.message > b.message ? 1 : -1;
  })
  const newBoard = {...selectedBoard, cards: sortedCards};
  setSelectedBoard(newBoard);
};

const handleSortZA = () => {
  const sortedCards = [...selectedBoard.cards].sort((a,b) => {
    return a.message > b.message ? -1 : 1;
  })
  const newBoard = {...selectedBoard, cards: sortedCards};
  setSelectedBoard(newBoard);
};

const removeCard = (id) => {
    axios.delete(`${APIcard}/${id}`)
    .then((result) => {
      const newCards = [];
      for (let card of selectedBoard.cards) {
        if (card.id !== id) {
          newCards.push(card);
        }
      }
        const newBoard = {...selectedBoard, cards: newCards};
        setSelectedBoard(newBoard);
    })
    .catch((err) => {
        console.log(err);
    })
};


  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div className="Form-list">
          <h2>Select a Board</h2>
          <div><SelectBoardForm data={boardsData} selectedBoardId={selectedBoard.id} onChange={onNewSelect} sortAZ={handleSortAZ} sortZA={handleSortZA}/></div>
          <h3>Create a New Board</h3>
          <div><NewBoardForm createNewBoard={createNewBoard}/></div>
          <h3>Create a New Card</h3>
          <div><NewCardForm boardId={selectedBoard?.id} createCard={createCard}/></div>
        </div>
        <div className='Board'>
          <h2>{selectedBoard?.title}</h2>
          <Board cards={selectedBoard?.cards} updateLikes={updateLikes} removeCard={removeCard}/>
        </div>
      </main>
      </div>
  );
}

export default App;
