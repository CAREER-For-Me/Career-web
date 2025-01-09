// Line 차트 가져오기
import { Doughnut } from "react-chartjs-2";

// 필요한 요소 불러오기
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Chart.js 설정
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// 예시 데이터
const labels = ["역량 충족", "나머지"];
const dataValues = [32, 68];

export const data = {
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
  cutout: "85%", // 도넛 두께 조절
};

const DoughnutChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
