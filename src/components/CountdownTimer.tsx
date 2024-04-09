import { useCountdown } from "@/hooks/useCountdown";
import DateTimeDisplay from "./shared/DateTimeDisplay";
import BreakTimeDisplay from "./shared/BreakTimeDisplay";
import { useState } from "react";

const CountdownTimer = ({ focusTime, breakTime }: any) => {
  const [startFocusCountdown, setStartFocusCountdown] = useState(false);
  const [startBreakCountdown, setStartBreakCountdown] = useState(false);

  const [workHours, workMinutes, workSeconds] = useCountdown(
    focusTime,
    startFocusCountdown,
  );
  const [breakHours, breakMinutes, breakSeconds] = useCountdown(
    breakTime,
    startBreakCountdown,
  );

  console.log(workHours, workMinutes, workSeconds);

  const startFocusTimer = () => {
    setStartFocusCountdown(true);
  };

  const startBreakTimer = () => {
    setStartBreakCountdown(true);
  };

  // const pauseTimer = () => {
  //   setStartCountdown(false);
  // };

  // const resetTimer = () => {
  //   setStartCountdown(false);
  //   setResetCountdown((prev) => prev + 1);
  // };
  return (
    <div>
      <DateTimeDisplay
        hours={workHours}
        minutes={workMinutes}
        seconds={workSeconds}
      />
      <button onClick={startFocusTimer}>Play</button>

      <BreakTimeDisplay
        hours={breakHours}
        minutes={breakMinutes}
        seconds={breakSeconds}
      />
      <button onClick={startBreakTimer}>Play</button>
    </div>
  );
};

export default CountdownTimer;
