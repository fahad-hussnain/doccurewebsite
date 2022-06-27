import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],

  datasets: [
    {
      label: "status1",

      borderColor: "#ffaa24",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#ffaa24",
      pointBackgroundColor: "#ffaa24",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#ffaa24",
      pointHoverBorderColor: "#ffaa24",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [65, 59, 80, 81, 56, 55, 40, 60],
    },
    {
      label: "status2",

      borderColor: "#096969",
      borderWidth: 2,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      lineTension: false,
      pointBorderColor: "#096969",
      pointBackgroundColor: "#096969",
      pointBorderWidth: 5,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#096969",
      pointHoverBorderColor: "#096969",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 50,
      fill: false,
      gridLines: false,
      data: [60, 50, 70, 85, 50, 50, 45, 60],
    },
  ],
};
export default class StatusChart extends Component {
  render() {
    return (
      <div>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
  }
}
