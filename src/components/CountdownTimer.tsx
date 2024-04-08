import { useCountdown } from "@/hooks/useCountdown";
import ExpiredTimeDisplay from "./shared/ExpiredTimeDisplay";
import DateTimeDisplay from "./shared/DateTimeDisplay";

const CountdownTimer = ({ targetDate }: any) => {
  const [hours, minutes, seconds] = useCountdown(targetDate);

  if (hours + minutes + seconds === 0) {
    return <ExpiredTimeDisplay />;
  } else {
    return (
      <DateTimeDisplay hours={hours} minutes={minutes} seconds={seconds} />
    );
  }
};

export default CountdownTimer;
