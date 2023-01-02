import React from "react";
import { useDispatch } from "react-redux";

export default function PlayerScoreButton(props) {
  const dispatch = useDispatch();
  const player = props.player;
  const nameOnButton = player === "player1" ? "Joueur 1" : "Joueur 2";
  return (
    <button
      className="button"
      onClick={() => {
        dispatch({ type: "pointScored", payload: { player: player } });
      }}
    >
      {" "}
      Point {nameOnButton}
    </button>
  );
}
