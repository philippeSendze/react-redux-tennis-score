// actions creators

import { store } from "./store";

export const setPlaying = (playing) => ({
  type: "setPlaying",
  payload: playing,
});

export const restartGame = () => ({ type: "restart" });

export const pointScored = (player) => ({
  type: "pointScored",
  payload: { player: player },
});

export const autoplay = (store) => {
  const isPlaying = store.getState().playing;
  if (isPlaying || store.getState().winner) {
    // Déjà entrain de jouer, on ne fait rien
    return;
  }
  // on indique que la partie est en cours
  store.dispatch(setPlaying(true));
  playNextPoint(store);
};

function playNextPoint(store) {
  if (store.getState().playing === false) {
    return;
  }
  const time = 1000 + Math.floor(Math.random() * 2000);
  window.setTimeout(() => {
    if (store.getState().playing === false) {
      return;
    }
    const pointWinner = Math.random() > 0.3 ? "player1" : "player2";

    store.dispatch(pointScored(pointWinner));
    if (store.getState().winner) {
      store.dispatch(setPlaying(false));
      return;
    }
    playNextPoint(store);
  }, time);
}
