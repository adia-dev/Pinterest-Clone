import React from "react";
import UnAuthFeed from "../components/UnAuthFeed";
import UnAuthHeader from "../components/UnAuthHeader";

function UnAuthHome() {
  return (
    <div>
      <UnAuthHeader />
      <UnAuthFeed />
    </div>
  );
}

export default UnAuthHome;
