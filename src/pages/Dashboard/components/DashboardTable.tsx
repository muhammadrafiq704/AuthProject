import React from "react";

import Table from "../../../components/Table/Table";
import { rows } from "../data/TableData";
import { columns } from "../data/columns";
import { AlertHeader } from "./styled";
import UIButton from "../../../components/Button/UIButton";

const DashboardTable: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <AlertHeader>
        <p>Recent Offers</p>
        <UIButton
          fs={12}
          variant="outlined"
          styletype="inverted"
          label="View All"
        />
      </AlertHeader>
      <Table rows={rows} columns={columns} />
    </div>
  );
};

export default DashboardTable;
