# reflux-methods
3 methods to implement the reflux interaction between store and component   
Master branch - Method 1    
method2 branch - Method 2    
method3 branch - Method 3    

# What does the program do?

This is a simple program which is the base for a game I still develope.   
It creates an array of [size * size] length, every cell (piece) is represented by object looks like this:    
```javascript
piece = {
  id: x.toString() + "_" + y.toString(),
  x: x,
  y: y,
  status: 0,
  type: "board"
}
````
The program has 2 simple methods:    
1. By clicking a cell it changes the status to 1    
2. By clicking the clearBoard it changes all cell's statuses to 0

# Method 1
This is the regular way of Reflux to deal with communication between Components and Stores.    
BoardStore has the ```listenables``` property filled with the Actions object, it stores also the method that builds the initial state object for the base component (BattleShips).    
The BattleShip base component register itself to Board changes in the componentDidMount method and provides it a callback which handling the change events triggerd by the store.    
Right after the component mounted it invokes the ```BoardStore.getDefaultBoard(5)``` which makes the first interaction with the store. The store creates an initial default object and invokes the ```this.updateBoard(board);``` method which updates the data it stores and triggers an event with ```this.trigger(board)```.
Actions manually called by the GameBoard/BoardPiece component with clicking on buttons and components by simply invoking ```Action.method();``` when Actions is the Actions object imported. (maybe it would be better to name it BoardActions when scaling).   
When triggering the action it automatically goes to the Store where this action is registered and invokes the corresponding method [**Actions.methodName() -> onMethodName()**] and does the same cycle as with the initialization.

# Method 2
So this is the shortest (magical) way to describe and implement the communication between Stores and Components.    
GameBoard/GamePiece stay the same so action invocation stays as in method 1.    
The base component registes itself by a **mixin** ```mixins: [Reflux.connect(BoardStore,"board")]``` so the Store knows that ```this.state.board``` is the state item we are changing here.    
BoardStore - so here we can take the default state object creator outside the scope of the Store because now we won't trigger the update right from the default state creator, we will return this object.   
The ```Reflux.connect()``` method knows to search for the ```getInitialState()``` method in the store and invoke it after the component mounted, so we are initializing the store data then return the state object (```this.board```).   
The rest of the cycle acts the same as method 1.

# Method 3
The code is commented with the documentation. You are welcome to dig in to the code!

cheers.
