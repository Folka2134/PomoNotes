import { useCountdown } from "@/hooks/useCountdown";
import DateTimeDisplay from "./shared/DateTimeDisplay";
import BreakTimeDisplay from "./shared/BreakTimeDisplay";

const CountdownTimer = ({ targetDate, breakTime }: any) => {
  const [workHours, workMinutes, workSeconds] = useCountdown(targetDate);
  const [breakHours, breakMinutes, breakSeconds] = useCountdown(breakTime);

  if (workHours + workMinutes + workSeconds <= 0) {
    return (
      <BreakTimeDisplay
        hours={breakHours}
        minutes={breakMinutes}
        seconds={breakSeconds}
      />
    );
  } else {
    return (
      <DateTimeDisplay
        hours={workHours}
        minutes={workMinutes}
        seconds={workSeconds}
      />
    );
  }
};

export default CountdownTimer;
