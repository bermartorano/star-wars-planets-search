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
    const { orderProperty, orderRadio } = orderParam;
    const plntsWithUnknown = [];
    const plntsWithoutUnkown = [];

    finalPlanets.forEach((plnt) => {
      if (Number.isNaN(Number(plnt[orderProperty]))) {
        plntsWithUnknown.push(plnt);
      } else {
        plntsWithoutUnkown.push(plnt);
      }
    });

    if (orderRadio === 'DSC') {
      plntsWithoutUnkown.sort((a, b) => b[orderProperty] - a[orderProperty]);
    } else if (orderRadio === 'ASC') {
      plntsWithoutUnkown.sort((a, b) => a[orderProperty] - b[orderProperty]);
    }
    setFinalPlanets([...plntsWithoutUnkown, ...plntsWithUnknown]);
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
