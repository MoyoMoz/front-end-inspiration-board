import React, { useState } from 'react';

function NewBoardForm({ createNewBoard }) {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewBoard(title, owner);

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
