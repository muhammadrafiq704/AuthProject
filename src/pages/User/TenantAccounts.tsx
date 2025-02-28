// src/pages/TenantAccounts.tsx
import React from "react";
import Table from "../../components/Table/Table";
import { tenantColumns } from "./data/TenantColumns";
import { tenantRows } from "./data/TenantRows";

const TenantAccounts: React.FC = () => {
  return (
    <div>
      <Table rows={tenantRows} columns={tenantColumns} />
    </div>
  );
};

export default TenantAccounts;
