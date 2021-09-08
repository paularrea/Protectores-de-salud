import React from "react";
import styles from "./chart.module.scss";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";

const Chart = ({ name, values }) => {
  console.log(values);
  return (
    <div className={styles.chart}>
      <div className={styles.title}>
        <h2>{name}</h2>
        <p>
          en los últimos <b>10 días</b>
        </p>
      </div>

      {values && (
        <div style={{ width: "100%", height: '45vh' }}>
          <ResponsiveContainer>
            <AreaChart
              data={values}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis dataKey="day" />
              <YAxis />
              <Area dataKey="range" stroke="#2E83F8" fill="#F3F8FF" />
              <Tooltip />
              <ReferenceLine y={3} stroke="#FF2E79" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Chart;
