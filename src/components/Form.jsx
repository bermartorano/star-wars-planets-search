import React, { useContext, useEffect, useState } from 'react';
import useFilter from '../hooks/useFilter';
import { FormContext } from '../context/FormProvider';
import { PlanetsContext } from '../context/PlanetsProvider';

function Form() {
  const { searchText,
    setSearchText,
    numericFilters,
    setNumericFilters,
  } = useContext(FormContext);
  const { setFinalPlanets, filteredPlanets } = useContext(PlanetsContext);
  const { searchByName, filterByProprierties } = useFilter();
  const [currentFilter, setCurrentFilter] = useState({
    propertyFilter: 'population',
    comparisonFilter: 'maior que',
    numToCompare: '0',
  });

  useEffect(() => {
    setFinalPlanets(searchByName(searchText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, filteredPlanets]);

  useEffect(() => {
    filterByProprierties(numericFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numericFilters]);

  const handleSearchChange = ({ target }) => {
    const { value } = target;
    setSearchText(value);
  };

  const handleNumFilters = ({ target }) => {
    const { value, name } = target;
    setCurrentFilter(
      {
        ...currentFilter,
        [name]: value,
      },
    );
  };

  const handleClick = () => {
    setNumericFilters(([...numericFilters, currentFilter]));
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        placeholder="Filtre pelo nome"
        value={ searchText }
        onChange={ handleSearchChange }
      />
      <select
        name="propertyFilter"
        data-testid="column-filter"
        onChange={ handleNumFilters }
      >
        <option value="population" selected>population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparisonFilter"
        onChange={ handleNumFilters }
        data-testid="comparison-filter"
      >
        <option value="maior que" selected>maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleNumFilters }
        name="numToCompare"
        type="number"
        data-testid="value-filter"
        value={ currentFilter.numToCompare }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        filtrar
      </button>
    </div>
  );
}

export default Form;
