import './SelectBoardForm.css';

const SelectBoardForm = ( { data, onChange, selectedBoardId, sortAZ, sortZA }) => {

    const boardComponents = data.map((board) => {
        return (
            <div>
            <label>
            <input 
                type='radio'
                name='board'
                key={board.id}
                id={board.id}
                value={board.title}
                onChange={onChange}
                checked={selectedBoardId === board.id}
            />{board.title}</label></div>
        );
    });

    return (
        <div>
            {boardComponents}
            <h3>Sort Cards</h3>
            <button className='sortButton' onClick={sortAZ}>A-Z</button>
            <button className='sortButton' onClick={sortZA}>Z-A</button>
        </div>
    )
}

export default SelectBoardForm;