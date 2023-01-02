export const selectPlayerWithAdvantage = (player) => {
  return (state) => state.advantage === player;
};

export const selectPlayerScore = (player) => {
  return (state) => state[player];
};

export const selectPlayerPoints = (player) => {
  return (state) =>
    state.history.filter((game) => game.winner === player).length;
};

export const selectDisplayText = (state) => {
  if (state.winner) {
    if (state.winner === "player1") {
      return "Joueur 1 gagne";
    } else {
      return "Joueur 2 gagne";
    }
  } else if (state.playing === false) {
    return "C'est la pause";
  } else {
    let text = "Le score est: " + state.player1 + " - " + state.player2;
    if (state.advantage) {
      if (state.advantage === "player1") {
        text += " avantage joueur 1";
      } else {
        text += " avantage joueur 2";
      }
    }
    return text;
  }
};
