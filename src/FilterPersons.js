import React, { useState } from "react";

const FilterPersons = ({nameFilter, handleFilter}) => {

  return (
    <div>
      <label>
        Filter names with:
        <input onChange={handleFilter} id="filter"/>
      </label>
    </div>
  );
};

export default FilterPersons;
