import React from 'react';
import PropTypes from 'prop-types';


const MassData = ({dashData, bottles, expired}) => {
  const vaccines = dashData[0];
  let bottlesExpired = 0;
  
  const injectionsExpire = bottles?.reduce((acc, curr) => {
    bottlesExpired++;
    return acc + curr.injections;
  }, 0);

  const totalOrders = vaccines?.reduce((acc, curr) => {
    return acc + curr.orders;
  }, 0);
  const totalInjections = vaccines?.reduce((acc, curr) => {
    return acc + curr.injections;
  }, 0);
  const expiredInjections = expired?.reduce((acc, curr) => {
    return acc + curr.injectionsExpired;
  }, 0);

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Expired bottles</th>
            <th>Expired injections</th>            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bottlesExpired}</td>
            <td>{expiredInjections}</td>
          </tr>
        </tbody>
      </table><table>
        <thead>
          <tr>
            <th>Injections used</th>
            <th>Amount of orders</th>
            <th>Total injections</th>         
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{injectionsExpire}</td>
            <td>{totalOrders}</td>
            <td>{totalInjections}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

};

MassData.propTypes = {
  dashData: PropTypes.array.isRequired,
  bottles: PropTypes.array.isRequired,
  expired: PropTypes.array.isRequired
};

export default MassData;