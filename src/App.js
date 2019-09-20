import React, { useEffect, useState } from "react";
import axios from 'axios';

import "./App.css";
import DisplayData from './components/DisplayData.js';
import TitleLinker from './components/TitleLinker.js';
import ImageComponent from './components/ImageComponent.js';

function App() {
  const [ nasaData, setNasaData ] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => setNasaData(res.data))
    .catch(err => console.log(err))
  }, [])
  console.log(nasaData)
  
  return (
    <div className="App">
          <TitleLinker data={nasaData}/>
          <ImageComponent url={nasaData.url} />
          <DisplayData data={nasaData}/>
      
    </div>
  );
}

export default App;
