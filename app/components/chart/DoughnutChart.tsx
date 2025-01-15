import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

interface DoughnutChartProps {
  dataValues: number[];
}

const DoughnutChart = ({ dataValues }: DoughnutChartProps) => {
  const labels = ["역량 충족"];
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: ["#6D72FF", "#E5E5E5"],
        hoverBackgroundColor: ["#6D72FF", "#E5E5E5"],
        borderWidth: 0,
      },
    ],
  };

  // 옵션 설정
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: "85%", // 도넛 두께 조절
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
