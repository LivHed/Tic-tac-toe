import {useState} from "react"
import Square from './Square'
import ResetButton from './ResetButton'
import Message from './Message'

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [isNext, setIsNext] = useState(true)
  const [go, setGo] = useState("X")
  const [isWin, setIsWin] = useState(false)

  //kopierar arrayn, 
  const newSquares = squares.slice()

  const handleNextTurn = (index: number) => {
    // if there is not a winner (!isWin), run the rest of the code in the function (and one can continue clicking on the squares)
    if (!isWin) {
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
        setGo(isNext ? "O" : "X") // // Uppdatera vems tur det är
      }
    }
  }

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]
  
  const checkForWinningCombination = (squares: any) => {
    let winningPlayer = ""
      for(let i = 0; i < winningCombinations.length; i++) {
        // first, second, third element in each array in the winningcombination array, i starts at 0. 
         const [first, second, third] = winningCombinations[i]
  
         if (squares[first] === "X" && squares[second] === "X" && squares[third] === "X") {
          winningPlayer = "X"
         } else if (squares[first] === "O" && squares[second] === "O" && squares[third] === "O") {
          winningPlayer = "O"
         }
      }
      console.log(winningPlayer)
      // när alla kombinationer har loopats igenom och varken X eller O är the winner så returneras tom sträng
      return winningPlayer
    }

    // Lagra resultatet av checkForWinningCombination i variabeln "winner"
    const winner = checkForWinningCombination(squares)
    console.log("The winner is: " + winner)
    console.log("isWin: " + isWin)

    // if winner is not "" (there is not a winner) and isWin is false (there is not a winner) set win to true (someone has won) 
    if (winner !== "" && !isWin) {
      console.log("We have a winner!")
      setIsWin(true)
    }

    const checkForTie = (squares: any) => {
      // innehåller arrayn några tomma strängar ""
      const isBoardNotFull = squares.includes("")
      // Om boarden är fylld med O's och X's, alltså inte innehåller några tomma strängar, och om winner är lika med tom sträng, returnera true, annars false
      if (!isBoardNotFull && winner === "") {
        console.log("its a tie")
        return true
      }
      return false
    } 

    const resetToEmptyBoard = () => {
      setSquares(Array(9).fill(""))
      setIsNext(true)
      setGo("X") // återställ till X tur som alltid kör först
      setIsWin(false)
    } 

    return (
      <>
        <div className="game-board-row">
          <Square value={squares[0]} onClick={() => handleNextTurn(0)}/>
          <Square value={squares[1]} onClick={() => handleNextTurn(1)}/>
          <Square value={squares[2]} onClick={() => handleNextTurn(2)}/>
        </div>
        <div className="game-board-row">
          <Square value={squares[3]} onClick={() => handleNextTurn(3)}/>
          <Square value={squares[4]} onClick={() => handleNextTurn(4)}/>
          <Square value={squares[5]} onClick={() => handleNextTurn(5)}/>
        </div>
        <div className="game-board-row">
          <Square value={squares[6]} onClick={() => handleNextTurn(6)}/>
          <Square value={squares[7]} onClick={() => handleNextTurn(7)}/>
          <Square value={squares[8]} onClick={() => handleNextTurn(8)}/>
        </div>
        <div>
        <ResetButton onClick={() => resetToEmptyBoard()}/>
        </div>
        <div className="message-box">
          <Message message={winner ? `The winner is: ${winner}` : checkForTie(squares) ? "It's a tie": `It's now ${go}'s turn`}/>
      </div>
        
      </>
    );
}
  export default GameBoard