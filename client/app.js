import React, { useState, useEffect } from 'react';
import DataPanel from './components/dataPanel';
import SearchField from './components/searchfield';
import { getDash, getBottles, getExpired, getGoingExp } from './services/dataService';
import MassData from './components/massData';

const App = () => {
  const day = new Date('2021-04-12T11:10:06.473587Z');
  const [searchDate, setSearchDate] = useState(day); 
  const [dashData, setDashData] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [expired, setExpired] = useState([]);
  const [goingE, setGoingE] = useState([]);
  
  useEffect( async ()=>{
    const dash = await getDash(searchDate);
    const bottles = await getBottles(searchDate);
    const vaccinesExpired = await getExpired(searchDate);
    const going = await getGoingExp(searchDate);
    setBottles(bottles);
    setDashData(dash);
    setExpired(vaccinesExpired);
    setGoingE(going);
     
  }, [searchDate, setDashData, setBottles, setExpired, setGoingE]);
    
  

  return(
    <div>
      <h1>Vaccines</h1>
      <SearchField searchDate={searchDate} setSearchDate={setSearchDate}/>
      <DataPanel dashData={dashData} expired={expired}/>
      <MassData dashData={dashData} bottles={bottles} expired={expired}/>
    </div>
  );

};

export default App;