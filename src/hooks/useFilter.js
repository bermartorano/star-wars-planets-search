import { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

function useFilter() {
  const { planets, filteredPlanets, setFilteredPlanets } = useContext(PlanetsContext);

  const searchByName = (name) => {
    const plntsFilteredByName = filteredPlanets.filter((plt) => {
      const result = plt.name.toLowerCase().includes(name);
      return result;
    });
    return plntsFilteredByName;
  };

  const filterByProprierties = (filterArr) => {
    const NumericFilteredPlanets = filterArr.reduce((acc, cur) => {
      const parcialFiltered = acc.filter((plnt) => {
        switch (cur.comparisonFilter) {
        case 'menor que':
          return +plnt[cur.propertyFilter] < +cur.numToCompare;

        case 'maior que':
          return +plnt[cur.propertyFilter] > +cur.numToCompare;

        case 'igual a':
          return +plnt[cur.propertyFilter] === +cur.numToCompare;

        default: return [];
        }
      });
      return parcialFiltered;
    }, planets);
    setFilteredPlanets(NumericFilteredPlanets);
  };

  return {
    searchByName, filterByProprierties,
  };
}

export default useFilter;
