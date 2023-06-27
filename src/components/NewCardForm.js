import React, { useState } from 'react';
import axios from 'axios';

function NewCardForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://127.0.0.1:5000/cards', { message })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error creating new card: ", error);
      });

    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <input type="submit" value="Create Card" />
    </form>
  );
}

export default NewCardForm;
