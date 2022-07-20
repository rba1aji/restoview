import React,{useState} from 'react';
import ReactApexChart from 'apexcharts';

export default function DetailedRating() {
  const [series, setSeries] = useState([
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ]);

  const [options, setOptions] = useState({
    // options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'South Korea',
        'Canada',
        'United Kingdom',
        'Netherlands',
        'Italy',
        'France',
        'Japan',
        'United States',
        'China',
        'Germany',
      ],
    },
    // }
  });

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
}
