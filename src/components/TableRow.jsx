import React from 'react';
import PropTypes from 'prop-types';

function TableRow(props) {
  const { planet: { name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    films,
    created,
    edited,
    url } } = props;

  return (
    <tr>
      <td data-testid="planet-name">{name}</td>
      <td>{rotationPeriod}</td>
      <td>{orbitalPeriod}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{surfaceWater}</td>
      <td>{population}</td>
      <td>{films}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{name}</td>
      <td>{url}</td>
    </tr>
  );
}

export default TableRow;

TableRow.propTypes = {
  planet: PropTypes.shape(PropTypes.shape(PropTypes.any)).isRequired,
};
