import React, { useState } from 'react';
import "./NewBoardForm.css";

function NewBoardForm({ createNewBoard }) {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewBoard(title, owner);

    setTitle('');
    setOwner('');
  };



  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label className="toggle">
        <input type="checkbox"  onChange={(event) => setShowForm(!showForm)}/>
        <span className="slider"></span>
        <span className="labels" data-on="SHOW" data-off="HIDE"></span>
      </label>
      </div>
      <div className={showForm.toString()}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      </div>
      <div className={showForm.toString()}>
      <label>
        Owner:
        <input type="text" value={owner} onChange={(event) => setOwner(event.target.value)} />
      </label>
      <input type="submit" value="Create Board" />
      </div>
    </form>
  );
}

export default NewBoardForm;
