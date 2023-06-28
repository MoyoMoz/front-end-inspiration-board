import React from 'react';
import './Card.css';
import { AiOutlineStar } from 'react-icons/ai';

const Card = () => {

    return (
        <div className='Card'>
            <h4>Card Content</h4>
            <div className='Button-row'>
                <div className='Likes-container'>
                <span><AiOutlineStar className='star' size='24px'/></span>
                    <h5>0</h5>
                </div>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Card;
