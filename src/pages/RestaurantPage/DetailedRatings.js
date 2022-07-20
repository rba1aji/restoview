import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function DetailedRating() {
  const [series, setSeries] = useState([
    {
      name: 'Rating',
      data: [4, 2, 3, 1, 5],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      // height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ['Overall', 'Food', 'Service', 'Quality', `Value for money`],
    },
    fill: {
      colors: ['#']
    }
  });

  return (
    <div style={{marginLeft:'5vw',marginRight:'10vw'}}>
    <ReactApexChart options={options} series={series} type="bar" height={250} />
    </div>
  );
}
