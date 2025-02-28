import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";

export const tenantColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    width: 280,
    renderCell: (params) => (
      <>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src="/assets/TableImages/avatar1.png"
            alt="avatar"
            style={{ width: "32px", height: "32px", borderRadius: "50%" }}
          />
          <span>{params.value}</span>
        </div>
      </>
    ),
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "budget", headerName: "Budget", width: 200 },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params: GridRenderCellParams<{ status: string }>) => {
      const status = params.value as string;
      const statusColor = status === "Active" ? "success" : "warning";
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
    width: 130,
    sortable: false,
    renderCell: () => (
      <>
        <IconButton size="small" color="info">
          <VisibilityOutlinedIcon sx={{ fontSize: "24px" }} />
        </IconButton>
        <IconButton size="small" color="info">
          <EditCalendarOutlinedIcon sx={{ fontSize: "24px" }} />
        </IconButton>
        <IconButton size="small" color="info">
          <DeleteOutlineOutlinedIcon sx={{ fontSize: "24px" }} />
        </IconButton>
      </>
    ),
  },
];
