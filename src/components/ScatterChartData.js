import { useState, useEffect } from 'react';

export const generateData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }
  return data;
};

const ScatterChartData = ({ count }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = generateData(count);
    setData(data);
  }, [count]);

  return data;
};

export default ScatterChartData;
