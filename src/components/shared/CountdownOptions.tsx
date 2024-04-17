import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type CountdownOptionsProps = {
  focusTime: number;
  breakTime: number;
  setFocusTime: (value: number) => void;
  setBreakTime: (value: number) => void;
};

const CountdownOptions = (props: CountdownOptionsProps) => {
  const handleUpdateFocusTime = (value: string) => {
    props.setFocusTime(Number(value) * 60 * 1000);
  };

  const handleUpdateBreakTime = (value: string) => {
    props.setBreakTime(Number(value) * 60 * 1000);
  };

  return (
    <Popover>
      <PopoverTrigger>Options</PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2">
        <div className="flex items-center justify-center">
          <h3>Focus time:</h3>
          <Input
            className="ml-5 mr-1 h-8 w-12"
            onChange={(e) => handleUpdateFocusTime(e.target.value)}
            placeholder={(props.focusTime / 60 / 1000).toString()}
          />
          <span>(minutes)</span>
        </div>
        <div className="flex items-center justify-center">
          <h3>Break time:</h3>
          <Input
            className="ml-5 mr-1 h-8 w-12"
            onChange={(e) => handleUpdateBreakTime(e.target.value)}
            placeholder={(props.breakTime / 60 / 1000).toString()}
          />

          <span>(minutes)</span>
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default CountdownOptions;
