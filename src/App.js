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
    console.log(event.target.id);
    const selectedBoardData = boardsData.find((board) => {
        return (board.id.toString() === event.target.id);
      });
    // let selectedBoardData = [];
    // for (let board of boardsData) {
    //   if (event.target.id === board.id.toString) {
    //     selectedBoardData = {...board};
    //     console.log(selectedBoardData);
    //   };  
      console.log(selectedBoardData);
      setSelectedBoard(selectedBoardData);
    };
      

    // selectedBoardData = boardsData.find((board) => {
    //   return (board.id.toString() === selectedBoard);
    // });

  const createNewBoard = (title, owner) => {
    axios.post(APIboard, {title: title, owner: owner})
      .then((result) => {
        getAllBoards();
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const updateLikes = (id, likes) => {
    likes += 1;
    axios.patch(`${APIcard}/${id}`, { likes: likes})
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
        //reconstruct board w/ new cards 
        const newBoard = {...selectedBoard, cards: newCards};
        setSelectedBoard(newBoard);
    })
    .catch((err) => {
        console.log(err);
    })
};

// const getOneBoardsCards = (id) => {
//   axios
//     .get(`${APIboard}/${id}/cards`)
//     .then((result) => {
//       //setBoardsData(result.data);
//       console.log(result.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const removeCard = (boardId, id) => {
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
          <div><SelectBoardForm data={boardsData} selectedBoardId={selectedBoard.id} onChange={onNewSelect}/></div>
          <h3>Create a New Board</h3>
          <div><NewBoardForm createNewBoard={createNewBoard}/></div>
          <h3>Create a New Card</h3>
          <div><NewCardForm /></div>
        </div>
        <div className='Board'>
          <h2>{selectedBoard?.title}</h2>
          <Board cards={selectedBoard?.cards} boardId={selectedBoard?.id} updateLikes={updateLikes} removeCard={removeCard}/>
        </div>
      </main>
      </div>
  );
}

export default App;
