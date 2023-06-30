import React from "react";
import Sidebar from "./Sidebar";
import Visuals from "./Visuals";
import "./Home.css";
import HeadBar from "./HeadBar";
const Home = (props) => {
  return (
    <div className="home">
      <HeadBar mode={props.mode} toggleMode={props.toggleMode}/>
      <div className="part">   
      <Sidebar mode={props.mode} toggleMode={props.toggleMode}/>     
        <Visuals mode={props.mode}/>
        
      </div>
    </div>
  );
};

export default Home;
