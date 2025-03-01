import { useState } from "react";
import Card from '../card/card';
import './Grid.css';
import  isWinner from '../../Helper/checkWinner';

function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true);
    const[winner, setWinner] = useState(null);
    function play(index){
     if(turn==true){
        board[index]="O";
     }
     else {
        board[index]="X";
     }
     const win = isWinner(board,turn ? "O" : "X");
     if (win){
       setWinner(win);
     }
     setBoard([...board]);
     setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""))
    }

    return (
        <div className="grid-wrapper">
            <h1 className="turn-highlighter">Tic Tac Toe</h1>
            {
                winner &&  (
                    <>
                    <h2 className="turn-highlighter"> Winner is {winner} </h2>
                    <button className="reset" onClick={reset}> Reset Game</button></>
                    
                )
            }
            <h2 className="turn-highlighter">Current turn :{(turn) ? 'O' : 'X'}</h2>

            <div className="grid">
                {board.map((el, idx) => <Card gameEnd={winner?true:false} key={idx} onPlay={play} player={el} index={idx}/>)}

                </div>
   </div>




            )
}
            export default Grid;