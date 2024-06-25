import { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
    },
  };
};

export default useInput;