type TimerProps = {
  value: number;
};

const Timer = ({ value }: TimerProps) => {
  return (
    <div>
      <p className="text-2xl font-bold ">{value}</p>
    </div>
  );
};

export default Timer;
