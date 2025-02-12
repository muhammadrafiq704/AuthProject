import React from "react";
import { ChildContent, LayoutContent, LogonSection } from "./styled";
import Logo from "./LogoSection";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  return (
    <LayoutContent>
      <LogonSection>
        <Logo />
      </LogonSection>
      <ChildContent>
        <Outlet />
      </ChildContent>
    </LayoutContent>
  );
};
export default AppLayout;
