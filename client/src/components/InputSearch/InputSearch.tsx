import { FC, ChangeEvent } from "react";
import { IInputSearch } from "../../../interfaces/commonInterfaces";
import "./InputSearch.css";

const InputSearch: FC<IInputSearch> = ({ onInputChange }) => {
  return (
    <div className="sectionsearch">
      <input
        type="text"
        id="searchtask"
        onChange={(searchValue: ChangeEvent<HTMLInputElement>) =>
          onInputChange(searchValue.target.value)
        }
        placeholder="Search a cryptocurrency"
      />
    </div>
  );
};

export default InputSearch;
