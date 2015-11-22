import BoardStore from '../Stores/BoardStore';
import GameBoard from './GameBoard';

let BattleShips = React.createClass({
    mixins: [Reflux.connect(BoardStore,"board")],

    render() {
        return (
            <div>
                <div>Method 2</div>
                <GameBoard board={this.state.board}/>
            </div>
        );
    }
});

export default BattleShips;