import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactApexChart from 'react-apexcharts';
import { db } from '../../configs/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export default function DetailedRating(props) {
  // const ratings = [];
  // const types = {
  //   food: [
  //     { id: 'id1', val: 2 },
  //     { id: 'id2', val: 2 },
  //   ],
  //   ambience: [{ id: 'id4', val: 3 }],
  //   service: [{ id: 'id4', val: 3 }],
  //   valueForMoney: [{ id: 'id4', val: 3 }],
  //   overall: [{ id: 'id4', val: 3 }],
  // };

  // const [rates, setRates] = useState([
  //   'overall',
  //   'food',
  //   'service',
  //   'ambience',
  //   'valueForMoney',
  // ]);

  // const getRating = (type) => {
  //   var tot = 0;
  //   // console.log(props?.ratings?.types[type][0].val)
  //   props.ratings &&
  //     props?.ratings?.types[type].map((item, index) => {
  //       tot += item.val;
  //       // console.log(item.val);
  //     });
  //   // console.log(tot)
  //   return tot;
  // };

  // Object.keys(types).map(function (key, index) {
  //   console.log(key);
  // let tot = 0;
  // types[key].map((i) => {
  //   console.log(i);
  //   console.log(i.val);
  //   tot += parseInt(i.val);
  // });
  // ratings.push(tot);
  // });
  // console.log(ratings);

  const [series, setSeries] = useState([
    {
      name: 'Rating',
      data: ['overall', 'food', 'service', 'ambience', 'valueForMoney'],
    },
  ]);

  function setCloudRates() {
    for (let i = 0; i < 5; i++) {
      var t = 0;
      props?.ratings?.types[series[0].data[i]]?.map((item) => {
        t += item.val;
        // console.log(item.val);
      });
      series[0].data[i] = t;
      console.log(series[0].data);
    }
  }

  useEffect(() => {
    props?.ratings && setCloudRates();
  }, [props?.ratings]);

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
      background: '#f8f9fa',
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
    <div>
      {props?.ratings && (
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={200}
        />
      )}
    </div>
  );
}
