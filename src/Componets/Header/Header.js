import { React, useState, useEffect} from "react";
import classes from "./header.module.css";

import { BsFillBrightnessHighFill } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

function Header() {
  const [state, setState] = useState(false);

  const handelMode = () => {
    setState(!state);
    console.log(state);
  };

  
  useEffect(() => {
    if (state) {
      document.documentElement.style.setProperty(
        "--very-light-gray",
        "#202c37"
      );
      document.documentElement.style.setProperty("--white", "#2b3945");
      document.documentElement.style.setProperty(
        "--very-dark-blue-text",
        "#fafafa"
      );
    } else {
      document.documentElement.style.setProperty(
        "--very-light-gray",
        "#fafafa"
      );
      document.documentElement.style.setProperty("--white", "#ffffff");
      document.documentElement.style.setProperty(
        "--very-dark-blue-text",
        "#111517"
      );
    }
  }, [state]);


  return (
    <div className={classes.header}>
      <p className={classes.title}>Where in the world?</p>
      <button onClick={handelMode} className={classes.dark_mode}>
        {state ? <BsFillBrightnessHighFill className={classes.icon}/> : <BiMoon className={classes.icon}/>}
         {state ?" light mode" : " dark mode"} 
      </button>
    </div>
  );
}

export default Header;
