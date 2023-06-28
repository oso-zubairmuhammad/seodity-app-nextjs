import React from 'react'
import { Chart } from "chart.js";
import { useEffect } from "react"

export default function ResourcesChart() {

    useEffect(() => {
        var ctx = document.getElementById('myChart2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                datasets: [{
                    data: [66, 144, 146, 116, 107, 131, 43],
                    label: "Applied",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181,0.5)",
                    borderWidth: 2
                }, {
                    data: [40, 100, 44, 70, 63, 30, 10],
                    label: "Accepted",
                    borderColor: "rgb(75, 192, 192)",
                    backgroundColor: "rgb(75, 192, 192,0.5)",
                    borderWidth: 2
                }, {
                    data: [20, 24, 50, 34, 33, 23, 12],
                    label: "Pending",
                    borderColor: "rgb(255, 205, 86)",
                    backgroundColor: "rgb(255, 205, 86,0.5)",
                    borderWidth: 2
                }, {
                    data: [6, 20, 52, 12, 11, 78, 21],
                    label: "Rejected",
                    borderColor: "rgb(255, 99, 132)",
                    backgroundColor: "rgb(255, 99, 132,0.5)",
                    borderWidth: 2
                }
                ]
            },
        });
    }, [])

    return (
        <div className="w-full">
            {/* Bar chart */}
            <h1 className="text-sm font-semibold font-rubikRegular mb-5 ml-2">Resources</h1>
            <div className="w-full">
                <div className='pt-0 rounded-xl w-full h-fit my-auto'>
                    <canvas id='myChart2'></canvas>
                </div>
            </div>
        </div>
    )
}



