import React from 'react'
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart() {
    const data ={
        labels: ['govarthini', 'Vishvaja' , 'Kayalvizhi','katherine'],
        datasets: [
            {
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
            }

    ]
    }
    return (
        <Doughnut data = { data }/>
            
    )
}

export default DoughnutChart