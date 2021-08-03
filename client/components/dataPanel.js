import React from 'react';
import PropTypes from 'prop-types';

const DataPanel = ({dashData, expired}) => {
    
  const [vaccines, injections] = dashData;
    
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Vaccine</th>
            <th>Orders</th>
            <th>injections</th>
          </tr>
        </thead>
        <tbody>
          {vaccines ? vaccines.map(element => {
            return( 
              <tr key={element['_id'].vaccine}>
                <td>{element['_id'].vaccine}</td>
                <td>{element.orders}</td>
                <td>{element.injections}</td>
              </tr>
            );
          }) : null}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Gender</th>
            <th>Vaccinated</th>
          </tr>
        </thead>
        <tbody>
          {injections ? injections.map(element => {
            return( 
              <tr key={element['_id'].gender}>
                <td className='capi'>{element['_id'].gender}</td>
                <td>{element.vaccinated}</td>
              </tr>
            );
          }) : null}
        </tbody>
      </table>
    </div>
  );
    
};


DataPanel.propTypes = {
  dashData: PropTypes.array.isRequired,
  expired: PropTypes.array.isRequired
};

export default DataPanel;