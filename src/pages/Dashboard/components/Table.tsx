import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { TableContainer, TableHead } from "./styled";
import UIButton from "../../../components/Button/UIButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import rows from "../data/TableData";

const columns: GridColDef[] = [
  { field: "id", headerName: "S.No", width: 70 },
  { field: "tenantName", headerName: "Tenant Name", width: 150 },
  { field: "landlordName", headerName: "Landlord Name", width: 150 },
  { field: "propertyTitle", headerName: "Property Title", width: 180 },
  { field: "officePrice", headerName: "Office Price", width: 120 },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      const statusColor = params.value === "Pending" ? "warning" : "error";
      return (
        <Chip
          label={params.value}
          color={statusColor}
          sx={{ fontSize: "12px", fontWeight: "500" }}
        />
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    sortable: false,
    renderCell: () => (
      <IconButton size="large" color="info">
        <VisibilityIcon sx={{ fontSize: "24px" }} />
      </IconButton>
    ),
  },
];



const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <TableContainer>
      <TableHead>
        <p>Recent Offers</p>
        <UIButton
          fs={12}
          variant="outlined"
          styleType="inverted"
          label="View All"
        />
      </TableHead>
      <Paper sx={{ height: 400, width: "100%", borerRadius: "10px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 0,
            fontSize: "14px",
            "& .Mui-selected": {
              backgroundColor: "#e0f2f1 !important",
            },
            "& .Mui-checked": {
              fontSize: "18px",
              color: "#1976d2 !important",
            },
            "& .MuiCheckbox-root": {
              transform: "scale(1.5)", // Increase checkbox size
            },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: "bold",
              fontSize: "14px",
            },
            "& .MuiDataGrid-columnHeader": {
              padding: "0 10px",
            },
            "& .MuiDataGrid-menuIcon": {
              fontSize: "24px",
            },
            "& .MuiDataGrid-sortIcon": {
              fontSize: "18px",
            },
            "& .MuiTablePagination-root": {
              fontSize: "24px",
              color: "black",
            },
            "& .MuiTablePagination-actions svg": {
              fontSize: "24px",
              color: "#61A0FC",
            },
            "& .MuiTablePagination-caption": {
              fontSize: "18px",
            },
          }}
        />
      </Paper>
    </TableContainer>
  );
}
