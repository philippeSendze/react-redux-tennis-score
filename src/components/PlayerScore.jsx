import { useSelector } from "react-redux";
import { playerOnDisplay } from "../utils";

export default function PlayerScore(props) {
  const player = props.player;
  // player est soit "player1" soit "player2"
  // on l'utilise dans le selector pour accéder au score du joueur !
  const score = useSelector((state) => state[player]);
  const hasAdvantage = useSelector((state) => state.advantage === player);
  const playerName = playerOnDisplay(player);

  return (
    <div className="player-score">
      <p>{playerName}</p>
      <p>{hasAdvantage ? `Avantage - ${score}` : score}</p>
    </div>
  );
}
