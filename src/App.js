import { useEffect } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu";

const App = () => {
  useEffect(() => {
    document.body.style.background =
      "url(" + localStorage["bg"] + ") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    const motd_el = document.getElementById("motd");
    motd_el.textContent = localStorage["motd"];
  }, []);
  return (
    <div className="App">
      <>
        <DropdownMenu />
        <h1 id="motd">Hi, Kenneth!</h1>
      </>
    </div>
  );
};

export default App;
