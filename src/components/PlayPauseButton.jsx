import { useDispatch } from "react-redux";

export default function PlayPauseButton() {
  // (b) on utilise le hooks useDispatch dans notre composant
  // pour récupérer la fonction dispatch de redux
  const dispatch = useDispatch();

  return (
    <button
      className="button"
      onClick={() => {
        // (c) au clique sur le bouton on exécute la fonction
        // dispatch avec une action.
        dispatch({ type: "playPause" });
      }}
    >
      Pause / Reprendre
    </button>
  );
}
