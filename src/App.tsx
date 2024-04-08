import "./App.css";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  // const THREE_HOURS_IN_MS = 3 * 60 * 60 * 1000;
  const ONE_MINUTE_IN_MS = 10 * 1000;

  const BREAK_TIME_IN_MS = 15 * 1000;

  const NOW_IN_MS = new Date().getTime();

  const focusTime = new Date(NOW_IN_MS + ONE_MINUTE_IN_MS);
  const breakTime = new Date(NOW_IN_MS + BREAK_TIME_IN_MS + ONE_MINUTE_IN_MS);

  return (
    <div className="mt-24 flex justify-center lg:mt-52">
      <CountdownTimer targetDate={focusTime} breakTime={breakTime} />
    </div>
  );
}

export default App;
