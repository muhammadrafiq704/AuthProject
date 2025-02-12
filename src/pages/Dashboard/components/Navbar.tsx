import React from "react";
import { NavbarContainer } from "./styled";
import { NotificationMenuData, ProfileMenuData } from "./Utils";
import DropdownMenu from "../../../components/DropdownMenu";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openProfile, setOpenProfile] = React.useState<null | HTMLElement>(
    null
  );

  const handleClickNotification = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickProfile = (event: React.MouseEvent<HTMLElement>) => {
    setOpenProfile(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setOpenProfile(null);
  };

  return (
    <React.Fragment>
      <NavbarContainer>
        <div>
          <img
            src="/assets/Dashboard/Navbar/Union.png"
            alt="icon"
            onClick={handleClickNotification}
          />
        </div>
        <img
          src="/assets/Dashboard/Navbar/profile.png"
          alt="icon"
          onClick={handleClickProfile}
        />
        <p>Cody Fisher</p>
      </NavbarContainer>
      <DropdownMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        handleClose={handleClose}
        data={NotificationMenuData}
        id="notification-menu"
      />
      <DropdownMenu
        anchorEl={openProfile}
        open={Boolean(openProfile)}
        handleClose={handleClose}
        data={ProfileMenuData}
        id="profile-menu"
      />
    </React.Fragment>
  );
};

export default Navbar;
