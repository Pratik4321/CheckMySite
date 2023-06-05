import React,{useState} from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

function Graph({}) {
    Chart.register(CategoryScale);



  const [chartData, setChartData] = useState([-2,-1,1,0,2,3,4])
  const data = {
    labels: ['22/02/2023 12:00 PM', '22/02/2023 12:00 PM', '22/02/2023 12:00 PM', '22/02/2023 12:00 PM', '22/02/2023 12:00 PM'],
    datasets: [
      {
        label: 'www.example.com',
        data: chartData,
        fill: false,
        pointBackgroundColor: function (context) {
          var index = context.dataIndex;
          var value = context.dataset.data[index];
          return value >= context.dataset.data[index - 1] ? 'blue' : 'red';
        },
        borderColor: 'silver',
        tension: 0.3,

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: false,
        text: 'www.example.com',
      },
    },
  };
    return (

        <Line data={data} options={options} />


  );
}
export default Graph;