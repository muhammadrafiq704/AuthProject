import React from "react";
import { DashboardContainer } from "./styled";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";
import Table from "./components/Table";
import Chart from "./components/Chart";
import Alerts from "./components/Alerts";

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Header />
      <Category />
      <Chart/>
      <Alerts/>
      <Table/>
    </DashboardContainer>
  );
};

export default Dashboard;
