import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard'
import ResetButton from './components/ResetButton'

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Tic tac toe game
          </h1>
        </header>
        <div className="container">
        <GameBoard />
        </div>
        <div>
        <ResetButton/>
        </div>
      </div>
    );
}

export default App;
