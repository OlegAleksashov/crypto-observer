import { toolTip } from "./commonStyles";
import { TooltipProps } from "recharts";

export const formatNumber = (number: number): string => {
  if (Math.abs(number) < 1e3) return number.toString();
  const sign = Math.sign(number);
  const absNumber = Math.abs(number);
  const abbreviated = ["K", "M", "B", "T"];
  const abbreviatedNumber = abbreviated.reduce((acc, curr, index) => {
    const value = absNumber / Math.pow(1e3, index + 1);
    if (value >= 1) {
      return `${(sign * value).toFixed(1)}${curr}`;
    }
    return acc;
  }, "");
  return abbreviatedNumber;
};

export const customTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload) {
    const value = payload[0]?.value ?? 0;
    return (
      <div style={toolTip}>
        <h4>{label}</h4>
        <p>${value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export const date = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
