import BoardStore from '../Stores/BoardStore';
import GameBoard from './GameBoard';

let BattleShips = React.createClass({

    // COULD USE HERE:  mixins: [Reflux.listenTo(BoardStore,"onBoardChange")],
    // and then could remove the componentDidMount method and getInitialState method
    mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            board: [] // some dummy empty array so the program won't fail (on mapping undefined)
        };
    },

    componentDidMount() {
        this.listenTo(BoardStore, this.onBoardChange);
        // here the default array is created, on the BoardStore
        // an event is triggered and updates the state in BattleShips
        BoardStore.getDefaultBoard(5);
    },

    onBoardChange(board) {
        this.setState({
            board: board
        });
    },

    render() {
        return (
            <div>
                <div>Method 3</div>
                <GameBoard board={this.state.board}/>
            </div>
        );
    }
});

export default BattleShips;