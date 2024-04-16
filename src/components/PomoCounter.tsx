const PomoCounter = ({ pomodoro, setPomodoro }: any) => {
  return (
    <div className="mt-5 flex flex-col items-center text-xl">
      <div>
        Pomodoros: <span className="text-purple-700">{pomodoro}</span>
      </div>
      <button onClick={() => setPomodoro(0)}>Reset</button>
    </div>
  );
};

export default PomoCounter;
