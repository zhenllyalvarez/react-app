import Square from "./Square";
import "../assets/style/Board.css";
import { useState } from "react";

function Board({xIsNext, squares, onPlay}) {
    function handleClick(i) {
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O"
        }
        onPlay(nextSquares);
    }

  return (
    <>
      <div className="Board">
        <div className="board-row">
          <Square onSquareClick={handleClick}/>
          <Square onSquareClick={handleClick}/>
          <Square onSquareClick={handleClick}/>
        </div>
        <div className="board-row">
          <Square onSquareClick={handleClick}/>
          <Square onSquareClick={handleClick}/>
          <Square onSquareClick={handleClick}/>
        </div>
        <div className="board-row">
          <Square onSquareClick={handleClick}/>
          <Square onSquareClick={handleClick}/>
          <Square onSquareClick={handleClick}/>
        </div>
      </div>
    </>
  );
}

export default Board;
