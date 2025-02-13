import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
// import { Button } from "../../../components/Button/styled";
import UIButton from "../../../components/Button/UIButton";
import { Box, Typography, useTheme } from "@mui/material";

const BasicLineChart: React.FC = () => {
  const theme = useTheme();
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
        <Typography
          variant="h6"
          sx={{
            fontSize: "14px",
            [theme.breakpoints.between("mobile", "tablet")]: {
              fontSize: "14px",
              fontWeight:'700'
            },
            [theme.breakpoints.between("tablet", "laptop")]: {
              fontSize: "16px",
               fontWeight:'700'
            },
            [theme.breakpoints.between("laptop", "desktop")]: {
              fontSize: "18px",
              fontWeight:'700'
            },
            [theme.breakpoints.up("desktop")]: { fontSize: "24px",  fontWeight:'700' },
          }}
        >
          Traffic
        </Typography>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                backgroundColor: "#61A0FD",
                display: { mobile: "none", tablet: "block" },
                fontSize: { laptop: "18px", desktop: "20px" },
              }}
            />
            <Typography
              sx={{
                display: { mobile: "none", tablet: "block" },
              }}
            >
              Offers
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent:'center', gap: "8px" }}>
            <Box
              sx={{
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                backgroundColor: "red",
                display: { mobile: "none", tablet: "block" },
                fontSize: { laptop: "18px", desktop: "20px" },
              }}
            />
            <Typography
              sx={{
                display: { mobile: "none", tablet: "block" },
              }}
            >
              Offers
            </Typography>
          </Box>
          <UIButton
            fs={12}
            variant="outlined"
            styleType="inverted"
            label="Week"
            sx={{
              display: { mobile: "none", tablet: "block" },
            }}
          />
          <UIButton
            fs={12}
            variant="outlined"
            styleType="inverted"
            label="Month"
            sx={{
              display: { mobile: "none", tablet: "block" },
            }}
          />
          <UIButton
            fs={12}
            variant="contained"
            styleType="default"
            label="Year"
            sx={{
              display: { mobile: "none", tablet: "block" },
            }}
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
