import React from 'react';

const SearchField = ({searchDate, setSearchDate}) => {

  const time = new Date(searchDate);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
  };

  console.log(typeof time);
  return(
    <div>
      
      <input type="text" />
      <input type="submit" value="HAE"/>
      <h3>{time.toLocaleString()}</h3>

    </div>
  );

};

export default SearchField;