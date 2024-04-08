import Timer from "./Timer";

const DateTimeDisplay = ({ hours, minutes, seconds }: any) => {
  return (
    <div>
      <div>
        <Timer value={hours} />
        <Timer value={minutes} />
        <Timer value={seconds} />
      </div>
    </div>
  );
};

export default DateTimeDisplay;
