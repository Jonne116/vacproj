import React from 'react';
import PropTypes from 'prop-types';


const MassData = ({dashData, bottles, expired, expiredBefore}) => {
 
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
    <div className="dataWrap">
      <table>
        <thead>
          <tr>
            <th>Expired bottles</th>
            <th>Expired vaccines</th>
            <th>Vaccasines expired before usage</th>                 
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{bottlesExpired}</td>
            <td>{expiredInjections}</td>
            <td>{expiredBefore.expiredInjections}</td>
          </tr>
        </tbody>
      </table><table>
        <thead>
          <tr>
            <th>Vaccines used</th>
            <th>Amount of orders</th>
            <th>Amount of vaccines</th> 
            <th>Vaccasines left</th>        
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{injectionsExpire}</td>
            <td>{totalOrders}</td>
            <td>{totalInjections}</td>
            <td>{totalInjections-expiredInjections}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

};

MassData.propTypes = {
  dashData: PropTypes.array.isRequired,
  bottles: PropTypes.array.isRequired,
  expired: PropTypes.array.isRequired,
  expiredBefore: PropTypes.object.isRequired
};

export default MassData;