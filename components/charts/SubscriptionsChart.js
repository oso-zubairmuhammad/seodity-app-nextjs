import { useEffect } from "react"
import { Chart } from "chart.js";

export default function subscriptionsChart() {
    useEffect(() => {
        var ctx = document.getElementById('myChart3').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [2018, 2019, 2020],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133],
                    label: "Trial",
                    borderColor: "#3e95cd",
                    backgroundColor: "#7bb6dd",
                    fill: false,
                }, {
                    data: [70, 90, 44, 60, 83, 90, 100],
                    label: "Bronze",
                    borderColor: "#3cba9f",
                    backgroundColor: "#71d1bd",
                    fill: false,
                }, {
                    data: [10, 21, 60, 44, 17, 21, 17],
                    label: "Silver",
                    borderColor: "#ffa500",
                    backgroundColor: "#ffc04d",
                    fill: false,
                }, {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Gold",
                    borderColor: "#c45850",
                    backgroundColor: "#d78f89",
                    fill: false,
                },
                {
                    data: [6, 3, 2, 2, 7, 0, 16],
                    label: "Group",
                    borderColor: "#c45850",
                    backgroundColor: "#d78f89",
                    fill: false,
                }
                ]
            },
        });
    }, [])

    return (
        <div>
            {/* line chart */}
            <h1 className="text-sm font-semibold font-rubikRegular mb-5 ml-2">Subscriptions</h1>
            <div className="w-full">
                <div className='pt-0 rounded-xl w-full h-fit my-auto'>
                    <canvas id='myChart3'></canvas>
                </div>
            </div>
        </div>
    )
} 