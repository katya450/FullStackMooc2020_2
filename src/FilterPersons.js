import React, { useState } from "react";

const FilterPersons = ({handleFilter}) => {

  return (
    <div>
      <label>
        Filter names with:
        <input value="" onChange={handleFilter} />
      </label>
    </div>
  );
};

export default FilterPersons;
