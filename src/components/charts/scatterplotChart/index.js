import React, { useEffect } from "react";

import * as d3 from "d3";
import dataset from "./data";
import { color } from "d3";

const ScatterplotChart = () => {

    useEffect(() => {
        console.table(dataset[0])
        /* STEPS IN DRAWING ANY CHART */
        // 1. Access data
        // 2. Create chart dimenssions
        // 3. Draw canvas
        // 4. Create scales
        // 5. Draw data
        // 6. Draw peripherals
        // 7. Set up interactions
        const xAccessor = d => d.dewPoint
        const yAccessor = d => d.humidity
        const width = d3.min([
            window.innerWidth * 0.9,
            window.innerHeight * 0.9
        ])
        let dimensions = {
            width: width,
            height: width,
            margin: {
                top: 10,
                right: 10, 
                bottom: 50,
                left: 50,
            }
        }
        dimensions.boundedWidth = 
            dimensions.width - dimensions.margin.left - dimensions.margin.right

        dimensions.boundedHeight = 
            dimensions.height - dimensions.margin.top - dimensions.margin.bottom

        const wrapper = d3.select("#wrapper")
            .append("svg")
                .attr("width", dimensions.width)
                .attr("height", dimensions.height)
        
        const bounds = wrapper.append("g")
            .style("transform",
              `translate(
                    ${dimensions.margin.left}px, 
                    ${dimensions.margin.top}px
                )`  
            )
        const xScale = d3.scaleLinear()
            .domain(d3.extent(dataset, xAccessor))
            .range([0, dimensions.boundedWidth])
            .nice()

        const yScale = d3.scaleLinear()
            .domain(d3.extent(dataset, yAccessor))
            .range([dimensions.boundedHeight, 0])
            .nice()
        
        // let dots = bounds.selectAll("circle")
        //         .data(dataset)
        //     .enter().append("circle")
        //         .attr("cx", d => xScale(xAccessor(d)))
        //         .attr("cy", d => yScale(yAccessor(d)))
        //         .attr("r", 5)
        //         .attr("fill", "cornflowerblue")

        const drawDots = (dataset, color) => {
            const dots = bounds.selectAll("circle").data(dataset)

            dots
                .enter().append("circle")
                .attr("cx", d => xScale(xAccessor(d)))
                .attr("cy", d => yScale(yAccessor(d)))
                .attr("r", 5)
                .attr("fill", color)
        }
        drawDots(dataset.slice(0, 50), "darkgrey")
        setTimeout(() => {
            drawDots(dataset, "cornflowerblue")
        }, 1000)




    }, [])


    return (
        <div id="wrapper">

        </div>
    )
}

export default ScatterplotChart
