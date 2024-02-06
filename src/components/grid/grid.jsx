import { Card } from "../card/Card"
import './grid.css'

const Grid = ({numberOfCards}) => {
  return (
    <div className="grid">
    {Array(numberOfCards).fill(<Card/>).map((item,index)=><Card key={index}/>)}
    </div>
  )
}

export default Grid