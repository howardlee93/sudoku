import './App.css';
import Board from './components/Board';
import {Footer} from './components/Footer';
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <h1 className="mt-1 text-lg font-semibold">Sudoku</h1>
      <Options/>
     <Board/>
     <Footer/>
    </div>
  );
}

export default App;
