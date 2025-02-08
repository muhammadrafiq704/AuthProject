import React from "react";
import { HeaderContainer } from "./styled";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <p>Dashboard</p>
      <div>
        <span>Open house visit</span>
        <strong> 6,867</strong>
      </div>
    </HeaderContainer>
  );
};

export default Header;
