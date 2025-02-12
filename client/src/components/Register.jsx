import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, csetPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    //console.log(e.target.value);
    const { name, value } = e.target;

    setInpval({ ...inpval, [name]: value });
  };
  const addUserdata = async(e) => {
    e.preventDefault(); //page not load defult bv stop

    const { fname, email, password, cpassword } = inpval;
    if (fname === "") {
      alert("Please enter your name");
    } else if (email === "") {
      alert("Please enter your email");
    } else if (!email.includes("@")) {
      alert("Please enter valid email");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 6) {
      alert("Password must be strong");
    } else if (cpassword === "") {
      alert("Please enter your confirm password");
    } else if (password !== cpassword) {
      alert("Password and confirm password should be same");
    } else {
      //here we will send data to server in the backend api register
      // console.log("Registration Successfull");
      //in package.jason we put proxy=http://localhost:8009 thus direct call from the /register

      const data = await fetch("http://localhost:8009/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,email,password,cpassword
          })
      });
      const res = await data.json();
      if(res.status===201){
        alert("Registration Successfull");
        setInpval({...inpval,fname:"",email:"",password:"",cpassword:""})
      }
      //console.log(res);
    }
  };
  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up </h1>
            <p>We are glad that you are here</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                onChange={setVal}
                value={inpval.fname}
                id="fname"
                name="fname"
                placeholder="Enter your name"
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                value={inpval.email}
                id="email"
                name="email"
                placeholder="Enter your email Address"
              />
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  value={inpval.password}
                  onChange={setVal}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
              <label htmlFor="cpassword">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  value={inpval.cpassword}
                  onChange={setVal}
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm your password"
                />
                <div
                  className="showpass"
                  onClick={() => csetPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={addUserdata}>
              Sign Up
            </button>
            <p>
              Already have an account? <NavLink to="/">Login</NavLink>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
