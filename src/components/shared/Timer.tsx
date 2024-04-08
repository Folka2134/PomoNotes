type TimerProps = {
  value: number;
};

const Timer = ({ value }: TimerProps) => {
  return (
    <div>
      <p>{value}</p>
    </div>
  );
};

export default Timer;
