import { useEffect } from "react"
import { Chart } from "chart.js";

export default function ProfitsAndCostsChart() {
  useEffect(() => {
    var ctx = document.getElementById('myChart1').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [2018, 2019, 2020],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          label: "Profit",
          borderColor: "#736FC3",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          label: "Cost",
          borderColor: "#3cba9f",
          backgroundColor: "#71d1bd",
          fill: false,
        },
        ]
      },
    });
  }, [])
  return (
    <div className="w-full">
      {/* line chart */}
      <h1 className="text-sm font-semibold font-rubikRegular flex items-center mb-5 ml-2">Profits & costs</h1>
      <div className="w-full">
        <div className='pt-0 rounded-xl w-full h-fit my-auto'>
          <canvas id='myChart1'></canvas>
        </div>
      </div>
    </div>
  )
}


