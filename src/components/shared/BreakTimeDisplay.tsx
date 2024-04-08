import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Timer from "./Timer";

const BreakTimeDisplay = ({ hours, minutes, seconds }: any) => {
  return (
    <div className="flex">
      <Card className="bg-[#111114] text-white">
        <CardHeader>
          <CardTitle className="">Break time</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-2">
          <Timer value={hours} />:
          <Timer value={minutes} />:
          <Timer value={seconds} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BreakTimeDisplay;
