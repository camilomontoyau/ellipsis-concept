import React from "react";
import { Link } from 'react-router-dom';
import "./nav.css";

const Nav = () => (
  <nav>
    <Link to="/">Old Examples</Link>
    <Link to="/list">List example Observe per cell</Link>
    <Link to="/list2">List example Observe per cell</Link>
    <Link to="/list3">hooks polyfilled example</Link>
    <Link to="/list4">class polyfilled example</Link>
  </nav>
);

export default Nav;
