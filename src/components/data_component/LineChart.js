import React, {Component} from 'react';
import Chart from 'react-apexcharts'
// https://apexcharts.com/docs/react-charts/

class LineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-1'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                },
                fill: {
                    colors: ['#B32824']
                },
                stroke: {
                    curve: 'smooth',
                    width: 1
                },
                markers: {
                    size: 1,
                }
            },

            series: [{
                type: 'line',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            },
            //     {
            //     type: 'column',
            //     data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            // }
            ]
        }
    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series}  width='100%' height={320}  />
        )
    }
}

export default LineChart;