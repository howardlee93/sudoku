import './App.css';
import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import {Footer} from './components/Footer';
import Options from './components/Options';
import Modal from './components/Modal';
import NumPad from './components/NumPad';

import test from './util/generate';
// import empty from './util/generate';

const initialState = {
  selectedBoardVal: null,
  values: {},
  currentInput:'',
  board: test,
  done: false,
  selectedRowIndex: null,
  selectedColIndex: null,
  selectedStatus:[
    'readonly',
    'current',
    'past'
  ]
}

function App() {

  const [open, setOpen] = useState(false);
  const [game, setGame] = useState(initialState.board);
  const [input, setInput] = useState(initialState.currentInput);
  const [selected, setSelected] = useState({
    posVal: initialState.selectedBoardVal,
    row: initialState.selectedRowIndex,
    col: initialState.selectedColIndex
  });

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
            newBoard[selected.row][selected.col] = event.key;
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

  const handleSelectedCell = ( cell, row, col) =>{
    console.log(game[row][col], row, col);
    setSelected({
      posVal:  game[row][col],
      row: row,
      col: col
    })
      console.log(selected);
    };

  const handleOnClick =(val) =>{
    console.log(val);
    setInput(val);
    let newBoard = game.slice();
    selected.posVal = input;
    newBoard[selected.row][selected.col] = val;
    setGame(newBoard);
  }

  return (
    <div className="App">
      <header>
        <h1 className="mt-1 text-lg font-semibold" onClick={()=>setOpen(!open)}>Sudoku</h1>
        <p onClick={()=>setOpen(!open)}> Instructions</p>
        <Modal open={open} onClick={()=>setOpen(!open)}/>
        <Options/>
      </header>

      <main className="flex justify-center">
        <Board game={game} inputCell={input} handleSelectedCell={handleSelectedCell} />
        <NumPad handleOnClick={handleOnClick}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
