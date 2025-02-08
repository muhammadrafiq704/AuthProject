import React from "react";
import { CategoryContainer } from "./styled";
import CategoryData from "../data/CategoryData";

const Category: React.FC = () => {
  return (
    <CategoryContainer>
      {CategoryData.map((category) => (
        <div
          style={{
            backgroundColor:
              category.title === "Total Landloard"
                ? "#EDFFEF"
                : category.title === "Total Tenant"
                ? "#ECFBFF"
                : category.title === "Total Properties"
                ? "#F4F2FF"
                : category.title === "Offer Made"
                ? "#FFF2EC"
                : category.title === "Total Maintenance Req."
                ? "#FFF5E5"
                : category.title === "Completed Deals"
                ? "#ECF4FF"
                : "",
            color:
              category.title === "Total Landloard"
                ? "#55A55E"
                : category.title === "Total Tenant"
                ? "#3A7F92"
                : category.title === "Total Properties"
                ? "#5E5498"
                : category.title === "Offer Made"
                ? "#9B715D"
                : category.title === "Total Maintenance Req."
                ? "#845C1B"
                : category.title === "Completed Deals"
                ? "#2C5FA6"
                : "",
          }}
        >
          <img src={category.icon} alt="icon" />
          <p>{category.title}</p>
          <span>{category.count}</span>
        </div>
      ))}
    </CategoryContainer>
  );
};

export default Category;
