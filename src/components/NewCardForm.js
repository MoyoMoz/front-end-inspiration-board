import React, { useState } from 'react';
import "./NewCardForm.css";

function NewCardForm( {createCard, boardId} ) {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (message.length > 40 ) {
      setError("Input cannot be longer than 40 characters");
    } else if (message.length === 0) {
      setError("Input cannot be empty");
    } else {
      setMessage(message);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    if (error.length > 1) {
      createCard(boardId, message);
      setMessage('');
      setError('');
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message:
        <span className="error">{error}</span>
        <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>
      <input type="submit" value="Create Card" />
    </form>
  );
}

export default NewCardForm;


