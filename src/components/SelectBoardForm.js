import './SelectBoardForm.css';

const SelectBoardForm = (props) => {

    const boardComponents = props.data.map((board) => {
        //console.log(props.selectedBoardId, board.id, props.selectedBoard.id === board.id.toString());
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
                checked={props.selectedBoardId === board.id}
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