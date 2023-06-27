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
        <div><NewBoardForm /></div>
      </main><NewCardForm />
    </div>
  );
}

export default App;
