import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import SelectionSort from "./SelectionSort";
import "./Visuals.css";
const Visuals = (props) => {
  let myStyle={
    color:props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'black':'white'
  }

  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const color = myState.color;
  const range = myState.range;
  // const [playname, setPlayname] = useState("PLAY");

  const changeValues = () => {
    let new_arr = [...myState.values];
    for (let i = 0; i < new_arr.length; i++)
      document.getElementById(i).style.transform = `translateX(${i * 11}px)`;
    dispatch({
      type: "CHANGE_VALUES",
    });
  };

  const handlePlay = (play) => {
    if (!myState.play) {
      document.getElementById("change-btn").disabled = true;
      document.getElementById("change-btn").style.backgroundColor = "grey";
      document.getElementById("play-btn").disabled = true;
      document.getElementById("play-btn").style.backgroundColor = "grey";

      // document.getElementById("pause-btn").disabled = false;
      // document.getElementById("pause-btn").style.backgroundColor ="rgb(0, 149, 199)";
    }
    else 
    {
      return;
    }
    dispatch({
      type: "PLAY",
      _play: play,
    });
  };

  // const handlePause = (pause) => {
  //   if (!myState.pause)
  //   {
  //     document.getElementById("play-btn").disabled = false;
  //     document.getElementById("play-btn").style.backgroundColor ="green";
  //     document.getElementById("play-btn").value = setPlayname("RESUME");

  //     document.getElementById("pause-btn").disabled = true;
  //     document.getElementById("pause-btn").style.backgroundColor ="grey";

  //     document.getElementById("change-btn").disabled = true;
  //     document.getElementById("change-btn").style.backgroundColor ="grey";
  //   }
  //   else
  //   {
  //     return;
  //   }
  //   dispatch({
  //     type: "PAUSE",
  //     _pause: pause,
  //   });
  // };

  useEffect(() => {
    if (!myState.play) {
      document.getElementById("play-btn").disabled = false;
      document.getElementById("play-btn").style.backgroundColor = "rgb(0, 149, 199)";
      document.getElementById("change-btn").disabled = false;
      document.getElementById("change-btn").style.backgroundColor ="rgb(0, 149, 199)";


      // document.getElementById("pause-btn").disabled = true;
      // document.getElementById("pause-btn").style.backgroundColor ="grey";
    }
  }, [myState.play]);

  let speed = myState.speed;
  if (myState.algorithm === "selection") speed *= 3;
  else if (myState.algorithm === "merge") speed *= 5;
  else if (myState.algorithm === "quick") speed *= 6;
  else if (myState.search_algo === 'binary') speed*=5;
  return (
    <>
      <div className="visuals" style={myStyle}>
        <div className="details">
          <div className="algorithm__name">
              Technique:&nbsp;&nbsp;<span className="algo_name" id="algo_name"></span>            
          </div>
          <div className="array_size_cont">
              Array Size:&nbsp;&nbsp;<span id="slider_value"></span>
          </div>
        </div>
        
        <div className="visualizer" >
          
          {myState.algorithm === "quick" && (
            <div className="legend">
              <div className="legend__lable"></div> Pivot elements
            </div>
          )}
          {
            <div className="visual__items" style={{ width: `${myState.values.length * 11}px` }} >
              {myState.values.map((item) => {
                return (
                  <div className="visual__item" key={item[1]} id={item[1]} style={{
                      transition: `${speed / 1000}s linear all`,
                      transform: `translateX(${item[1] * 11}px)`,
                    }}
                    mode={props.mode}>

                    <h4 mode={props.mode}>{item[0]}</h4>
                    <div className="visual" mode={props.mode}
                      style={{
                        height: `${item[0] * 3}px`,
                        backgroundColor: color,
                        width: range < 35 ? "8px" : "6px",
                      }}></div>
                  </div>
                );
              })}
            </div>
          }       
        </div>
        <hr />
        <div className="visual__btns" >
          
          <button id="change-btn" mode={props.mode} onClick={changeValues}>
            change values
          </button>
          <button id="play-btn" mode={props.mode} onClick={() => handlePlay(true)}>
            PLAY
          </button>
          {/* <button id="pause-btn" onClick={() => handlePause(true)}>Pause</button> */}
        </div>
        <BubbleSort/>
        <MergeSort/>
        <InsertionSort/>
        <SelectionSort/>
        <QuickSort/>
      </div>
      
    </>
  );
};

export default Visuals;
