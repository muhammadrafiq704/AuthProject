import React from "react";
import { Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { Logout } from "@mui/icons-material";

interface MenuItemProps {
  icon: React.ReactNode;
  name: string;
  onClick?: () => void;
}

interface DropdownMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  data: MenuItemProps[];
  id?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  data,
  id,
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      id={id}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {data.map((item, index) => (
        <MenuItem
          key={index}
          onClick={item.onClick || handleClose}
          sx={{ fontSize: "14px", fontWeight: "600" }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          {item.name}
        </MenuItem>
      ))}
      <Divider />
      <MenuItem
        onClick={handleClose}
        sx={{ fontSize: "14px", fontWeight: "600" }}
      >
        <ListItemIcon>
          <Logout fontSize="large" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default DropdownMenu;
