const PomoCounter = ({ pomodoro, setPomodoro }: any) => {
  return (
    <div className="mt-5 flex flex-col items-center text-xl">
      <div>
        Pomodoros:{" "}
        <span className="ml-1 rounded-full border-4 border-red-600 bg-red-500 px-4 py-2 text-2xl font-bold text-purple-700">
          {pomodoro}
        </span>
      </div>
      <button onClick={() => setPomodoro(0)}>Reset</button>
    </div>
  );
};

export default PomoCounter;
