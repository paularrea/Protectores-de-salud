import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Dashboard from "./Dashboard";

const Login = () => {
  const adminUser = {
    username: "Pau",
    password: "1234",
  };
  const [user, setUser] = useState({ username: "", password: "" });
  const [dbUser, setDbUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDbUser({
          username: data[0].username,
          password: data[0].password,
        });
      });
  }, []);

  const Login = (details) => {
    console.log(details);
    if (
      details.username === dbUser.username &&
      details.password === dbUser.password
    ) {
      console.log("logged in!");
      setUser({
        username: details.username,
        password: details.password,
      });
    } else {
      console.log("not logged in!");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      {user.username !== "" ? (
        <div className="welcome">
          <Dashboard Logout={Logout} user={user} />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
};

export default Login;
