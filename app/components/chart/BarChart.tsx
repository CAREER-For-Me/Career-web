import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// 필요한 요소 불러오기
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
} from "chart.js";

// Chart.js 설정
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

interface BarChartProps {
  value: number | string; // 바 차트에 표시할 값
  max: number | string; // 최대 값 (차트의 기준 값)
  maxBarThickness: number; // 바 두께
  background: string; // 색깔
  indexAxis: string; // 축

  showLabels: boolean; // 데이터 레이블 표시 여부
  labelsColor?: string; // 레이블 색상
  lablesSize?: number; // 레이블 크기
  layoutPadding?: number; // 패딩 값
}

const BarChart = ({
  value,
  max,
  maxBarThickness,
  background,
  indexAxis,
  showLabels,
  labelsColor,
  lablesSize,
  layoutPadding,
}: BarChartProps) => {
  // 데이터 설정
  const data = {
    labels: ["data"], // 라벨
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
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false, // 비율 유지 비활성화
    layout: {
      padding: layoutPadding || 0,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: showLabels, // 데이터 레이블 활성화
        color: labelsColor, // 텍스트 색상
        clip: false, // 잘리지 않도록 설정
        align: "end", // 텍스트 정렬
        anchor: "end", // 텍스트 위치
        formatter: (value: number | string) => value, // 레이블 포맷
        font: {
          weight: "bold", // 텍스트 굵기
          size: lablesSize || 12, // 텍스트 크기
        },
      },
    },
    indexAxis: indexAxis as "x" | "y", // 명시적으로 타입 선언
    scales: {
      x: {
        display: false,
        min: 0, // x축의 최소값을 0으로 설정
        max: typeof max === "number" ? max : parseFloat(max),
        ticks: {
          stepSize: 1, // x축의 간격을 1로 설정
        },
      },
      y: {
        display: false,
        min: 0, // y축의 최소값을 0으로 설정
        max: typeof max === "number" ? max : parseFloat(max),
        ticks: {
          stepSize: 1, // y축의 간격을 1로 설정
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
