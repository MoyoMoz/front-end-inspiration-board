import React, { useState } from 'react';
import axios from 'axios';

function NewBoardForm(props) {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:5000/boards', { title, owner })
      .then((response) => {
        console.log(response);
        props.createNewBoard(response.data);
      })
      .catch((error) => {
        console.error("Error creating new board: ", error);
      });

    setTitle('');
    setOwner('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Owner:
        <input type="text" value={owner} onChange={(event) => setOwner(event.target.value)} />
      </label>
      <input type="submit" value="Create Board" />
    </form>
  );
}

export default NewBoardForm;
