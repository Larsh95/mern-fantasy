import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  //   const navigate = useNavigate();

  //   const logout = async () => {
  //     try {
  //       const res = await fetch("/api/user/logout", {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         credentials: "include",
  //       });
  //       if (res.status === 401 || !res) {
  //         window.alert("you are stuck here");
  //       } else {
  //         navigate("/Creator");
  //         window.location.reload();
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     Logout();
  //   }, []);

  return <div></div>;
};

export default Logout;
