import React, { useState, useEffect } from "react";
import Timeline  from "./Timeline";
import Histogram from "./Histogram";
import ScatterPlot from "./ScatterPlot";
import { useChartDimensions } from "./utils";

const WeatherDashbord = ({data}) => {
    console.log(data)
    



    return(
        <div>
            <h1>Weather dashbord</h1>
            <Timeline/>
            <Histogram/>
            <ScatterPlot/>
        </div>
    )

}

export default WeatherDashbord