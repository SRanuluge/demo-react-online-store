import React, { useState } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";
import { IoFingerPrintOutline } from "react-icons/io5";

const Header = () => {
  const [btn, setBtn] = useState(false);
  return (
    <nav>
      <div className={classes.container}>
        <Link className={classes.linkStyle} to={"/"}>
          <IoFingerPrintOutline size={30} />
          <span onClick={() => setBtn(false)} className={classes.logTitle}>
            ABC Store
          </span>
        </Link>
        <ul className={btn ? classes.ul_mobile : null}>
          <li>
            <Link
              onClick={() => setBtn(false)}
              className={classes.linkStyle}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setBtn(false)}
              className={classes.linkStyle}
              to={"/about"}
            >
              About
            </Link>
          </li>
        </ul>
        {!btn ? (
          <GiHamburgerMenu
            size={25}
            className={classes.nav_icon}
            onClick={() => setBtn(!btn)}
          />
        ) : (
          <FaTimesCircle
            size={25}
            style={{ color: "#fff" }}
            className={classes.nav_icon}
            onClick={() => setBtn(!btn)}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
