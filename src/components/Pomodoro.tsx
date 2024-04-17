import { useLocalStorage } from "@/hooks/useLocalStorage";
import CountdownOptions from "./shared/CountdownOptions";
import CountdownTimer from "./shared/CountdownTimer";

const Pomodoro = () => {
  // const focusTime = 20 * 1000;
  // const breakTime = 15 * 1000;
  const [focusTime, setFocusTime] = useLocalStorage("focus", 0);
  const [breakTime, setBreakTime] = useLocalStorage("break", 0);

  return (
    <div className="mt-24 lg:mt-52">
      <CountdownOptions
        focusTime={focusTime}
        breakTime={breakTime}
        setFocusTime={setFocusTime}
        setBreakTime={setBreakTime}
      />
      <CountdownTimer focusTime={focusTime} breakTime={breakTime} />
    </div>
  );
};

export default Pomodoro;
