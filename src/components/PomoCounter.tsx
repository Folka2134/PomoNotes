const PomoCounter = ({ pomodoro, setPomodoro }: any) => {
  return (
    <div className="mt-8 flex flex-col items-center text-xl">
      <div>
        Pomodoros:{" "}
        <span className="ml-1 rounded-full border-4 border-red-700 bg-red-600 px-4 py-2 text-2xl font-bold text-white">
          {pomodoro}
        </span>
      </div>
      <button onClick={() => setPomodoro(0)}>Reset</button>
    </div>
  );
};

export default PomoCounter;
