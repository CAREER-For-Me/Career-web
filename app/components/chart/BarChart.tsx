import { Bar } from "react-chartjs-2";

// 필요한 요소 불러오기
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Chart.js 설정
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

// 예시 데이터
const labels = ["학점"];
const dataValues = [32];

export const data = {
  labels: labels,
  datasets: [
    {
      data: dataValues,
      maxBarThickness: 10,
      backgroundColor: ["#6D72FF"],
      hoverBackgroundColor: ["#6D72FF"],
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    tooltip: {
      enabled: false,
    },
  },
  indexAxis: "y",
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
};

const BarChart = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
