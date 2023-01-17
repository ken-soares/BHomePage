import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSave } from "@fortawesome/free-solid-svg-icons";
import DropDownItem from "./DropDownItem";

const DropDownMenu = () => {
  const [bgLink, setBgLink] = useState("");
  const [motd, setMotd] = useState("");
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const [open, setOpen] = useState(false);
  return (
    <div className="DropDownMenu">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon icon={faCog} />
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>Settings</h3>
          <h4>Wallpaper</h4>
          <DropDownItem
            inTxt={"wallpaper.jpg"}
            btnTxt={<FontAwesomeIcon icon={faSave} />}
            inFct={setBgLink}
            btnFct={() => {
              document.body.style.background =
                "url(" + bgLink + ") no-repeat center center fixed";
              document.body.style.backgroundSize = "cover";
              localStorage["bg"] = bgLink;
            }}
          />
          <h4>MOTD</h4>
          <DropDownItem
            inTxt={"Hi, Kenneth!"}
            btnTxt={<FontAwesomeIcon icon={faSave} />}
            inFct={setMotd}
            btnFct={() => {
              const motd_el = document.getElementById("motd");
              motd_el.textContent = motd;
              localStorage["motd"] = motd;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;
