import React, { useState } from "react";
import {NavLink, useNavigate} from 'react-router-dom';
import Header from "../Header1/Header";

const Login = () => {
    const [passShow,setPassShow]=useState(false);

    const [inpval, setInpval] = useState({
        email: '',
        password: '',
    });
    const history =useNavigate();
    const setVal = (e) => {
      //console.log(e.target.value);
      const { name, value } = e.target;
  
      setInpval ({ ...inpval, [name]: value});
      //nsole.log(inpval);
    };
    const loginUser=async (e)=>{
      e.preventDefault();
      const {email,password}=inpval;
      if (email === "") {
        alert("Please enter your email");
      }else if(!email.includes("@")){
        alert("Please enter valid email")
      }else if (password === "") {
        alert("Please enter your password");
      } else if (password.length < 6) {
        alert("Password must be strong");
      }else {
        //console.log("Login Successfull");
        const data = await fetch("http://localhost:8009/login",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,password
            })
        });
        const res = await data.json();
        if(res.status===201){
          localStorage.setItem("usersdatatoken",res.result.token)
          history("/dash")
          setInpval({...inpval,email:"",password:""});
        }
        //console.log(res);
      }
    }
  return (
    <>
    <Header/>
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Login </h1>
            <p>Hi, we are glad to see you again</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={inpval.email}
                onChange={setVal}
                id="email"
                name="email"
                placeholder="Enter your email Address"
              />
            </div>
            <div className="form_input">
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
                <div className="showpass" onClick={()=>setPassShow(!passShow)}>
                    {!passShow?"Show":"Hide"}
                </div>
              </div>
            </div>
            <button className="btn" onClick={loginUser}>Login</button>
            <p>Don't have an account? <NavLink to='./Register'>Sign up</NavLink></p>
          </form>
        </div>
      </section>
    </div>
    </>
  );
};

export default Login;
