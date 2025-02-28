import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export const columns: GridColDef[] = [
  { field: "id", headerName: "S.No", width: 100 },
  {
    field: "tenantName",
    headerName: "Tenant Name",
    width: 150,
  },
  { field: "landlordName", headerName: "Landlord Name", width: 150 },
  { field: "propertyTitle", headerName: "Property Title", width: 150 },
  { field: "officePrice", headerName: "Office Price", width: 150 },

  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params: GridRenderCellParams<{ status: string }>) => {
      const status = params.value as string;
      const statusColor = status === "Pending" ? "warning" : "error";
      return (
        <Chip
          label={status}
          color={statusColor}
          sx={{ fontSize: "12px", fontWeight: "500" }}
        />
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    sortable: false,
    renderCell: () => (
      <>
        <IconButton size="small" color="info">
          <VisibilityOutlinedIcon sx={{ fontSize: "24px" }} />
        </IconButton>
      </>
    ),
  },
];
