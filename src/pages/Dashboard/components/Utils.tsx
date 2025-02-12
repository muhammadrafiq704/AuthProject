import { Avatar } from "@mui/material";
import { PersonAdd, Settings } from "@mui/icons-material";

const NotificationMenuData = [
  { icon: <Avatar />, name: "Notification 1" },
  { icon: <Avatar />, name: "Notification 2" },
  { icon: <Avatar />, name: "Notification 3" },
];
const ProfileMenuData = [
  { icon: <Avatar />, name: "Profile" },
  { icon: <Avatar />, name: "My account" },
  { icon: <PersonAdd fontSize="large" />, name: "Add another account" },
  { icon: <Settings fontSize="large" />, name: "Settings" },
];

export { NotificationMenuData, ProfileMenuData };
