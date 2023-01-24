import React, { useContext, useEffect, useState } from 'react';
import useFilter from '../hooks/useFilter';
import { FormContext } from '../context/FormProvider';
import { PlanetsContext } from '../context/PlanetsProvider';
import Filters from './Filters';

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
    // setNumericFilters([...numericFilters, { ...currentFilter }]);
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

  const selectedFiltersChecker = (selectedOption) => {
    const alreadySelected = numericFilters.some(({ propertyFilter }) => {
      const result = propertyFilter === selectedOption;
      return result;
    });
    return alreadySelected;
  };

  const handleClick = () => {
    setNumericFilters(([...numericFilters, currentFilter]));
  };

  const handleClickExcludeAll = () => {
    setNumericFilters([]);
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
        onClick={ handleNumFilters }
      >
        { !selectedFiltersChecker('population') && (
          <option value="population" selected>population</option>)}
        { !selectedFiltersChecker('orbital_period') && (
          <option value="orbital_period">orbital_period</option>) }
        {!selectedFiltersChecker('diameter') && (
          <option value="diameter">diameter</option>)}
        {!selectedFiltersChecker('rotation_period') && (
          <option value="rotation_period">rotation_period</option>)}
        {!selectedFiltersChecker('surface_water') && (
          <option value="surface_water">surface_water</option>)}
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
      {numericFilters.map((filter, i) => <Filters key={ i } filter={ filter } />)}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleClickExcludeAll }
      >
        Excluir todos
      </button>
    </div>
  );
}

export default Form;
