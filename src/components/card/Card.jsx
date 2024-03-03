import { Icon } from "../icon/Icon";
import "./Card.css";

export const Card = ({ index, cardClick, player,gameEnd }) => {
  let icon = <Icon />;
  if (player == "X") {
    icon = <Icon name="cross" />;
  } else if (player == "O") {
    icon = <Icon name="circle" />;
  }
  return (
    <div className="card" onClick={() => player == "" && !gameEnd && cardClick(index)}>
      {icon}
    </div>
  );
};
