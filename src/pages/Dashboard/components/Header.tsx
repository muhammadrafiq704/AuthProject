import React from "react";
import { HeaderContainer } from "./styled";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <p>{title}</p>
      {title !== "UserA" && (
        <div>
          <span>Open house visit</span>
          <strong> 6,867</strong>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
