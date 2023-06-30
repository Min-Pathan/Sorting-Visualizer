import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  let mystyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(51, 47, 47)" : "#95ec9f",
  };

  return (
    <div className="sidebar" style={mystyle}>
      <div className="sidebar__option">
        
        <div className="time" mode={props.mode}>
          <h3>TIME COMPLEXITY</h3>

          <div
            className="Complexity_Containers"
            id="Time_Complexity_Types_Container"
          >
            <div className="Pair_Definitions">
              <p className="Sub_Heading">Worst case: &nbsp;&nbsp;</p>
              <p id="Time_Worst"></p>
            </div>

            <div className="Pair_Definitions">
              <p className="Sub_Heading">Average case: &nbsp;&nbsp; </p>
              <p id="Time_Average"></p>
            </div>

            <div className="Pair_Definitions">
              <p className="Sub_Heading">Best case: &nbsp;&nbsp;</p>
              <p id="Time_Best"></p>
            </div>
          </div>
        </div>

        <div className="space">
          <h3>SPACE COMPLEXITY</h3>

          <div
            className="Complexity_Containers"
            id="Space_Complexity_Types_Container"
          >
            <div className="Pair_Definitions">
              <p className="Sub_Heading">Worst case: &nbsp;&nbsp;</p>
              <p id="Space_Worst"></p>
            </div>
          </div>
        </div>
        <div className="colorBar">
          <div className="flexing">
            <div id="unsorted_bar_color" className="box"></div>
            <h4 id="bar_unsorted" className="content"></h4>
          </div>
          <div className="flexing">
            <div id="sorted_bar_color" className="box"></div>
            <h4 id="bar_sorted" className="content"></h4>
          </div>

          <div className="flexing">
            <div id="comparing_bar_color" className="box"></div>
            <h4 id="bar_compare" className="content"></h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
