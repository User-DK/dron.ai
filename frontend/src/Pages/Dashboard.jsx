import React from "react";
import Deadline from "../components/Dashboard/Deadline";
import Revision from "../components/Dashboard/RevisionSession";
import { Flex } from "@mantine/core";

function Dashboard() {
  return (
    <div className="dashboard" style={{ display: Flex, flexDirection: "row" }}>
      <Deadline />
      <Revision />
    </div>
  );
}

export default Dashboard;
