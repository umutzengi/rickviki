import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  const [value, setValue] = React.useState("");
  let searchBtn = (e) => {
    e.preventDefault();
    setSearch(value);
    updatePageNumber(1);
  };
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
