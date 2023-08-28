// import { Component } from 'react';
import { FilterLabel, FilterInput } from './Styles';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <>
      <FilterLabel>
        Find contacts by name:
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </FilterLabel>
    </>
  );
};
export default Filter;
