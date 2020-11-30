import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

export const Sidebar = () => {

  return (
    <aside className="sidebar__main">
        <img src={logo} alt="Logo" className="sidebar__logo" />
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <div className="sidebar__left"></div>
            <Link to="/">Home</Link>
            <div className="sidebar__right"></div>
          </li>
          <li className="sidebar__list-item">
            <div className="sidebar__left"></div>
            <Link to="/about">About</Link>
            <div className="sidebar__right"></div>
          </li>
          <li className="sidebar__list-item">
            <div className="sidebar__left"></div>
            <Link to="/skills">Skills</Link>
            <div className="sidebar__right"></div>
          </li>
          <li className="sidebar__list-item">
            <div className="sidebar__left"></div>
            <Link to="/projects">Projects</Link>
            <div className="sidebar__right"></div>
          </li>
          <li className="sidebar__list-item">
            <div className="sidebar__left"></div>
            <Link to="/experience">Experience</Link>
            <div className="sidebar__right"></div>
          </li>
        </ul>
    </aside>
  );
};
