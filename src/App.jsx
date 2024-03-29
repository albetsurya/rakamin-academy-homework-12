import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function selectSquare(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextValue = calculateNextValue(squares);
    const updatedSquares = squares.slice();
    updatedSquares[i] = nextValue;
    setSquares(updatedSquares);
  }

  function restart() {
    setSquares(Array(9).fill(null));
  }

  function renderSquare(i) {
    return (
      <button
        className="square border-color-accent border flex justify-center items-center cursor-pointer font-normal text-2xl"
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </button>
    );
  }

  const winner = calculateWinner(squares);
  const nextValue = calculateNextValue(squares);
  const status = calculateStatus(winner, squares, nextValue);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="font-extrabold text-2xl text-color-accent py-3">
        {status}
      </div>
      <div className="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button
        className="rounded-md px-8 py-2 mt-4 bg-color-accent text-color-primary"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );
}

function Game() {
  return (
    <div>
      <div>
        <Board />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`;
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? "X" : "O";
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return <Game />;
}

export default App;
