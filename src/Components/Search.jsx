import { useState } from "react";

const Search = () => {
  const [searchWord, setSearchWord] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search your movie"
        value={searchWord}
        onChange={(elem) => {
          setSearchWord(elem.target.value);
        }}
      />
      <img
        src={
          "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-zik280t3.png"
        }
        alt="search"
      />
    </div>
  );
};

export default Search;
