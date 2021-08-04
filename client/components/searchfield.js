import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';

const SearchField = ({searchDate, setSearchDate}) => {
  const offSet = new Date();
 
  return(
    <div className="wide">
      <DateTimePicker
        onChange={setSearchDate}
        value={searchDate}
        disableClock={true}
        maxDetail="second"
        clearIcon={null}
        className="datePick"
      />
      <h5>{offSet.getTimezoneOffset() !== 0 ? `Browser timezone ${-offSet.getTimezoneOffset()/60} hour(s) from UTC±0` : null}</h5>
      

    </div>
  );

};

SearchField.propTypes = {
  searchDate: PropTypes.object.isRequired,
  setSearchDate: PropTypes.func.isRequired,
};

export default SearchField;