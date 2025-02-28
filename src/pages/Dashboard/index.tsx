import React from "react";
import { DashboardContainer } from "./styled";
import Category from "./components/Category";
import Chart from "./components/Chart";
import Alerts from "./components/Alerts";

import DashboardTable from "./components/DashboardTable";

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Category />
      <Chart />
      <Alerts />
      <DashboardTable />
    </DashboardContainer>
  );
};

export default Dashboard;
