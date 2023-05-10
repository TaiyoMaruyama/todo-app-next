import { useState } from "react";
import React from "react";
import { CreateButton } from "./commonParts/createButton";
import { Button } from "@mui/material";

type Props = {
  handleSearch: (searchValue: string) => void;
};

export const SearchArea: React.FC<Props> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(searchValue);
  };

  const handleReset = () => {
    handleSearch("");
    setSearchValue("");
  };

  return (
    <>
      <div className="list-header">
        <div className="filter-frame">
          <input
            type="text"
            placeholder="検索"
            value={searchValue}
            onChange={handleChange}
            className="search-input"
          />
          <Button variant="outlined" onClick={handleButtonClick}>
            検索
          </Button>
          <Button variant="outlined" onClick={handleReset}>
            リセット
          </Button>
        </div>
        <CreateButton />
      </div>
    </>
  );
};
