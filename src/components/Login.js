import { React, useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;
    try {
      //Using Proxy instead of the deafult port 3000 to access the API hehe

      const res = await fetch("/logsys/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Wrong email or password");
      } else {
        window.alert("Logged In Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-centering">
      <div className="box">
        <div className="form">
          <h2>login</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div className="inputBx">
              <input
                type="text"
                placeholder="E-mail"
                name="email"
                value={user.email}
                onChange={handleChange}
              ></input>
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="inputBx">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              ></input>
              <i className="fa fa-lock" aria-hidden="true"></i>
            </div>
            <div className="inputBx">
              <input type="submit" value="login"></input>
            </div>
          </form>
          <p>
            Need an <NavLink to="/Register"> Account?</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
