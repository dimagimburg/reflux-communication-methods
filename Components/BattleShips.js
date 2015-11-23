import BoardStore from '../Stores/BoardStore';
import ScoreBoard from './ScoreBoard';
import GameBoard from './GameBoard';
let BattleShips = React.createClass({

    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            // call for the getter function of the Store
            board: BoardStore.getBoard()
        };
    },

    componentDidMount() {
        // registeres as a listener for the store
        this.listenTo(BoardStore, this.onBoardChange);
    },

    onBoardChange(board) {
        this.setState({
            board: board
        });
    },

    render() {
        return (
            <div>
                <div>BattleShips Ver 0.0.1</div>
                <ScoreBoard />
                <GameBoard board={this.state.board}/>
            </div>
        );
    }
});

export default BattleShips;