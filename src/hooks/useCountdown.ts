import { useEffect, useState } from "react";

export const useCountdown = (targetDate: any) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countdownDuration, setCountdownDuration] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownDuration(countDownDate - new Date().getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [countDownDate])

  return getReturnValues(countdownDuration)
}

const getReturnValues = (countDown: number) => {
  // calculate time left
  const hours = Math.floor(countDown / (1000 * 60 * 60) % 24);
  const minutes = Math.floor(countDown / (1000 * 60) % 60);
  const seconds = Math.floor(countDown / 1000 % 60);

  return [hours, minutes, seconds]
}
