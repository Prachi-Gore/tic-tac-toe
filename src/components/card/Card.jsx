import { Icon } from "../icon/Icon"
import './Card.css'

export const Card = ({iconName}) => {
  return (
    <div className="card">
<Icon name={iconName } />
    </div>
  )
}
