import React from "react";

function Search(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleSearch}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For A Webslinger"
          id="search"
        />
        <br />
        {/* <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default Search;