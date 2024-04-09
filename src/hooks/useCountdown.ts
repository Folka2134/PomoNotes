import { useEffect, useState } from "react";

export const useCountdown = (targetDuration: number, startCountdown: boolean) => {
  const [countdownDuration, setCountdownDuration] = useState(targetDuration);
  const [isCountdownFinished, setIsCountdownFinished] = useState(false);

  useEffect(() => {
    if (startCountdown && !isCountdownFinished) {
      const interval = setInterval(() => {
        setCountdownDuration(prevDuration => {
          if (prevDuration <= 0) {
            // Stop the countdown
            setIsCountdownFinished(true);
            // Reset the countdown
            return targetDuration;
          } else {
            return prevDuration - 1000;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startCountdown, targetDuration, isCountdownFinished]);

  return [...getReturnValues(countdownDuration), isCountdownFinished];
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const hours = Math.floor(countDown / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(countDown / (1000 * 60) % 60);
  const seconds = Math.floor(countDown / 1000 % 60);

  return [hours, minutes, seconds]
}
