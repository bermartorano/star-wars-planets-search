import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import TableRow from './TableRow';

function Table() {
  const { makeFetch } = useFetch();
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const request = await makeFetch();
      const receivedPlanets = request.results;
      const planetsWithoutRes = receivedPlanets.map((pla) => {
        delete pla.residents;
        return pla;
      });
      setPlanets(planetsWithoutRes);
    };

    getPlanets();
  }, []);

  return (
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
        {planets.map((plnt, index) => <TableRow key={ index } planet={ plnt } />)}
      </tbody>
    </table>
  );
}

export default Table;
