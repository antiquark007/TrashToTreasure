import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";
import Homepage from "./Homepage.jsx";

const Dashboard = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  const [data, setData] = useState(false);
  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("http://localhost:8009/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status === 401 || !data) {
      history("*");
    } else {
      setLoginData(data.ValidUserOne);
      setData(true);
    }
  };

  useEffect(() => {
    DashboardValid();
  }, []);

  return (
    <div>
      {data && <Homepage email={logindata.email} fname={logindata.fname} />}
    </div>
  );
};

export default Dashboard;