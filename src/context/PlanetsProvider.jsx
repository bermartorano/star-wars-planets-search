import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const PlanetsContext = createContext();

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [finalPlanets, setFinalPlanets] = useState([]);

  const values = useMemo(() => ({
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    finalPlanets,
    setFinalPlanets,
  }), [planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    finalPlanets,
    setFinalPlanets]);

  return (
    <PlanetsContext.Provider value={ values }>
      { children }
    </PlanetsContext.Provider>
  );
}

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
