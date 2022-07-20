import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { db } from '../../configs/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function DetailedRating(props) {
  const ratings = [];
  const types = {
    food: [
      { id: 'id1', val: 2 },
      { id: 'id2', val: 2 },
    ],
    ambience: [{ id: 'id4', val: 3 }],
  };
  Object.keys(types).map(function (key, index) {
    console.log(key);
    let tot = 0;
    types[key].map((i) => {
      console.log(i);
      console.log(i.val);
      tot += parseInt();
    });
    // ratings.push(tot);
  });
  // console.log(ratings);

  const [series, setSeries] = useState([
    {
      name: 'Rating',
      data: [4, 2, 3, 1, 5],
    },
  ]);

  const [options, setOptions] = useState({
    fill: {
      colors: ['#000'],
    },
    chart: {
      type: 'bar',
      // height: 350,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
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
      labels: {
        show: false,
      },
      categories: [
        'Overall',
        'Food',
        'Service',
        'Ambience',
        `Value \nfor money`,
      ],
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        align: 'left',
        style: {
          fontSize: '15px',
        },
      },
    },
    theme: {
      palette: 'palette9',
    },
  });

  return (
    <div style={{ marginLeft: '5vw', marginRight: '10vw' }}>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
      />
    </div>
  );
}
