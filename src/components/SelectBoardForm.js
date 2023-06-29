import { useState } from 'react';

const SelectBoardForm = (props) => {

    const boardComponents = props.data.map((board) => {
        return (
            <div>
            <label>
            <input
                type='radio'
                name='board'
                key={board.id}
                id={board.id}
                value={board.title}
                onChange={props.onChange}
                checked={props.selectedBoard === board.title}
            />{board.title}</label></div>
        );
    });

    return (
        <div>
            {boardComponents}
        </div>
    )
}

export default SelectBoardForm;