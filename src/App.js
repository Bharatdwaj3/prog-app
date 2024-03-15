import ProgressBar from './progress-bar.components';
import './App.css';
import React, { useEffect, useState } from 'react';




function App() {

  const [completed, setCompleted]=useState(0);
  
useEffect(()=>{
  setInterval(()=>setCompleted(Math.floor(Math.random()*100)+1),2000);
},[]);

  return (
    <div className="App">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed}/>
    </div>
  );
}

export default App;
