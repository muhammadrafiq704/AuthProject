import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
// import { Button } from "../../../components/Button/styled";
import UIButton from "../../../components/Button/UIButton";

const BasicLineChart: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "4px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0px 20px 0px 20px",
        }}
      >
        <h3 style={{ fontSize: "16px" }}>Traffic</h3>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems:'center', gap:'8px'}}>
            <div
              style={{
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                backgroundColor: "red",
              }}
            ></div>
            <p>Offers</p>
          </div>
          <div style={{ display: "flex", alignItems:'center', gap:'8px'}}>
            <div
              style={{
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                backgroundColor: "lightBlue",
              }}
            ></div>
            <p>Offers</p>
          </div>
          <UIButton
            fs={12}
            variant="outlined"
            styleType="inverted"
            label="Week"
          />
          <UIButton
            fs={12}
            variant="outlined"
            styleType="inverted"
            label="Month"
          />
          <UIButton
            fs={12}
            variant="contained"
            styleType="default"
            label="Year"
          />
        </div>
      </div>
      <LineChart
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          width: "100%",
        }}
        xAxis={[
          {
            scaleType: "band",
            data: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "top",
          },
        ]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5.5, 2.3, 10],
          },
          {
            // Second line series
            data: [1.1, 4, 6.1, 3.9, 7, 2.9, 4.5, 10],
            color: "red",
          },
        ]}
        height={250}
      />
    </div>
  );
};

export default BasicLineChart;
