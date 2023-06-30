import './SelectBoardForm.css';

const SelectBoardForm = ( { data, onChange, selectedBoardId }) => {

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
        </div>
    )
}

export default SelectBoardForm;