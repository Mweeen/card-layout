import React, { useState, useEffect } from 'react';
import { Scatter } from 'react-chartjs-2';
import { generateData } from './ScatterChartData';
import { CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import Chart from 'chart.js/auto';
import TableComponent from './TableComponent';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const CardContainer = ({ tabValue }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [renderTime, setRenderTime] = useState(null);
  const [tableRenderTime, setTableRenderTime] = useState(null);

  useEffect(() => {
    const startTime = performance.now();
    const fetchData = () => {
      const data = generateData(20000);
      setData(data);
      const endTime = performance.now();
      setRenderTime((endTime - startTime).toFixed(2));
      setLoading(false);
    };
    fetchData();

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (Chart.getChart('myChart')) {
        Chart.getChart('myChart').destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (tabValue === 0) {
      const startTime = performance.now();
      const fetchData = () => {
        const data = generateData(50000, 10);
        setTableRenderTime((performance.now() - startTime).toFixed(2));
      };
      fetchData();
    }
  }, [tabValue]);

  return (
    <div className="card-container" style={{ marginTop: '20px', overflowY: 'auto' }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {tabValue === 0 ? (
            <>
              <div>
                <div>Render Time: {tableRenderTime} ms</div>
                <TableComponent />
              </div>
              <div>
                <div>Render Time: {renderTime} ms</div>
                <Scatter
                  data={{
                    datasets: [{
                      label: 'Scatter Chart',
                      data: data,
                      backgroundColor: 'rgba(75, 192, 192, 0.6)',
                      borderColor: 'rgba(75, 192, 192, 1)',
                      pointRadius: 1,
                      pointHoverRadius: 5,
                    }],
                  }}
                  options={{
                    scales: {
                      x: {
                        type: 'linear',
                        position: 'bottom',
                      },
                    },
                  }}
                  id="myChart"
                />
              </div>
            </>
          ) : (<></>)}
        </div>
      )}
    </div>
  );
};

export default CardContainer;
