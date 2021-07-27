import React, { useState, useEffect } from 'react';
import DataPanel from './components/dataPanel';
import SearchField from './components/searchfield';
import { getVaccines, getInjections } from './services/dataService';

const App = () => {

  const [searchDate, setSearchDate] = useState(Date.now());
  const [injections, setInjections] = useState([]);
  const [vaccines, setVaccines] = useState([]);

  useEffect( async ()=>{
    const vaccineData = await getVaccines();
    const injectionData = await getInjections();
    setVaccines(vaccineData);
    setInjections(injectionData);

  }, [setVaccines, setInjections]);

  return(
    <div>
      <h1>Rokotustietokanta</h1>
      <SearchField searchDate={searchDate} setSearchDate={setSearchDate} date={searchDate}/>
      <DataPanel injections={injections} vaccines={vaccines} />
    </div>
  );

};

export default App;