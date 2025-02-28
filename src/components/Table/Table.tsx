// src/components/Table.tsx
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

// src/types.ts
import { GridColDef } from "@mui/x-data-grid";

export interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rows: any[];
  columns: GridColDef[];
}

const Table: React.FC<TableProps> = ({ rows, columns }) => {
  return (
    <Paper sx={{ height: 400, borderRadius: "10px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.name || row.id}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          border: 0,
          fontSize: "14px",
          "& .Mui-selected": {
            backgroundColor: "#e0f2f1 !important",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            fontSize: "14px",
          },
        }}
      />
    </Paper>
  );
};

export default Table;
