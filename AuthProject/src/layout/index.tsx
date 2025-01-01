import React from "react";
import { ChildContent, LayoutContent, LogonSection } from "./ui";
import LogoSection from "./LogoSection";
import { Outlet } from "react-router-dom";
const AppLayout: React.FC = () => {
  return (
    <LayoutContent>
      <LogonSection>
        <LogoSection />
      </LogonSection>
      <ChildContent>
        <Outlet />
      </ChildContent>
    </LayoutContent>
  );
};
export default AppLayout;
