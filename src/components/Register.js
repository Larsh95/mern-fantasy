import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //handle Inputes
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setuser({ ...user, [name]: value });
  };

  //handle Submitities
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = user;
    try {
      //Using Proxy instead of the deafult port 3000 to access the API hehe

      const res = await fetch("/logsys/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Email already in use!");
      } else {
        window.alert("Registered Successfully");
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-centering">
      <div className="box">
        <div className="form">
          <h2>Register</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="inputBx">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={user.name}
                onChange={handleInput}
              ></input>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="inputBx">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={user.email}
                onChange={handleInput}
              ></input>
              <i className="fa fa-lock" aria-hidden="true"></i>
            </div>
            <div className="inputBx">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleInput}
              ></input>
              <i className="fa fa-lock" aria-hidden="true"></i>
            </div>
            <div className="inputBx">
              <input type="submit" value="login"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
