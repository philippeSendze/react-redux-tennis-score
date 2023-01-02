import Display from "./components/Display";
import PlayerPoints from "./components/PlayerPoints";
import PlayerScore from "./components/PlayerScore";
import PlayerScoreButton from "./components/PlayerScoreButton";
import PlayPauseButton from "./components/PlayPauseButton";
import RestartButton from "./components/RestartButton";

function App() {
  return (
    <>
      <PlayerPoints player="player1" />
      <PlayerPoints player="player2" />
      <Display />
      <PlayerScore player="player1" />
      <PlayerScore player="player2" />
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
