// src/BarChart.js

import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart1 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 500;
    const height = 300;

    // Hardcoded data for the bar chart
    const data = [25, 40, 80, 55, 90, 110, 70, 60, 30, 65];

    svg.attr("width", width).attr("height", height);

    // Set up the scales
    const x = d3.scaleBand()
      .domain(d3.range(data.length)) // The number of bars
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data)]) // The highest value in the data
      .nice()
      .range([height, 0]);

    // Create the bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d))
      .attr("fill", "steelblue");

    // Create the axes
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickFormat((i) => i + 1));

    svg.append("g").call(d3.axisLeft(y));
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default BarChart1;
