import { useParams } from "react-router-dom"
import { useAxios } from "../hooks/useAxios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from "moment/moment";
import { Skeleton } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const HistoryChart = () => {

  const { id } = useParams();
  const title = id.toUpperCase();
  const { response, loading, hasError } = useAxios(`/coins/${id}/market_chart?vs_currency=usd&days=7`)

  if (!response) {
    return null
  };

  const coinChartData = response.prices.map(value => ({
    x: value[0],
    y: value[1].toFixed(2)
  }))

  const options = {
    responsive: true
  }

  const data = {
    labels: coinChartData.map(value => moment(value.x).format('MMM DD')),
    datasets: [
      {
        fill: true,
        label: title,
        data: coinChartData.map(value => value.y),
        borderColor: '#22223b',
        backgroundColor: '#e7ecef',
      }
    ]
  }

  return (
    <>
      <Line options={options} data={data} />
    </>
  )
}
