import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import { Card } from "../card/Card";
import "./grid.css";

const Grid = ({ numberOfCards }) => {
  const [turn, setTurn] = useState(false); //false:x true:o
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winnerName, setWinnerName] = useState("");

  function isWinner(board) {
    // row check
    const case1 =
      board[0] !== "" && board[0] == board[1] && board[1] == board[2];
    const case2 =
      board[3] !== "" && board[3] == board[4] && board[4] == board[5];
    const case3 =
      board[6] !== "" && board[6] == board[7] && board[7] == board[8];
    //column check
    const case4 =
      board[0] !== "" && board[0] == board[3] && board[3] == board[6];
    const case5 =
      board[1] !== "" && board[1] == board[4] && board[4] == board[7];
    const case6 =
      board[2] !== "" && board[2] == board[5] && board[5] == board[8];
    //diagonal check
    const case7 =
      board[0] !== "" && board[0] == board[4] && board[4] == board[8];
    const case8 =
      board[2] !== "" && board[2] == board[4] && board[4] == board[6];
    // console.log(case1 , case2 , case3 , case4 , case5 , case6 , case7 , case8)
    return case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8;
  }

  const cardClick = (id) => {
    console.log("hi");
    board[id] = turn ? "O" : "X";
    setBoard([...board]);
    isWinner(board)
      ? turn
        ? setWinnerName("O")
        : setWinnerName("X")
      : setTurn(!turn);
    //  winnerName ? toast.success(`congrats ${winnerName}`) :null
    console.log("winnerName", winnerName);
  };
  function reset() {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(false);
    setWinnerName("");
  }
  return (
    <>
      <h1 className="turn-highlights">Current Turn:{turn ? "O" : "X"}</h1>
      {winnerName ? (
        <div className="winner-container">
          <h1 className="winner">Winner is: {winnerName}</h1>
          <button className="reset" onClick={reset}>
            Reset
          </button>
          {/* <ToastContainer position="top-center"/> */}
        </div>
      ) : null}
      <div className="grid">
        {board.map((value, index) => (
          <Card
            key={index}
            index={index}
            player={value}
            gameEnd={winnerName ? true : false}
            cardClick={cardClick}
          />
        ))}
      </div>
    </>
  );
};

export default Grid;
