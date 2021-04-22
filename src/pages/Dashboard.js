import React from "react";

const Dashboard = ({ user, Logout }) => {
  return (
    <div>
      Dashboard
      <h2>
        Welcome, <span>{user.username}</span>
      </h2>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
