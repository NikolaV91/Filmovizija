import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = (props) => {
  return (
    <div id="header">
      <Link to={"/"}>Filmovizija</Link>
      <input
        type="text"
        placeholder="Search Movie"
        onChange={(e) => props.searchData(e.target.value)}
      />
    </div>
  );
};

export default Header;
