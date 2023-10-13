import React, { useState } from "react";
// import PersonalDetails from './PersonalDetails';
// import UpdateDetails from './UpdateDetails';
// import UpdatePassword from './UpdatePassword';
import PersonalDetails from "./personalDetails";
import UpdateDetails from "./updateDetails";
import UpdatePassword from "./updatePassword";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("personalDetails");

  const renderTabContent = () => {
    switch (activeTab) {
      case "personalDetails":
        return <PersonalDetails />;
      case "UpdateDetails":
        return <UpdateDetails />;
      case "updatePassword":
        return <UpdatePassword />;
      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        <li
          className="nav-item"
          onClick={() => setActiveTab("personalDetails")}
        >
          <span
            className={`nav-link ${
              activeTab === "personalDetails" && "active"
            }`}
          >
            Personal Details
          </span>
        </li>
        <li className="nav-item" onClick={() => setActiveTab("UpdateDetails")}>
          <span
            className={`nav-link ${activeTab === "UpdateDetails" && "active"}`}
          >
            Change Details
          </span>
        </li>
        <li className="nav-item" onClick={() => setActiveTab("updatePassword")}>
          <span
            className={`nav-link ${activeTab === "updatePassword" && "active"}`}
          >
            Update Password
          </span>
        </li>
      </ul>

      <div className="tab-content mt-2">{renderTabContent()}</div>
    </div>
  );
};

export default Dashboard;
