import './App.css';
import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import {Footer} from './components/Footer';
import Options from './components/Options';
import Modal from './components/Modal';
import NumPad from './components/NumPad';
import GameActions from './components/GameActions';

// import test from './util/generate';
import init from './util/generate';

const defaultState = {
  completedBoard: init().solvedBoard,
  selectedBoardVal: null,
  values: {},
  currentInput:'',
  board: init().startingBoard,
  done: false,
  selectedRowIndex: null,
  selectedColIndex: null,
};


const initialState = JSON.parse(JSON.stringify(defaultState));

Object.freeze(initialState);

function App() {

  const [isInitialRender, setIsInitialRender] = useState(true);
  const [open, setOpen] = useState(false);
  const [game, setGame] = useState([]);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState({});
  const [difficulty, setDifficulty] = useState('');

  useEffect(()=>{ 

    const eventListener = (event) =>{
        event.preventDefault();
        let key = parseInt(event.key);
        if (isNaN(key)){
            console.log('this is not a number');
            console.log(event.key);
        }else{
            console.log(event.key, game.slice()[selected.row][selected.col]);
            // if (selected.posVal === 0){
              setInput(event.key)
              let newBoard = game.slice();
              selected.posVal = input;
              newBoard[selected.row][selected.col] = parseInt(event.key);
              setGame(newBoard);
              console.log(game);
            // }
        }
    }
    document.addEventListener("keyup", eventListener);

    //unsubscribe
    return ()=> ( 
        document.removeEventListener("keyup", eventListener)
    )
  },[game, selected, input]);

  useEffect(()=>{

    if (isInitialRender){
      setGame(initialState.board);
      setInput(initialState.currentInput);
      setSelected({
        posVal: initialState.selectedBoardVal,
        row: initialState.selectedRowIndex,
        col: initialState.selectedColIndex
      });
      setIsInitialRender(false);
    }
  },[isInitialRender, game, input, selected]);


  const handleSelectedCell = ( cell, row, col) =>{
    console.log(game[row][col], row, col);
    setSelected({
      posVal:  game[row][col],
      row: row,
      col: col
    });
    console.log(selected);
  };

  const handleOnClick =(val) =>{
    // if (selected.posVal === 0){
      console.log(val);
      setInput(val);
      let newBoard = game.slice();
      selected.posVal = input;
      newBoard[selected.row][selected.col] = parseInt(val);
      setGame(newBoard);
    // }else{
    //   return;
    // }
  };

  const reset = async ()=> {
    //clear and generate game
    const newGame = init().startingBoard;
    const boardtest = JSON.parse(JSON.stringify(defaultState));
    Object.assign(boardtest, {board: newGame});
    let {board} = boardtest;
    let newBoard = board.slice();

    console.log(newBoard);
    setGame(newBoard);
    // setInput( ...defaultState.currentInput);
    // setSelected({
    //   posVal: defaultState.selectedBoardVal,
    //   row: defaultState.selectedRowIndex,
    //   col: defaultState.selectedColIndex
    // });  
  };


  const handleHint = () =>{
    if (selected.posVal === 0){
      // let newBoard = game.slice();
      // newBoard[selected.row][selected.col] = init().solvedBoard[selected.row][selected.col];
      console.log(init(difficulty).solvedBoard);

    }
  }

  const setGameDifficulty = (level)=>{
    setDifficulty(level);
    let newGame = init(level).startingBoard;
    const boardtest = JSON.parse(JSON.stringify(defaultState));
    Object.assign(boardtest, {board: newGame});
    let {board} = boardtest;
    let newBoard = board.slice();
    console.log(newBoard);
    setGame(newBoard);
  }

  return (
    <div className="App">
      <header>
        <h1 className="mt-1 text-lg font-semibold" onClick={()=>setOpen(!open)}>Sudoku</h1>
        <p onClick={()=>setOpen(!open)}> Instructions</p>
        <Modal open={open} onClick={()=>setOpen(!open)}/>
        <Options setGameDifficulty={setGameDifficulty}/>
      </header>

      <main className="flex justify-center flex-col">
        <div className='flex flex-row justify-center'>
        {game ? (<Board game={game} inputCell={input} handleSelectedCell={handleSelectedCell} />)
        :""}
        <aside>
          <NumPad handleOnClick={handleOnClick}/>
        </aside>
        </div>
        <footer className="flex justify-center">
          <GameActions game={game} reset={reset} handleHint={handleHint}/>
        </footer>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
