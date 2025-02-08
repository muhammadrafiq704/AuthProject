import React from "react";
import { NavbarContainer } from "./styled";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div>
        <img src="/assets/Dashboard/Navbar/Union.png" alt="icon" />
      </div>
      <img src="/assets/Dashboard/Navbar/profile.png" alt="" />
      <p>Cody Fisher</p>
    </NavbarContainer>
  );
};

export default Navbar;
