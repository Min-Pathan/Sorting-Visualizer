import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const InsertionSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();

  let values = myState.values.map((item) => item[0]);
  let ids = myState.values.map((item) => item[1]);
  let timer = 0;
  // let total_time = 0;
  // for(let i = 1; i <size ; i++)
  // {
  //    let key = values[i]
  //    // let j = i-1;
  //    let j;
  //    for(j=i; ((j<size) && (values[j+1]>key)) ; j++)
  //    {
  //       values[j]=values[j+1];
  //       total_time++;
  //    }
  //    values[j]=key;
  //    timing_map.set(i+1,i+1-j);
  // }
  const display = () => {
    setTimeout(() => {
      dispatch({
        type: "PLAY",
        _play: false,
      });

      dispatch({
        type: "UPDATE_COLOR",
        color: "rgb(0, 182, 0)",
      });
    }, (((myState.values.length + 1) * myState.values.length) / 2) * myState.speed + 50);

    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    //Setting algo name
    document.getElementById("algo_name").innerText = "Insertion Sort";
  };

  const descSolve = () => {
    let size = values.length;
    for(let i = 1; i < size; i++){
      let ind = i-1;
      let key = values[i];
            while(ind>=0 && values[ind]<key)
            {
              let j = ind+1;

              let temp = values[j-1];
              values[j-1] = values[j];
              values[j] = temp;

              temp = ids[j-1];
              ids[j-1] = ids[j];
              ids[j] = temp;

              let new_ids = [...ids];
               
               setTimeout(() => {
                  
                  document.getElementById(new_ids[j]).style.transform = `translateX(${j*11}px)`;
                  document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'cyan';
                  
                  setTimeout(() => {
                     document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'grey';
                  },myState.speed-10);
                  
                  document.getElementById(new_ids[j-1]).style.transform = `translateX(${(j-1)*11}px)`;  
               },timer*myState.speed);

               timer++;
               --ind;
            }
            values[ind+1]=key;
        }

      display();
  };

     const solve = () => {
      
      for(let i = 0; i < values.length-1; i++){
            let ind = i+1;

            while(ind>0 && values[ind]<values[ind-1]){

               let j = ind;

               let temp = values[j];
               values[j] = values[j-1];
               values[j-1] = temp;

               temp = ids[j];
               ids[j] = ids[j-1];
               ids[j-1] = temp;

               let new_ids = [...ids];
               
               setTimeout(() => {
                  
                  document.getElementById(new_ids[j]).style.transform = `translateX(${j*11}px)`;
                  document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'cyan';
                  
                  setTimeout(() => {
                     document.getElementById(new_ids[j-1]).childNodes[1].style.backgroundColor = 'grey';
                  },myState.speed-10);
                  
                  document.getElementById(new_ids[j-1]).style.transform = `translateX(${(j-1)*11}px)`;  
               },timer*myState.speed);

               timer++;
               ind--;
            }
            
      }      
      display();
   }



  useEffect(() => {
    if (myState.algorithm === "insertion") {
      if (myState.play) {
        if (myState.desc == true) {
          descSolve();
        } else {
          solve();
        }
        //Setting bar colors name
        var select = document.getElementById("color");
        var value = select.options[select.selectedIndex].value;

        document.getElementById("unsorted_bar_color").style.background =
          "cyan";
        document.getElementById("bar_unsorted").innerText = "Swapping";

        document.getElementById("sorted_bar_color").style.background = "green";
        document.getElementById("bar_sorted").innerText = "Sorted";

        document.getElementById("comparing_bar_color").style.background =
          "grey";
        document.getElementById("bar_compare").innerText = "Comparing";
      }
    }
  }, [myState.play]);

  return <></>;
};

export default InsertionSort;
