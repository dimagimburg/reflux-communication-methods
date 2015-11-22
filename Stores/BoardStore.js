import Actions from './../Actions/BoardActions';

function getPieceById(list,id) {
    return _.find(list, function(piece) {
        return piece.id === id;
    });
}

let Store = Reflux.createStore({
    listenables: [Actions], // instead of using this.listenToMany(Actions); in the init method

    init() {
        // init stuff called before the component mounted. so if we call here the updateBoard method
        // nothing will happen in the component because it is not registered yet as a listener, which
        // is done in the componentDidMount method over the BattleShips.js
    },

    onChangeStatus(id,newStatus) {
        let selected = getPieceById(this.board,id);
        selected.status = newStatus;
        this.updateBoard(this.board);
    },

    getDefaultBoard(boardSize) {
        let board = [];
        for(let x = 0; x < boardSize; x++){
            for(let y = 0; y < boardSize; y++){
                board.push({
                    id: x.toString() + "_" + y.toString(),
                    x: x,
                    y: y,
                    status: 0,
                    type: "board"
                });
            }
        }
        this.updateBoard(board);
    },

    onClearBoard() {
        _.each(this.board,function(piece){
            piece.status = 0;
        });
        this.updateBoard(this.board);
    },

    updateBoard(board) {
        this.board = board;
        this.trigger(board); // sends the updated board to all listening components (BattleShips)
    }

});

export default Store;
