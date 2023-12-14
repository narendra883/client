import React, { useEffect} from 'react';
import * as d3 from 'd3';

const BarChart = (props)=> {
  const {data} = props
  useEffect(() => {
    // Call the function to create the bar chart when employeeData changes
    if (data.length > 0) {
      createBarChart(data);
    }
  }, [data]);

  // Function to create the bar chart
  const createBarChart = (data) => {
    // Set up the chart dimensions
    const width = 1000;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // Remove any existing SVG elements
    d3.select("#chart-container").selectAll("*").remove();

    // Create the SVG container
    const svg = d3.select("#chart-container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Create the scales
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.name))
      .padding(0.1);

    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => d.salary)]);

    // Create the bars
    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.name))
      .attr("width", x.bandwidth())
      .attr("y", d => y(d.salary))
      .attr("height", d => height - y(d.salary));

    // Create the x-axis
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Create the y-axis
    svg.append("g")
      .call(d3.axisLeft(y));
  };

  return (
    <div className="App">
      <h1 className='chart-text'>Employee Bar Chart</h1>
      <div id="chart-container"></div>
    </div>
  );
}

export default BarChart;
