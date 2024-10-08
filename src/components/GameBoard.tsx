import Square from './Square'

function GameBoard() {
    return (
      <>
        <div className="game-board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="game-board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="game-board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }

  export default GameBoard