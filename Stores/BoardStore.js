import Actions from './../Actions/BoardActions';

function getPieceById(list,id) {
    return _.find(list, function(piece) {
        return piece.id === id;
    });
}

function getDefaultBoard(boardSize) {
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
    return board;
}

let Store = Reflux.createStore({
    listenables: [Actions],

    getInitialState() {
        this.board = getDefaultBoard(5);
        return this.board;
    },

    onChangeStatus(id,newStatus) {
        let selected = getPieceById(this.board,id);
        selected.status = newStatus;
        this.updateBoard(this.board);
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
