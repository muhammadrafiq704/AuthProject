import React, { useState } from "react";
import { HeaderContainer, HeaderRightContent } from "./styled";
import UIButton from "../../../components/Button/UIButton";
import SearchTextField from "../../../components/SearchTextField/SearchTextField";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [search, setSearch] = useState("");

  return (
    <HeaderContainer>
      <p>{title}</p>
      {title === "TenantAccounts" || title === "LandlordAccounts" ? (
        <HeaderRightContent>
          <SearchTextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            width= "30ch"
            height="8ch"
          />
          <UIButton
            fs={14}
            variant="contained"
            styletype="default"
            label="Add"
          />
        </HeaderRightContent>
      ) : (
        <div>
          <span>Open house visit</span>
          <strong> 6,867</strong>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Header;
