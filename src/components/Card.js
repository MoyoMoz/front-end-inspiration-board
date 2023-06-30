import React from 'react';
import './Card.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

const Card = ({ id, message, likes, updateLikes, removeCard}) => {

    const icon = likes > 0 ? <AiFillStar className='star' size='24px'/> : <AiOutlineStar className='star' size='24px'/>;

    return (
        <div className='Card'>
            <h4>{message}</h4>
            <div className='Button-row'>
                <div className='Likes-container'>
                <span className='star' onClick={() => {updateLikes(id, likes);}}>{icon}</span>
                    <h5>{likes}</h5>
                </div>
                <button onClick={() => {removeCard(id);}}>Delete</button>
            </div>
        </div>
    )
}

export default Card;
