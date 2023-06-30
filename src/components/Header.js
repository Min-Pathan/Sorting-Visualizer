import React from "react";
import "./Header.css";
const Header = (props) => {
  let mystyle={
    color:props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'rgb(51, 47, 47)':'#95ec9f'
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg" style={mystyle}>
        <div className="header">
          <div className="header-logo">
            <span> Sorting Visualizer</span>
          </div>          

          <div className="header__options">
            <div
              className={`form-check form-switch mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>
              <input
                className="form-check-input" onClick={() => {props.toggleMode(null);}}
                type="checkbox" role="switch" id="switch" />
              <label className="form-check-label" htmlFor="switch">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
