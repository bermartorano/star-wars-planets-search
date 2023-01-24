import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';

export default function OrderComponente() {
  const [orderParam, setOrderParam] = useState({
    orderProperty: 'population',
  });
  const { finalPlanets, setFinalPlanets } = useContext(PlanetsContext);

  const handleSelect = ({ target }) => {
    const { value, name } = target;
    setOrderParam({ ...orderParam, [name]: value });
  };

  const handleClick = () => {
    const unknownValue = +1;
    const { orderProperty, orderRadio } = orderParam;
    console.log('Propriedade: ', orderProperty);
    const finalPlanetsCopy = [...finalPlanets];
    console.log('Ordem: ', orderRadio);

    if (orderRadio === 'DSC') {
      finalPlanetsCopy.sort((a, b) => {
        console.log('primeira propriedade: ', a[orderProperty]);
        console.log('segunda propriedade: ', b[orderProperty]);
        if (a[orderProperty] === 'unknown') return unknownValue;
        return b[orderProperty] - a[orderProperty];
      });
    } else if (orderRadio === 'ASC') {
      finalPlanetsCopy.sort((a, b) => {
        if (a[orderProperty] === 'unknown') return unknownValue;
        return a[orderProperty] - b[orderProperty];
      });
    }
    setFinalPlanets(finalPlanetsCopy);
    console.log(finalPlanetsCopy);
  };

  return (
    <div>
      <select
        name="orderProperty"
        data-testid="column-sort"
        onChange={ handleSelect }
      >
        <option value="population" selected>population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <label htmlFor="radio-select-asc">
        ASC
        <input
          name="orderRadio"
          id="radio-select-asc"
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          onClick={ handleSelect }
        />
      </label>
      <label htmlFor="radio-select-dsc">
        DESC
        <input
          name="orderRadio"
          id="radio-select-dsc"
          type="radio"
          data-testid="column-sort-input-desc"
          value="DSC"
          onClick={ handleSelect }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
      >
        Ordenar
      </button>
    </div>
  );
}
