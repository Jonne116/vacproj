import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';

const SearchField = ({searchDate, setSearchDate}) => {
  const offSet = new Date();
 
  return(
    <div>
      <DateTimePicker
        onChange={setSearchDate}
        value={searchDate}
        disableClock={true}
        maxDetail="second"
      />
      <h4>{offSet.getTimezoneOffset() !== 0 ? `Browser timezone ${offSet.getTimezoneOffset()/60}GMT` : null}</h4>
      

    </div>
  );

};

SearchField.propTypes = {
  searchDate: PropTypes.object.isRequired,
  setSearchDate: PropTypes.func.isRequired,
};

export default SearchField;