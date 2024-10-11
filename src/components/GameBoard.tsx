import {useState} from "react"
import Square from './Square'
import ResetButton from './ResetButton'

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [isNext, setIsNext] = useState(true)

  //kopierar arrayn, 
  const newSquares = squares.slice()

  const handleClick = (index: number) => {
    if (!squares[index]) {
      //Visa antingen X eller O beroende på vems tur det är
      //Om isXNext är true, visas "X", annars "O"
      newSquares[index] = isNext ? "X" : "O"
      console.log(newSquares)
      //uppdatera state
      setSquares(newSquares)
      //växla tur
      ////När man klickar en ruta sätts "X" eller "O" beroende på värdet av isXNext. Efter att en ruta har klickats växlar turen genom att uppdatera isXNext med !isXNext
      setIsNext(!isNext)
    }
  }

  const resetToEmptyBoard = () => {
    setSquares(Array(9).fill(""))
    console.log('reset is running')
  }

    return (
      <>
        <div className="game-board-row">
          <Square value={squares[0]} onClick={() => handleClick(0)}/>
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className="game-board-row">
          <Square value={squares[3]} onClick={() => handleClick(3)}/>
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className="game-board-row">
          <Square value={squares[6]} onClick={() => handleClick(6)}/>
          <Square value={squares[7]} onClick={() => handleClick(7)}/>
          <Square value={squares[8]} onClick={() => handleClick(8)}/>
        </div>
        <div>
        <ResetButton onClick={() => resetToEmptyBoard()}/>
        </div>
      </>
    );
  }

  export default GameBoard