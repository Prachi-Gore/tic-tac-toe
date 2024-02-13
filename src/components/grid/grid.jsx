import { useState } from "react"
import { Card } from "../card/Card"
import './grid.css'
function isWinner(board,symbol){
  // row check
  const case1=(board[0]==board[1]) && (board[1]==board[2])
  const case2=(board[3]==board[4]) && (board[4]==board[5])
  const case3=(board[6]==board[7]) && (board[7]==board[8])
  //column check
  const case4=(board[0]==board[3]) && (board[3]==board[6])
  const case5=(board[1]==board[4]) && (board[4]==board[7])
  const case6=(board[2]==board[5]) && (board[5]==board[8])
  //diagonal check
  const case7=board[0]==board[4]==board[8]
  const case8=board[2]==board[4]==board[6]
return case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8
}
const Grid = ({numberOfCards}) => {
  const [turn,setTurn]=useState(false) //false:x true:o
  const [board,setBoard]=useState(Array(numberOfCards).fill(''))
  const [winner,setWinner]=useState('')
  
  const cardClick=(id)=>{
    console.log('hi')
    board[id]=turn?'O':'X'
    setBoard([...board])
    const winner=isWinner(board)
    setTurn(!turn)
  }
  return (
    <>
      <h1 className="turn-highlights">Current Turn:{turn?'O':'X'}</h1>
    <div className="grid">
    {board.map((value,index)=><Card key={index} index={index} player={value} cardClick={cardClick}/>)}
    </div>
    </>
  
  )
}

export default Grid