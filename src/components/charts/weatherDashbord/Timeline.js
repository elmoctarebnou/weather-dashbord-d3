import React, { useRef } from "react";
import { useChartDimensions } from "./utils";




const Timeline = ({ data, xAccessor, yAccessor, label }) => {
    const [ref, dimensions] = useChartDimensions()


    return (
        <div className="Timeline" ref={ref}>
            <h1>Timeline</h1>
        </div>
    )
}


export default Timeline