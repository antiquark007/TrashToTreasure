import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";
import Navbar from "./Header2/nav.jsx";
import Footer from "./Footer.jsx";
// import Navbar from "./Navbar.jsx";
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
    <>
    <Navbar />
    <Footer/>
    </>
  );
};

export default Dashboard;