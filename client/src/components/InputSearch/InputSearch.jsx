import React from "react";
import "./InputSearch.css";

const InputSearch = ({ onInputChange }) => {
  return (
    <div className="sectionsearch">
      <input
        type="text"
        id="searchtask"
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Search a cryptocurrency"
      />
    </div>
  );
};

export default InputSearch;