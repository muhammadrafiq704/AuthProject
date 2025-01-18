import React from "react";
import { LogoSection } from "./styled";
import QuiltedImageList from "./Gallery";
import LogoImage from "/assets/images/logo.png"

const Logo: React.FC = () => {
  return (
    <>
      <LogoSection>
        <div>
          <img src={LogoImage} alt="logo here..." />
          <h3>KnobExpress</h3>
        </div>
        <QuiltedImageList />
      </LogoSection>
    </>
  );
};

export default Logo;
