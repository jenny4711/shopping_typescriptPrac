import React, { useState, KeyboardEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

import "../CSS/Navb.css";

interface NavbProps {
  log: boolean;
  setLog: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navb: React.FC<NavbProps> = ({ log, setLog }) => {
  const navigate = useNavigate();
  const menuList = ["여성", "Divided", "남성", "신생아/유아"];
  const login = () => (log ? setLog(false) : navigate("/login"));
  const search = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let keyword = e.currentTarget.value;

      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="Navb">
      {/* loginBtn */}
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <Link onClick={login} className="loginBtn" to="/login">
          {log ? "Log Out" : "Log In"}
        </Link>
      </div>

      {/* logo */}
      <div className="Nav-logo">
        <Link to="/">
          <img
            width={100}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
          />
        </Link>
      </div>

      {/* menu */}

      <div className="menu_area">
        <ul>
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        {/* search */}
        <div className="menu_search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyDown={(e) => search(e)} />
        </div>
      </div>
    </div>
  );
};

export default Navb;
