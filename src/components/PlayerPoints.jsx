import React from "react";
import { useSelector } from "react-redux";
import { selectPlayerPoints } from "../selectors";
import { playerOnDisplay } from "../utils";

export default function PlayerPoints(props) {
  const player = props.player;
  const playerName = playerOnDisplay(player);
  const numberOfGamesWon = useSelector(selectPlayerPoints(player));
  return (
    <div className="player-games">
      <p>{playerName}</p>
      {numberOfGamesWon > 1 ? (
        <p>{numberOfGamesWon} jeux gagnés</p>
      ) : (
        <p>{numberOfGamesWon} jeu gagné</p>
      )}
    </div>
  );
}
