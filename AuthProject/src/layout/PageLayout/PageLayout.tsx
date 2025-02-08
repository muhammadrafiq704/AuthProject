import React from "react";
import { LayoutContainer, PageContainer, SideBarContainer } from "./styled";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const PageLayout: React.FC = () => {
  return (
    <PageContainer>
      <SideBarContainer>
       <Sidebar/>
      </SideBarContainer>
      <LayoutContainer>
        <Outlet/>
      </LayoutContainer>
    </PageContainer>
  );
};

export default PageLayout;
