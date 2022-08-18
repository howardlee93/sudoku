import './App.css';
import React, {useState} from 'react';
import Board from './components/Board';
import {Footer} from './components/Footer';
import Options from './components/Options';
import Modal from './components/Modal';
import NumPad from './components/NumPad';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <h1 className="mt-1 text-lg font-semibold" onClick={()=>setOpen(!open)}>Sudoku</h1>
      <p onClick={()=>setOpen(!open)}> Instructions</p>
      <Modal open={open} onClick={()=>setOpen(!open)}/>
      <Options/>
     <Board/>
     <NumPad/>
     <Footer/>
    </div>
  );
}

export default App;
