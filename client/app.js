import React, { useState, useEffect } from 'react';
import DataPanel from './components/dataPanel';
import SearchField from './components/searchfield';
import { getDash, getBottles, getExpired, getGoingExp, getExpiredBefore } from './services/dataService';
import MassData from './components/massData';
import BackgroundCss from './components/backgroundcss';

const App = () => {
  const day = new Date('2021-04-12T11:10:06.473587Z');
  const [searchDate, setSearchDate] = useState(day); 
  const [dashData, setDashData] = useState([]);
  const [bottles, setBottles] = useState([]);
  const [expired, setExpired] = useState([]);
  const [goingE, setGoingE] = useState([]);
  const [expiredBefore, setExpiredBefore] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect( async ()=>{
    setLoading(true);
    const dash = await getDash(searchDate);
    const bottles = await getBottles(searchDate);
    const vaccinesExpired = await getExpired(searchDate);
    const going = await getGoingExp(searchDate);
    const before = await getExpiredBefore(searchDate);
    setBottles(bottles);
    setDashData(dash);
    setExpired(vaccinesExpired);
    setGoingE(going);
    setExpiredBefore(before);
    setLoading(false);
  }, [searchDate, setDashData, setBottles, setExpired, setGoingE, setExpiredBefore]);

  return(
    <div className="wide">
      <BackgroundCss />
      <h1>Vaccines</h1>
      <SearchField searchDate={searchDate} setSearchDate={setSearchDate} setLoading={setLoading}/>
      {loading ? <div id="load"></div> :
        <div className="datacont">
          <DataPanel dashData={dashData} expired={expired} goingE={goingE}/>
          <MassData dashData={dashData} bottles={bottles} expired={expired} expiredBefore={expiredBefore}/>
        </div>
      }
    </div>
  );

};

export default App;