import { useSelector } from "react-redux";
import { playerOnDisplay } from "../utils";

export default function Display() {
  const gameIsPlaying = useSelector((state) => state.playing);
  const player1Score = useSelector((state) => state.player1);
  const player2Score = useSelector((state) => state.player2);
  const advantage = useSelector((state) => state.advantage);
  const winner = useSelector((state) => state.winner);
  return (
    <>
      {winner ? (
        <p className="display">{playerOnDisplay(winner)} gagne</p>
      ) : (
        <p className="display">
          {gameIsPlaying
            ? `Le score est ${player1Score} - ${player2Score}`
            : "C'est la pause"}
          {gameIsPlaying && advantage && (
            <>
              <br />
              Avantage {playerOnDisplay(advantage)}
            </>
          )}
        </p>
      )}
    </>
  );
}
