import React from "react";
import { SidebarContent, SidebarHead, SidebarText } from "./styled";
import SidebarData from "./data/data";
import { Scrollbars } from "react-custom-scrollbars-2";

const Sidebar: React.FC = () => {
  return (
    <SidebarContent>
      <SidebarHead>
        <img src="/assets/SidebarIcons/sidebarlogo.png" alt="" />
        <span>KnobExpress</span>
      </SidebarHead>
      <Scrollbars style={{ height: 400 }} autoHide>
        {SidebarData.map((data) => (
          // add react scroll 2 later
          <SidebarText>
            <div>
              <img src={data.icon} alt="icon" />
              <p>{data.title}</p>
            </div>
            {data.chevDown === "/assets/SidebarIcons/Down.png" ? (
              <img src={data.chevDown} alt="down" />
            ) : null}
          </SidebarText>
        ))}
      </Scrollbars>
    </SidebarContent>
  );
};

export default Sidebar;
