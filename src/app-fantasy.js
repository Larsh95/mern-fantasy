import "./app-fantasy.css";
import Main from "./components/main";
import Navbar from "./components/navbar";

function AppFantasy() {
  return (
    <div className="app">
      <Navbar />
      <div className="wrapper">
        <Main />
      </div>
    </div>
  );
}

export default AppFantasy;
