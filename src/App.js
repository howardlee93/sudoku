import './App.css';
import React, {useState, useEffect} from 'react';
import Board from './components/Board';
import {Footer} from './components/Footer';
import Options from './components/Options';
import Modal from './components/Modal';
import NumPad from './components/NumPad';


import test from './util/generate';
import empty from './util/generate'

function App() {

  const [open, setOpen] = useState(false);
  const [game, setGame] = useState(empty);
  const [input, setInput] = useState("");

  useEffect(()=>{

    const eventListener = (event) =>{
        event.preventDefault();
        let key = parseInt(event.key);
        if (isNaN(key)){
            console.log('this is not a number');
            console.log(event.key);
        }else{
            console.log(event.key);
            setInput(event.key);

        }
    }
    document.addEventListener("keyup", eventListener);

    //unsubscribe
    return ()=> ( 
        document.removeEventListener("keyup", eventListener)
    )
},[]);


  return (
    <div className="App">
      <header>
        <h1 className="mt-1 text-lg font-semibold" onClick={()=>setOpen(!open)}>Sudoku</h1>
        <p onClick={()=>setOpen(!open)}> Instructions</p>
        <Modal open={open} onClick={()=>setOpen(!open)}/>
        <Options/>
      </header>

      <main className="flex justify-center">
        <Board game={game} inputCell={input} />
        <NumPad/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
