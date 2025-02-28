import React from "react";
import UIButton from "../../../components/Button/UIButton";
import {
  AlertCard,
  AlertCardContainer,
  AlertContainer,
  AlertHeader,
} from "./styled";
import AlertsData from "../data/AlertsData";

const Alerts: React.FC = () => {
  return (
    <AlertContainer>
      {/* head of the alerts  */}
      <AlertHeader>
        <p>Alerts</p>
        <UIButton
          fs={12}
          variant="outlined"
          styletype="inverted"
          label="View All"
        />
      </AlertHeader>
      <AlertCardContainer>
        {AlertsData.map((data) => (
          <AlertCard key={data.id}>
            <img src={data.icon} alt="icon" />
            <div>
              <p>{data.title}</p>
              <span>{data.desc}</span>
            </div>
          </AlertCard>
        ))}
      </AlertCardContainer>
    </AlertContainer>
  );
};

export default Alerts;
