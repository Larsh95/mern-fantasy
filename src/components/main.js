import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Creator from "./Creator";
import Logout from "./Logout";
import CharacterMain from "./character/CharacterMain";

const Main = () => {
  //Here i can write javascript code and functions

  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Creator" element={<Creator />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/CharacterMain" element={<CharacterMain />} />
    </Routes>

    // <div className="main-container">
    //   <div className="main-header">
    //     <a className="menu-link-main" href="#">
    //       All Apps
    //     </a>
    //     <div className="header-menu">
    //       <a className="main-header-link is-active" href="#">
    //         Desktop
    //       </a>
    //       <a className="main-header-link" href="#">
    //         Mobile
    //       </a>
    //       <a className="main-header-link" href="#">
    //         Web
    //       </a>
    //     </div>
    //   </div>
    //   <div className="content-wrapper">
    //     <div className="content-wrapper-header">
    //       <div className="content-wrapper-context">
    //         <h3 className="img-content">
    //           <svg viewBox="0 0 512 512">
    //             <path
    //               d="M467 0H45C20.099 0 0 20.099 0 45v422c0 24.901 20.099 45 45 45h422c24.901 0 45-20.099 45-45V45c0-24.901-20.099-45-45-45z"
    //               fill="#d6355b"
    //               data-original="#ff468c"
    //             />
    //             <path
    //               xmlns="http://www.w3.org/2000/svg"
    //               d="M512 45v422c0 24.901-20.099 45-45 45H256V0h211c24.901 0 45 20.099 45 45z"
    //               fill="#d6355b"
    //               data-original="#d72878"
    //             />
    //             <path
    //               xmlns="http://www.w3.org/2000/svg"
    //               d="M467 30H45c-8.401 0-15 6.599-15 15v422c0 8.401 6.599 15 15 15h422c8.401 0 15-6.599 15-15V45c0-8.401-6.599-15-15-15z"
    //               fill="#2e000a"
    //               data-original="#700029"
    //             />
    //             <path
    //               xmlns="http://www.w3.org/2000/svg"
    //               d="M482 45v422c0 8.401-6.599 15-15 15H256V30h211c8.401 0 15 6.599 15 15z"
    //               fill="#2e000a"
    //               data-original="#4d0e06"
    //             />
    //             <path
    //               xmlns="http://www.w3.org/2000/svg"
    //               d="M181 391c-41.353 0-75-33.647-75-75 0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45c41.353 0 75 33.647 75 75s-33.647 75-75 75z"
    //               fill="#d6355b"
    //               data-original="#ff468c"
    //             />
    //             <path
    //               xmlns="http://www.w3.org/2000/svg"
    //               d="M391 361h-30c-8.276 0-15-6.724-15-15V211h45c8.291 0 15-6.709 15-15s-6.709-15-15-15h-45v-45c0-8.291-6.709-15-15-15s-15 6.709-15 15v45h-15c-8.291 0-15 6.709-15 15s6.709 15 15 15h15v135c0 24.814 20.186 45 45 45h30c8.291 0 15-6.709 15-15s-6.709-15-15-15z"
    //               fill="#d6355b"
    //               data-original="#d72878"
    //             />
    //           </svg>
    //           Adobe Stock
    //         </h3>
    //         <div className="content-text">
    //           Grab yourself 10 free images from Adobe Stock in a 30-day free
    //           trial plan and find perfect image, that will help you with your
    //           new project.
    //         </div>
    //         <button className="content-button">Start free trial</button>
    //       </div>
    //       <img
    //         className="content-wrapper-img"
    //         src="https://assets.codepen.io/3364143/glass.png"
    //         alt=""
    //       ></img>
    //     </div>
    //     <div className="content-section">
    //       <div className="content-section-title">Installed</div>
    //       <ul>
    //         <li className="adobe-product">
    //           <div className="products">Photoshop</div>
    //           <span className="status">
    //             <span className="status-circle green"></span>
    //             Updated
    //           </span>
    //           <div className="button-wrapper">
    //             <button className="content-button status-button open">
    //               Open
    //             </button>
    //             <div className="menu">
    //               <button className="dropdown">
    //                 <ul>
    //                   <li>
    //                     <a href="#">Go to Discover</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Learn more</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Uninstall</a>
    //                   </li>
    //                 </ul>
    //               </button>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="adobe-product">
    //           <div className="products">Illustrator</div>

    //           <span className="status">
    //             <span className="status-circle"></span>
    //             Update Available
    //           </span>
    //           <div className="button-wrapper">
    //             <button className="content-button status-button">
    //               Update this app
    //             </button>
    //             <div className="pop-up">
    //               <div className="pop-up__title">
    //                 Update This App
    //                 <svg
    //                   className="close feather feather-x-circle"
    //                   width="24"
    //                   height="24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   stroke-width="2"
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                 >
    //                   <circle cx="12" cy="12" r="10" />
    //                   <path d="M15 9l-6 6M9 9l6 6" />
    //                 </svg>
    //               </div>
    //               <div className="pop-up__subtitle">
    //                 Adjust your selections for advanced options as desired
    //                 before continuing. <a href="#">Learn more</a>
    //               </div>
    //               <div className="checkbox-wrapper">
    //                 <input
    //                   type="checkbox"
    //                   id="check1"
    //                   className="checkbox"
    //                 ></input>
    //                 <label for="check1">
    //                   Import previous settings and preferences
    //                 </label>
    //               </div>
    //               <div className="checkbox-wrapper">
    //                 <input
    //                   type="checkbox"
    //                   id="check2"
    //                   className="checkbox"
    //                 ></input>
    //                 <label for="check2">Remove old versions</label>
    //               </div>
    //               <div className="content-button-wrapper">
    //                 <button className="content-button status-button open close">
    //                   Cancel
    //                 </button>
    //                 <button className="content-button status-button">
    //                   Continue
    //                 </button>
    //               </div>
    //             </div>
    //             <div className="menu">
    //               <button className="dropdown">
    //                 <ul>
    //                   <li>
    //                     <a href="#">Go to Discover</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Learn more</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Uninstall</a>
    //                   </li>
    //                 </ul>
    //               </button>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="adobe-product">
    //           <div className="products">After Effects</div>
    //           <span className="status">
    //             <span className="status-circle green"></span>
    //             Updated
    //           </span>
    //           <div className="button-wrapper">
    //             <button className="content-button status-button open">
    //               Open
    //             </button>
    //             <div className="menu">
    //               <button className="dropdown">
    //                 <ul>
    //                   <li>
    //                     <a href="#">Go to Discover</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Learn more</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Uninstall</a>
    //                   </li>
    //                 </ul>
    //               </button>
    //             </div>
    //           </div>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="content-section">
    //       <div className="content-section-title">Apps in your plan</div>
    //       <div className="apps-card">
    //         <div className="app-card">
    //           <span>Premiere Pro</span>
    //           <div className="app-card__subtext">
    //             Edit, master and create fully proffesional videos
    //           </div>
    //           <div className="app-card-buttons">
    //             <button className="content-button status-button">Update</button>
    //             <div className="menu"></div>
    //           </div>
    //         </div>
    //         <div className="app-card">
    //           <span>InDesign</span>
    //           <div className="app-card__subtext">
    //             Design and publish great projects & mockups
    //           </div>
    //           <div className="app-card-buttons">
    //             <button className="content-button status-button">Update</button>
    //             <div className="menu"></div>
    //           </div>
    //         </div>
    //         <div className="app-card">
    //           <span>After Effects</span>
    //           <div className="app-card__subtext">
    //             Industry Standart motion graphics & visual effects
    //           </div>
    //           <div className="app-card-buttons">
    //             <button className="content-button status-button">Update</button>
    //             <div className="menu"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Main;
