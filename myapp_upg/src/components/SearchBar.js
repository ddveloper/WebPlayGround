import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term); // use this.props to get "props"
  };

  return (
    <div className="ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
