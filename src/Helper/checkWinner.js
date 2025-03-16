function isWinner(board, symbol) {
     if (board[0] === board[1] && board[1] === board[2] && board[2] === symbol)
       return symbol;
     if (board[3] === board[4] && board[4] === board[5] && board[5] === symbol)
       return symbol;
     if (board[6] === board[7] && board[7] === board[8] && board[8] === symbol)
       return symbol;
     if (board[0] === board[3] && board[3] === board[6] && board[6] === symbol)
       return symbol;
     if (board[1] === board[4] && board[4] === board[7] && board[7] === symbol)
       return symbol;
     if (board[2] === board[5] && board[5] === board[8] && board[8] === symbol)
       return symbol;
     if (board[0] === board[4] && board[4] === board[8] && board[4] === symbol)
       return symbol;
     if (board[2] === board[4] && board[4] === board[6] && board[4] === symbol)
       return symbol;
     
     return "";
   }
   
   function checkGameStatus(board) {
     const winnerX = isWinner(board, "X");
     const winnerO = isWinner(board, "O");
   
     if (winnerX) return "X";
     if (winnerO) return "O";
   
     // Check if all cells are filled (no empty spaces)
     if (!board.includes("")) return "Draw";
   
     return ""; // Game is still ongoing
   }
   
   export default checkGameStatus;
   