import React from 'react';
import './Board.css';
import Card from './Card';

const Board = ( { cards, updateLikes, removeCard }) => {

    let cardComponents = '';
    if ( cards === undefined) {
        return (cardComponents);
    }
    else {
        cardComponents = cards.map((card) => {
        return (
            <Card 
                id={card.id}
                message={card.message}
                likes={card.likes}
                updateLikes={updateLikes}
                removeCard={removeCard}
            />
        );
        });
    }

    return (
        <div className="board">
            {cardComponents}
        </div>
    );
};

export default Board;