import React from 'react';
import ReactApexChart from 'apexcharts';

export default function DetailedRating() {
  const [series, setSeries] = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="bar" height={350} />
  );
}
