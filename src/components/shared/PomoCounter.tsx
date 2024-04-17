const PomoCounter = ({ pomodoro, setPomodoro }: any) => {
  return (
    <div className="mt-8 flex flex-col items-center text-xl">
      <div className="flex items-center justify-center gap-2">
        <h4 className="">Today:</h4>
        <span className="rounded-full border-2 border-red-700 bg-red-600 px-4 py-2 font-bold text-white">
          {pomodoro}
        </span>
      </div>
      {/* <button onClick={() => setPomodoro(0)}>Reset</button> */}
      {/* <div className="mb-5 flex flex-col items-center justify-center">
        <span className="mb-2 rounded-full border-4 border-red-700 bg-red-600 px-10 py-8 text-4xl font-bold text-white">
          0
        </span>
        <h3>Total Pomodoros</h3>
      </div> */}
    </div>
  );
};

export default PomoCounter;
