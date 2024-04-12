import { toolTip } from "./commonStyles";

export const formatNumber = (number) => {
  if (Math.abs(number) < 1e3) return number;
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

export const customTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div style={toolTip}>
        <h4>{label}</h4>
        <p>${payload[0].value.toLocaleString()}</p>
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