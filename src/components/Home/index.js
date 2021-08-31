import React from "react";
import { useState } from "react";
import Dashboard from "../Dashboard";
import Users from "../Users";
import { SidemenueStyled } from "./styles";

const Home = () => {
  const [current, setCurrent] = useState("dashboard");
  return (
    <>
      <SidemenueStyled>
        <nav class="navbar navbar-light bg-light ms-5">
          <div class="container ms-5">
            <span class="navbar-brand mb-0 h1 ms-5"> {current}</span>
          </div>
        </nav>
        <div class="sidenav">
          <a onClick={() => setCurrent("dashboard")}>Dashboard</a>
          <a onClick={() => setCurrent("users")}>Users</a>
        </div>
        <div class="main">
          {current === "dashboard" ? <Dashboard /> : <Users />}
        </div>
      </SidemenueStyled>
    </>
  );
};

export default Home;
