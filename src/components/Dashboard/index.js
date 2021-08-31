import React from "react";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const { admin } = useSelector((state) => state.adminReducer);
  return (
    <div>
      <h1>Welcome {admin.username}</h1>
    </div>
  );
};

export default Dashboard;
