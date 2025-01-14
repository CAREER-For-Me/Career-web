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

interface BarChartProps {
  value: number | string; // 바 차트에 표시할 값
  max: number; // 최대 값 (차트의 기준 값)
  maxBarThickness: number; // 바 두께
  background: string; // 색깔
}

const BarChart = ({
  value,
  max,
  maxBarThickness,
  background,
}: BarChartProps) => {
  // 데이터 설정
  const data = {
    labels: ["학점"], // 라벨
    datasets: [
      {
        data: [value],
        maxBarThickness: maxBarThickness, // 바 두께
        backgroundColor: [background], // 바 색상
        // hoverBackgroundColor: ["#6D72FF"], // hover 시 바 색상
        borderRadius: 10, // 막대 모서리 둥글게 설정
        borderSkipped: false, // 모든 모서리를 둥글게
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 비율 유지 비활성화
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
        min: 0, // x축의 최소값을 0으로 설정
        max: max,
        ticks: {
          stepSize: 1, // x축의 간격을 1로 설정
        },
      },
      y: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
