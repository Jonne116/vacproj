import React from 'react';
import PropTypes from 'prop-types';

const DataPanel = ({injections, vaccines, date}) => {

  return(
    <div>
      <div id="arrivedVaccines">
        
      </div>
      <div id="usedVaccines">
        
      </div>
      <div id="vaccineManufac">
        
      </div>
      <div id="expiredVaccines">

      </div>
      <div id="expiredBeforeUsed">

      </div>
      <div id="vaccinesLeft">

      </div>
      <div id="expires10">

      </div>
    </div>
  );
};

DataPanel.propTypes = {
  injections: PropTypes.array.isRequired,
  vaccines: PropTypes.array.isRequired,
  date: PropTypes.date.isRequired
};

export default DataPanel;