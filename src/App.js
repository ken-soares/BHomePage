import { useEffect } from "react";
import "./App.css";
import DropdownMenu from "./components/DropdownMenu";

const App = () => {
  useEffect(() => {
    document.body.style.background =
      "url(" + localStorage["bg"] + ") no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }, []);
  return (
    <div className="App">
      <>
        <DropdownMenu />
        <h1>Hello world</h1>
      </>
    </div>
  );
};

export default App;
