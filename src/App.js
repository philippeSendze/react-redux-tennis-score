import Display from "./components/Display";
import PlayerScoreButton from "./components/PlayerScoreButton";
import PlayPauseButton from "./components/PlayPauseButton";
import RestartButton from "./components/RestartButton";

function App() {
  return (
    <>
      <Display />
      <div className="buttons">
        <div className="buttons-row">
          <PlayerScoreButton player="player1" />
          <PlayerScoreButton player="player2" />
        </div>
        <div className="buttons-row">
          <PlayPauseButton />
          <RestartButton />
        </div>
      </div>
    </>
  );
}

export default App;
