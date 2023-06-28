import './App.css';
import React from 'react';
import axios from 'axios';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <div className="Form-list">
          <h2>Select a Board</h2>
          <h3>Create a New Board</h3>
          <div><NewBoardForm /></div>
          <h3>Create a New Card</h3>
          <div><NewCardForm /></div>
        </div>
        <div className='Board'>
          <h2>Board Title</h2>
        </div>
      </main>
      </div>
  );
}

export default App;
