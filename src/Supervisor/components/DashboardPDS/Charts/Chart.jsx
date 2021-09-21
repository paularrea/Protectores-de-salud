import React from "react";
import styles from "./chart.module.scss";
import {
  AreaChart,
  ResponsiveContainer,
  Area,
  XAxis,
  CartesianGrid,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";

const Chart = ({ title, values, line, XLabel, YLabel }) => {
  console.log(XLabel, YLabel, "labels");
  return (
    <div className={styles.chart}>
      <div className={styles.title}>
        <h2>{title}</h2>
      </div>

      {values && (
        <div style={{ width: "100%", height: "600px" }}>
          <ResponsiveContainer>
            <AreaChart
              data={values}
              margin={{
                top: 10,
                right: 50,
                bottom: 80,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                label={{ value: XLabel, position: "insideBottomRight", dy: 65 }}
                dataKey="day"
                angle={-30}
                dx={-40}
                dy={25}
              />
              <YAxis
                label={{
                  value: YLabel,
                  angle: -90,
                  position: "center",
                  dx: -20,
                }}
              />
              <Area dataKey="range" stroke="#2E83F8" fill="#F3F8FF" />
              <Tooltip />
              {/* <Legend /> */}
              <ReferenceLine y={line} stroke="#FF2E79" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Chart;
