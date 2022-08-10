import React from "react";
import "../styles.css";
import ConnectFourSquare from "./ConnectFourSquare";
import { useState, useEffect } from "react";

export default function ConnectFour() {
  const [board, setboard] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isWinner, setisWinner] = useState(false);

  const fullBoard = board.map((row, rowIdx) => {
    return row.map((val, colIdx) => {
      return (
        <ConnectFourSquare
          key={colIdx + "" + rowIdx}
          setboard={setboard}
          colIdx={colIdx}
          rowIdx={rowIdx}
          currentPlayer={currentPlayer}
          board={board}
          setCurrentPlayer={setCurrentPlayer}
          setisWinner={setisWinner}
          isWinner={isWinner}
        />
      );
    });
  });

  return (
    <div className="main-Page-Container">
      <div className="current-player-container">
        <h1>Current Player is</h1>
        {currentPlayer === "X" ? (
          <div className="cf-token-X"></div>
        ) : (
          <div className="cf-token-O"></div>
        )}
      </div>

      <div className="cf-Container">{fullBoard}</div>
      {isWinner ? (
        <div className="current-player-container">
          <h1>The Winner is</h1>
          {currentPlayer === "X" ? (
            <div className="cf-token-O"></div>
          ) : (
            <div className="cf-token-X"></div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
