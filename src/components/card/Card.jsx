import { Icon } from "../icon/Icon"
import './Card.css'

export const Card = ({iconName,index,cardClick,player}) => {
  let icon =<Icon />
  if(player=='X'){
    icon=<Icon name='cross' />
  } else if(player=='O'){
    icon=<Icon name='circle' />
  }
  // player=='X' ? icon=<Icon name='cross' /> : icon=<Icon name='circle' />
  return (
   
    <div className="card" onClick={()=>cardClick(index)}>
    
{icon}
    </div>
  )
}
