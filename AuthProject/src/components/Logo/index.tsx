import React from "react";
import { LogoSection } from "./ui";
import QuiltedImageList from "./Gallery";
const Logo: React.FC = () => {
  return (
    <>
      <LogoSection>
        <div>
          <img src="src/assets/logo.png" alt="logo here..." />
          <h3>KnobExpress</h3>
        </div>
        <QuiltedImageList />
      </LogoSection>
    </>
  );
};

export default Logo;
