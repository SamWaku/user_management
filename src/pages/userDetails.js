import React, { useState } from "react";
// import PersonalDetails from './PersonalDetails';
// import UpdateDetails from './UpdateDetails';
// import UpdatePassword from './UpdatePassword';

import { Link } from "react-router-dom";
import PersonalDetails from "../components/user/personalDetails";

const UserDetails = () => {
  const [activeTab, setActiveTab] = useState("personalDetails");

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        <Link className="nav-item" to={"/user/personalDetails"}>
          <span
            className={`nav-link ${
              activeTab === "personalDetails" && "active"
            }`}
          >
            Personal Details
          </span>
        </Link>
        <Link
          to={"/user/updateDetails"}
          className="nav-item"
          onClick={() => setActiveTab("UpdateDetails")}
        >
          <span
            className={`nav-link ${activeTab === "UpdateDetails" && "active"}`}
          >
            Change Details
          </span>
        </Link>
        <Link
          className="nav-item"
          to={"/user/updatePassword"}
          onClick={() => setActiveTab("updatePassword")}
        >
          <span
            className={`nav-link ${activeTab === "updatePassword" && "active"}`}
          >
            Update Password
          </span>
        </Link>
      </ul>

      <div className="tab-content mt-2">
        <PersonalDetails />
      </div>
    </div>
  );
};

export default UserDetails;
