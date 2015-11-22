import BoardStore from '../Stores/BoardStore';
import GameBoard from './GameBoard';

let BattleShips = React.createClass({
    //mixins: [Reflux.ListenerMixin],

    getInitialState() {
        return {
            board: []
        };
    },

    componentDidMount() {
        this.unsubscribe = BoardStore.listen(this.onBoardChange);
        BoardStore.getDefaultBoard(5);
    },

    componentWillUnmount() {
        this.unsubscribe();
    },

    onBoardChange(board) {
        this.setState({
            board: board
        });
    },

    render() {
        return (
            <div>
                <div>Method 1</div>
                <GameBoard board={this.state.board}/>
            </div>
        );
    }
});

export default BattleShips;