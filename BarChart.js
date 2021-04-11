import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    return <div>
        <Bar
        data = {{
            labels : ['Govarthini', 'Kayalvizhi','Vishvaja','Katherine'],
            datasets: [{
                label: 'no of preferences',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 5
            }]
        }}
        height = {400}
        width={400}
        options = {{
            maintainAspectRatio: false,
            sclaes:{
                xAxes: [
                    {
                        scaleLabel:{
                            display:true,
                            labelString:'Name of intern'
                    },
                    
                }
            ],
                yAxes: [
                    {
                        scaleLabel:{
                            display:true,
                            labelString:'outcome of intern'
                        },
                        ticks : {
                            min :0,
                            max :6,
                            stepSize:1
                        }
                    }
                ]
            }
        }}
        />
        </div>    
}

export default BarChart;