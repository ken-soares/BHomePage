import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSave } from "@fortawesome/free-solid-svg-icons";

const DropDownMenu = () => {
  const [bgLink, setBgLink] = useState("");

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
          <DropDownItem
            inTxt={"bg link"}
            btnTxt={<FontAwesomeIcon icon={faSave} />}
            inFct={setBgLink}
            btnFct={() => {
              document.body.style.background =
                "url(" + bgLink + ") no-repeat center center fixed";
              document.body.style.backgroundSize = "cover";
              localStorage["bg"] = bgLink;
            }}
          />
        </div>
      </div>
    </div>
  );
};

const DropDownItem = ({ inTxt, btnTxt, inFct, btnFct }) => {
  return (
    <li className="dropdownItem">
      <input
        placeholder={inTxt}
        onChange={(event) => {
          inFct(event.target.value);
        }}
      />
      <button
        onClick={() => {
          btnFct();
        }}
      >
        {btnTxt}
      </button>
    </li>
  );
};

export default DropDownMenu;
