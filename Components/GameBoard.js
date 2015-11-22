import Actions from '../Actions/BoardActions';
import Store from '../Stores/BoardStore';
import BoardPiece from './BoardPiece';



let GameBoard = React.createClass({

    propTypes: {
        board: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },

    clearBoard() {
        Actions.clearBoard();
    },

    render() {
        let board = this.props.board;

        return (
            <div>
                <div>
                    GameBoard
                    <button onClick={this.clearBoard}>clearBoard</button>
                </div>
                <div>
                    {board.map((piece,index) => {
                        return (
                            <BoardPiece type={piece.type} status={Number(piece.status)} x={piece.x} y={piece.y} id={piece.id} />
                        );
                    })}
                </div>
            </div>
        );
    }
});

export default GameBoard;