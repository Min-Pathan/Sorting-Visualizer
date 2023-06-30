import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')       
      document.body.style.backgroundColor="black"  
      document.body.style.color="white"    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
  }
  return (
    <div className="App" mode={mode}>
      <div className="container">
      <Header mode={mode} toggleMode={toggleMode}/>
      <Home mode={mode} toggleMode={toggleMode}/>
       
      </div>
    </div>
  );
}

export default App;
