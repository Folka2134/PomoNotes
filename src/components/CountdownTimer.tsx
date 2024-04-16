import { useCountdown } from "@/hooks/useCountdown";
import DateTimeDisplay from "./shared/DateTimeDisplay";
import BreakTimeDisplay from "./shared/BreakTimeDisplay";
import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

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

  return (
    <div className="flex flex-col">
      {displayBreakTime ? (
        <>
          <BreakTimeDisplay
            hours={breakHours}
            minutes={breakMinutes}
            seconds={breakSeconds}
          />
          <button onClick={startBreakTimer}>Play</button>
        </>
      ) : (
        <>
          <DateTimeDisplay
            hours={workHours}
            minutes={workMinutes}
            seconds={workSeconds}
          />
          {!startFocusCountdown && (
            <button onClick={startFocusTimer}>Play</button>
          )}
        </>
      )}
      <button onClick={skipTimer}>Skip</button>
    </div>
  );
};

export default CountdownTimer;
