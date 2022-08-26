import './App.css';
import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import {Footer} from './components/Footer';
import Options from './components/Options';
import Modal from './components/Modal';
import NumPad from './components/NumPad';
import GameActions from './components/GameActions';

import test from './util/generate';
// import empty from './util/generate';

const defaultState = {
  selectedBoardVal: null,
  values: {},
  currentInput:'',
  board: test,
  done: false,
  selectedRowIndex: null,
  selectedColIndex: null,
};

const initialState = JSON.parse(JSON.stringify(defaultState));

function App() {

  const [isInitialRender, setIsInitialRender] = useState(true);
  const [open, setOpen] = useState(false);
  const [game, setGame] = useState([]);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState({});

  useEffect(()=>{ 

    const eventListener = (event) =>{
        event.preventDefault();
        let key = parseInt(event.key);
        if (isNaN(key)){
            console.log('this is not a number');
            console.log(event.key);
        }else{
            console.log(event.key, game.slice()[selected.row][selected.col]);
            setInput(event.key)
            let newBoard = game.slice();
            selected.posVal = input;
            newBoard[selected.row][selected.col] = parseInt(event.key);
            setGame(newBoard);
            console.log(game);
            
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
  },[setIsInitialRender,game, input, selected]);


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
    console.log(val);
    setInput(val);
    let newBoard = game.slice();
    selected.posVal = input;
    newBoard[selected.row][selected.col] = parseInt(val);
    setGame(newBoard);
  };

  const reset = async ()=> {
    //clear and generate game
    const boardtest = JSON.parse(JSON.stringify(defaultState));
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

  return (
    <div className="App">
      <header>
        <h1 className="mt-1 text-lg font-semibold" onClick={()=>setOpen(!open)}>Sudoku</h1>
        <p onClick={()=>setOpen(!open)}> Instructions</p>
        <Modal open={open} onClick={()=>setOpen(!open)}/>
        <Options/>
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
          <GameActions game={game} reset={reset}/>
        </footer>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
