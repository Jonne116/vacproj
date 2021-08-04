import React from 'react';
import PropTypes from 'prop-types';

const DataPanel = ({dashData, expired, goingE}) => {
    
  const [vaccines, injections] = dashData;
  
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Orders</th>
            <th>Vaccines</th>
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
            <th>Manufacturer</th>
            <th>Orders expired</th>
            <th>Vaccines expired</th>
          </tr>
        </thead>
        <tbody>
          {expired ? expired.map(element => {
            return( 
              <tr key={element['_id'].vaccine}>
                <td>{element['_id'].vaccine}</td>
                <td>{element.ordersExpired}</td>
                <td>{element.injectionsExpired}</td>
              </tr>
            );
          }) : null}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Manufacturer</th>
            <th>Orders going to expire</th>
            <th>Vaccines going to expire</th>
          </tr>
        </thead>
        <tbody>
          {goingE ? goingE.map(element => {
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
  expired: PropTypes.array.isRequired,
  goingE : PropTypes.array.isRequired
};

export default DataPanel;