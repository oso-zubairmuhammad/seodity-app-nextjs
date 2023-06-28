import React from 'react'
import { Chart } from "chart.js";
import { useEffect } from "react"

export default function UserDetailsChart() {

    useEffect(() => {
        var ctx = document.getElementById('myChart4').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Keyword", "Keyword Research", "Competitaors", "Monitors", "Backlinks", "On-site"],
                datasets: [{
                    data: [100, 100, 65, 0, 90, 10],
                    label: "Applied",
                    borderColor: "rgb(109, 253, 181)",
                    backgroundColor: "rgb(109, 253, 181,0.5)",
                    borderWidth: 2
                },
                ]
            },
        });
    }, [])

    return (
        <div >
            {/* Bar chart */}

            <canvas className='px-10 py-5' width={80} height={20} id='myChart4'></canvas>

        </div>
    )
}



