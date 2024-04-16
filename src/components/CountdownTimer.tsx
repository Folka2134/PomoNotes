import { useCountdown } from "@/hooks/useCountdown";
import DateTimeDisplay from "./shared/DateTimeDisplay";
import BreakTimeDisplay from "./shared/BreakTimeDisplay";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import PomoCounter from "./PomoCounter";

const CountdownTimer = ({ focusTime, breakTime }: any) => {
  const [startFocusCountdown, setStartFocusCountdown] = useState(false);
  const [startBreakCountdown, setStartBreakCountdown] = useState(false);
  const [displayBreakTime, setDisplayBreakTime] = useState(false);
  const [pomodoro, setPomodoro] = useLocalStorage("pomodoroCount", 0);

  const [workHours, workMinutes, workSeconds] = useCountdown(
    "focusTime",
    focusTime,
    startFocusCountdown,
    setStartFocusCountdown,
    setDisplayBreakTime,
    setPomodoro,
  );
  const [breakHours, breakMinutes, breakSeconds] = useCountdown(
    "breakTime",
    breakTime,
    startBreakCountdown,
    setStartBreakCountdown,
    setDisplayBreakTime,
    setPomodoro,
  );

  const startFocusTimer = () => {
    setStartFocusCountdown(true);
  };

  const startBreakTimer = () => {
    setStartBreakCountdown(true);
  };

  // const pauseTimer = () => {
  //   setStartFocusCountdown(false);
  // };

  const skipTimer = () => {
    setStartFocusCountdown(false);
    setStartBreakCountdown(false);
    setDisplayBreakTime((prev) => !prev);
  };

  useEffect(() => {
    const today = new Date().toDateString();

    if (localStorage.getItem("lastPomodoroDay") !== today) {
      setPomodoro(0);
      localStorage.setItem("lastPomodoroDay", today);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      {displayBreakTime ? (
        <BreakTimeDisplay
          hours={breakHours}
          minutes={breakMinutes}
          seconds={breakSeconds}
        />
      ) : (
        <DateTimeDisplay
          hours={workHours}
          minutes={workMinutes}
          seconds={workSeconds}
        />
      )}
      <div className="mt-1 flex gap-6">
        {displayBreakTime ? (
          <button onClick={startBreakTimer}>Play</button>
        ) : (
          <button onClick={startFocusTimer}>Play</button>
        )}
        <button onClick={skipTimer}>Skip</button>
      </div>
      <PomoCounter pomodoro={pomodoro} setPomodoro={setPomodoro} />
    </div>
  );
};

export default CountdownTimer;
