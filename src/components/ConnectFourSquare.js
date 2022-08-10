import React from "react";

export default function ConnectFourSquare({
  setboard,
  rowIdx,
  colIdx,
  currentPlayer,
  board,
  setCurrentPlayer,
  setisWinner,
  isWinner,
}) {
  function handleOnClick() {
    if (!isWinner) {
      turn();
    }
  }

  function checkWinner(row, col) {
    let counter = 1;
    let checkArray = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
    ];

    checkArray.forEach((val) => {
      initialWinCheck(counter, row, col, val[0], val[1]);
    });
  }

  function initialWinCheck(counter, row, col, checkArrayRow, checkArrayCol) {
    let secondCounter = 0;
    if (counter === 4) {
      setisWinner(true);
    }

    let newRow = row + checkArrayRow;
    let newCol = col + checkArrayCol;

    if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7) {
      if (board[newRow][newCol] === currentPlayer) {
        counter += 1;
        initialWinCheck(counter, newRow, newCol, checkArrayRow, checkArrayCol);
      } else {
        secondaryWinCheck(
          secondCounter,
          newRow,
          newCol,
          checkArrayRow,
          checkArrayCol
        );
      }
    }
  }

  function secondaryWinCheck(counter, row, col, checkArrayRow, checkArrayCol) {
    if (counter === 4) {
      setisWinner(true);
    }

    let newRow = row - checkArrayRow;
    let newCol = col - checkArrayCol;

    if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7) {
      if (board[newRow][newCol] === currentPlayer) {
        counter += 1;
        secondaryWinCheck(
          counter,
          newRow,
          newCol,
          checkArrayRow,
          checkArrayCol
        );
      }
    }
  }

  function turn() {
    for (let i = 5; i >= 0; --i) {
      if (board[i][colIdx] === "") {
        setboard((board) => {
          board[i][colIdx] = currentPlayer;
          return board;
        });

        if (currentPlayer === "X") {
          setCurrentPlayer("O");
        } else {
          setCurrentPlayer("X");
        }
        checkWinner(i, colIdx);

        return;
      }
    }
  }

  return (
    <div className="cf-item" onClick={handleOnClick}>
      {board[rowIdx][colIdx] === "X" ? (
        <div className="cf-token-X"></div>
      ) : (
        <>
          {board[rowIdx][colIdx] === "O" ? (
            <div className="cf-token-O"></div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}
