import React, { useContext } from 'react';
import { FormContext } from '../context/FormProvider';

function Filters(props) {
  const { numericFilters, setNumericFilters } = useContext(FormContext);
  const { filter: { propertyFilter, comparisonFilter, numToCompare } } = props;

  const handleClick = () => {
    const numericFiltersCopy = [...numericFilters];
    const copiedFilter = numericFiltersCopy.find((filter) => {
      const result = filter.propertyFilter === propertyFilter;
      return result;
    });
    const index = numericFiltersCopy.indexOf(copiedFilter);
    numericFiltersCopy.splice(index, 1);
    setNumericFilters(numericFiltersCopy);
  };

  return (
    <div data-testid="filter">
      {`${propertyFilter} ${comparisonFilter} ${numToCompare}  `}
      <button onClick={ handleClick } type="button">Excluir</button>
    </div>
  );
}

export default Filters;
