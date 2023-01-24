import React, { useEffect, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import TableRow from './TableRow';
import { PlanetsContext } from '../context/PlanetsProvider';

function Table() {
  const { makeFetch } = useFetch();
  const {
    setPlanets,
    setFilteredPlanets,
    setFinalPlanets,
    finalPlanets,
  } = useContext(PlanetsContext);

  useEffect(() => {
    const getPlanets = async () => {
      const request = await makeFetch();
      setPlanets(request);
      setFilteredPlanets(request);
      setFinalPlanets(request);
    };

    getPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col" className="header-row">Name</th>
            <th scope="col" className="header-row">Rotation Period</th>
            <th scope="col" className="header-row">Orbital Period</th>
            <th scope="col" className="header-row">Diameter</th>
            <th scope="col" className="header-row">Climate</th>
            <th scope="col" className="header-row">Gravity</th>
            <th scope="col" className="header-row">Terrain</th>
            <th scope="col" className="header-row">Surface Water</th>
            <th scope="col" className="header-row">Population</th>
            <th scope="col" className="header-row">Films</th>
            <th scope="col" className="header-row">Created</th>
            <th scope="col" className="header-row">Edited</th>
            <th scope="col" className="header-row">Url</th>
          </tr>
        </thead>
        <tbody>
          {finalPlanets.map((plnt, i) => <TableRow key={ i } planet={ plnt } />)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
