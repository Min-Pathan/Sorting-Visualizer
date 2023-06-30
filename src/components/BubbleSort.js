import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

const BubbleSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();

  let values = myState.values.map((item) => item[0]);
  let ids = myState.values.map((item) => item[1]);
  
  const display = ()=>{
    setTimeout(() => {
      dispatch({
        type: "PLAY",
        _play: false,
      });

      dispatch({
        type: "UPDATE_COLOR",
        color: "rgb(0, 182, 0)",
      });
    }, (((myState.values.length - 1) * myState.values.length) / 2) * myState.speed + 50);
    
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    //Setting algo name
    document.getElementById("algo_name").innerText="Bubble Sort"  

  }

// const stop=()=>{
//   for (let i = values.length, timer = 0; i > 0; timer += i - 1, i--) {
//     setTimeout(() => 
//     {
//       document.getElementById("algo_name").innerText="Bubble Sort"
//     },10);
//     if()
// }

  const solve = () => {    
    for (let i = values.length, timer = 0; i > 0; timer += i - 1, i--) {
      setTimeout(() => {
        for (let j = 1; j < i; j++) {
          setTimeout(() => {
            document.getElementById(ids[j]).childNodes[1].style.backgroundColor = "black";
            document.getElementById(ids[j - 1]).childNodes[1].style.backgroundColor = "black";
            setTimeout(() => {
              document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.color;
              document.getElementById(ids[j - 1]).childNodes[1].style.backgroundColor = myState.color;
            }, myState.speed - 10);

            if (values[j] < values[j - 1]) {
              let temp = values[j];
              values[j] = values[j - 1];
              values[j - 1] = temp;

              temp = ids[j];
              ids[j] = ids[j - 1];
              ids[j - 1] = temp;

              document.getElementById(ids[j]).style.transform = `translateX(${j * 11}px)`;

              document.getElementById(ids[j - 1]).style.transform = `translateX(${(j - 1) * 11}px)`;
            }
          }, (j - 1) * myState.speed);
        }
        
      }, timer * myState.speed);      
    }
    display();        
  };


  const descSolve=()=>{
    let size = values.length;
    for (let i = 0, timer = 0; i < size; timer += i, i++) {
      setTimeout(() => {
        for (let j = 0; j < size-i; j++) {
          setTimeout(() => {

            document.getElementById(ids[j]).childNodes[1].style.backgroundColor = "black";
            document.getElementById(ids[j+1]).childNodes[1].style.backgroundColor = "black";
            
            setTimeout(() => {

              document.getElementById(ids[j]).childNodes[1].style.backgroundColor = myState.color;
              document.getElementById(ids[j+1]).childNodes[1].style.backgroundColor = myState.color;
              
            }, myState.speed - 10);

            if (values[j] < values[j + 1]) {
              let temp = values[j];
              values[j] = values[j+1];
              values[j+1] = temp;

              temp = ids[j];
              ids[j] = ids[j+1];
              ids[j+1] = temp;

              document.getElementById( ids[j] ).style.transform = `translateX(${j * 11}px)`;
              document.getElementById(ids[j+1]).style.transform = `translateX(${ (j + 1) * 11 }px)`;

              
            }
          }, (j+1) * myState.speed);
        }
        
      }, timer * myState.speed);
      
    }
    display(); 
  }

  useEffect(() => {
    
    if (myState.algorithm === "bubble") {
      if (myState.play) 
      {
        if(myState.desc)
        {
          descSolve();
        }
        else
        {
          solve();
        }
      } 
      
        //Setting bar colors name
        var select = document.getElementById('color');
        var value = select.options[select.selectedIndex].value;
        
        document.getElementById("unsorted_bar_color").style.background = value;
        document.getElementById("bar_unsorted").innerText="Unsorted";

        document.getElementById("sorted_bar_color").style.background = "green";
        document.getElementById("bar_sorted").innerText="Sorted";

        document.getElementById("comparing_bar_color").style.background = "black";
        document.getElementById("bar_compare").innerText="Comparing";
    }
  }, [myState.play]);

  return <></>;
};

export default BubbleSort;

