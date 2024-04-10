import { useEffect, useState } from "react";

export const useCountdown = (targetDuration: number, startCountdown: boolean, setStartCountDown: any) => {
  const [countdownDuration, setCountdownDuration] = useState(targetDuration);

  useEffect(() => {
    if (startCountdown) {
      const interval = setInterval(() => {
        setCountdownDuration(prevDuration => {
          if (prevDuration > 0) {
            return prevDuration - 1000;
          } else {
            clearInterval(interval);
            setStartCountDown(false);
            return targetDuration; // Reset the timer
          }
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [startCountdown, targetDuration]);

  return [...getReturnValues(countdownDuration)];
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  const hours = Math.floor(countDown / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(countDown / (1000 * 60) % 60);
  const seconds = Math.floor(countDown / 1000 % 60);

  return [hours, minutes, seconds]
}
