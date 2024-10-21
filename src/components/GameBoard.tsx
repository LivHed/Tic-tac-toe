import {useState} from "react"
import {useEffect} from 'react';
import Square from './Square'
import ResetButton from './ResetButton'
import Message from './Message'

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

export function checkForWinningCombination(squares: any) {
  let winningPlayer = ""
    for(let i = 0; i < winningCombinations.length; i++) {
       const [first, second, third] = winningCombinations[i]

       if (squares[first] === "X" && squares[second] === "X" && squares[third] === "X") {
        winningPlayer = "X"
       } else if (squares[first] === "O" && squares[second] === "O" && squares[third] === "O") {
        winningPlayer = "O"
       }
    }
    return winningPlayer
}

export const checkForTie = (squares: any, winner: string) => {
  const isBoardNotFull = squares.includes("")

  if (!isBoardNotFull && winner === "") {
    return true
  }
  return false
}

export function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [isNext, setIsNext] = useState(true)
  const [player, setPlayer] = useState("X")
  const [winner, setWinner] = useState("")
  const [isWin, setIsWin] = useState(false)
  const [isTie, setIsTie] = useState(false)

    useEffect(() => { 
      const winner = checkForWinningCombination(squares);
      setWinner(winner)

      if (winner !== "") {
        setIsWin(true)
      }

      let tie = checkForTie(squares, winner)
      setIsTie(tie)
    }, [squares]);

    const handleNextTurn = (index: number) => {
        if (!isWin && !squares[index]) {
          const newSquares = squares.slice()
          newSquares[index] = isNext ? "X" : "O"
          setSquares(newSquares)
          setIsNext(!isNext)
          setPlayer(isNext ? "O" : "X")
        }
    }

    const resetToEmptyBoard = () => {
      setSquares(Array(9).fill(""))
      setIsNext(true)
      setPlayer("X")
      setIsWin(false)
      setIsTie(false)
      setWinner("")
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
          <Message message={isWin ? `The winner is: ${winner}` : isTie ? "It's a tie": `It's now ${player}'s turn`}/>
      </div>
        
      </>
    );
}
  export default GameBoard