import React, { useState } from 'react';
import "./NewBoardForm.css";

function NewBoardForm({ createNewBoard }) {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [error, setError] = useState('');

  const validateInput = () => {
    if (title.length === 0 || owner.length === 0) {
      setError("Input cannot be empty");
      return false;
    } else {
      return true;
    }
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInput();
    if (isValid === true) {
      createNewBoard(title, owner);
      setTitle('');
      setOwner('');
      setError('');
    } else {
      return;
    };
  };

  const onSlider = (event) => {
    setShowForm(!showForm);
    setError('');
  };

//{(event) => setShowForm(!showForm)}

  return (
    <form onSubmit={handleSubmit}>
      <span className="error">{error}</span>
      <div>
      <label className="toggle">
        <input type="checkbox"  onChange={onSlider}/>
        <span className="slider"></span>
        <span className="labels" data-on="SHOW" data-off="HIDE"></span>
      </label>
      </div>
      <div className={showForm.toString()}>
      <label className='Form-label'>
        Title
        <div><input type="text" value={title} onChange={(event) => setTitle(event.target.value)} /> </div>
      </label>
      </div>
      <div className={showForm.toString()}>
      <label className='Form-label'>
        Owner
        <div><input type="text" value={owner} onChange={(event) => setOwner(event.target.value)} /></div>
      </label>
      <input type="submit" value="Create Board" />
      </div>
    </form>
  );
}

export default NewBoardForm;
