import React, { useState, useRef, useEffect } from "react";
import ScatterplotChart from "./components/charts/scatterplotChart";
import WeatherDashbord from "./components/charts/weatherDashbord/weatherDashbord";
import Timeline from "./components/charts/weatherDashbord/Timeline"
import ScatterPlot from "./components/charts/weatherDashbord/ScatterPlot"
import Histogram from "./components/charts/weatherDashbord/Histogram"
import { getScatterData, getTimelineData } from "./utils"
import "./App.css";

const getData = () => {
  return {
    timeline: getTimelineData(), 
    scatter: getScatterData()
  }
}

function App() {
  const [data, setData] = useState(getData())

  useInterval(() => {
    setData(getData())
  }, 4000)
  return (
    <div className="App">
      <WeatherDashbord data={data}/>
    </div>
  );
}

export default App;


function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}