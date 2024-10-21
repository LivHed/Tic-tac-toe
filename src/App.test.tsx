import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {checkForWinningCombination, checkForTie } from './components/GameBoard'

test('renders tic tac toe title', () => {
  render(<App />)
  const title = screen.getByText(/tic tac toe/i)
  expect(title).toBeInTheDocument()
});

test('renders squares in gameboard', () => {
  render(<App />)
  const squares = screen.getAllByRole('button', { name: /gameboard-square/i })
  expect(squares).toHaveLength(9)
});

test('renders reset button', () => {
  render(<App />)
  const reset = screen.getByText(/reset/i)
  expect(reset).toBeInTheDocument()
});

//-------- X wins ----------
test('Horizontal x win returns x', () => {
  const squares = [
    "X","X","X",
    "","","",
    "","",""
  ]
  const winner = checkForWinningCombination(squares)
  expect(winner).toBe("X");
});

test('Diagonal x win returns x', () => {
  const squares = [
    "X","","",
    "","X","",
    "","","X"
  ]
  const winner = checkForWinningCombination(squares)
  expect(winner).toBe("X");
});

test('Vertical x win returns x', () => {
  const squares = [
    "","","X",
    "","","X",
    "","","X"
  ]
  const winner = checkForWinningCombination(squares)
  expect(winner).toBe("X");
});

//--------- O wins ---------
test('Vertical o win returns o', () => {
  const squares = [
    "","O","",
    "","O","",
    "","O",""
  ]
  const winner = checkForWinningCombination(squares)
  expect(winner).toBe("O");
});

test('Diagonal o win returns o', () => {
  const squares = [
    "","","O",
    "","O","",
    "O","",""
  ]
  const winner = checkForWinningCombination(squares)
  expect(winner).toBe("O");
});

test('Horizontal o win returns o', () => {
  const squares = [
    "","","",
    "","","",
    "O","O","O"
  ]
  const winner = checkForWinningCombination(squares)
  expect(winner).toBe("O");
});

/*-----------No winning combinations-----------*/
test('No winning combination returns empty string', () => {
  const squares = [
    "X","O","",
    "O","X","X",
    "O","X","O"
  ]
  const winner = checkForWinningCombination(squares)
  expect(winner).toBe("");
});

test('All squares are filled and winner is an empty string, its a tie and returns true', () => {
  const squares = [
    "X","O","X",
    "X","X","O",
    "O","X","O"
  ]
  const winner = ""
  const tie = checkForTie(squares, winner)
  expect(tie).toBe(true);
});

//---------------- test scenarios TODO -------------------//

// Consider refactoring and move the local functions within the GameBoard component to a utils file (or a hooks file)
// and make them utility functions or custom hooks, to be able to reach them to test them.

//- first turn is always X
//- when a player clicks X, next turn is O
//- when a player clicks O, next turn is X
//- when reset button is clicked, the squares gets empty
//- when X has three in a row, the winning x message shows
//- when O has three in a row, the winning o message shows
//- when neither O or X has three in a row, show Tie message
//- when there is a win, you can't continue to click on the board.