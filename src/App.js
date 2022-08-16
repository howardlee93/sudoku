import './App.css';
import Board from './components/Board';
import {Footer} from './components/Footer';
function App() {
  return (
    <div className="App">
      <h1>Sudoku</h1>
     <Board/>
     <Footer/>
    </div>
  );
}

export default App;
