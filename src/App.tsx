import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  const THREE_HOURS_IN_MS = 3 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeHours = new Date(NOW_IN_MS + THREE_HOURS_IN_MS);

  return (
    <div>
      <h1>Pomo Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeHours} />
    </div>
  );
}

export default App;
