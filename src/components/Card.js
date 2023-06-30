import React from 'react';
import './Card.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import axios from 'axios';

const Card = ({ id, message, likes}) => {
    const API = `https://backend-inspo-board.onrender.com/cards`;

    //get all cards as a prop?? need board as a prop? 
    const icon = likes > 0 ? <AiFillStar className='star' size='24px'/> : <AiOutlineStar className='star' size='24px'/>;

    const onLikeButtonClick = () => {
        likes += 1;
        axios.patch(`${API}/${id}`, { likes: likes})
        .then((result) => {
            //need something here to make screen re-render 
            // get all cards? 
        })
        .catch((err) => {
            console.log(err);
        })
    };

    const onDeleteButtonClick = () => {
        axios.delete(`${API}/${id}`)
        .then((result) => {
            //trigger re-render, get all cards? 
        })
        .catch((err) => {
            console.log(err);
        })
    };

    return (
        <div className='Card'>
            <h4>{message}</h4>
            <div className='Button-row'>
                <div className='Likes-container'>
                <span className='star' onClick={onLikeButtonClick}>{icon}</span>
                    <h5>{likes}</h5>
                </div>
                <button onClick={onDeleteButtonClick}>Delete</button>
            </div>
        </div>
    )
}

export default Card;
