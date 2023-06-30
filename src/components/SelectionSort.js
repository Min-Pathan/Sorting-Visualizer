import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectionSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();

  let values = myState.values.map((item) => item[0]);
  let ids = myState.values.map((item) => item[1]);
  let n = values.length;
  
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
    }, myState.speed * 3 * n + 50);

    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    //Setting algo name
    document.getElementById("algo_name").innerText = "Selection Sort";
  };


  const solve = () => {    
   for (let i = 0; i < n; i++) {
     setTimeout(() => {
       let ind = i;
       for (let j = i; j < n; j++) {
         if (values[ind] > values[j]) 
              ind = j;
       }
       let temp = values[i];
       values[i] = values[ind];
       values[ind] = temp;

       temp = ids[i];
       ids[i] = ids[ind];
       ids[ind] = temp;

       document.getElementById(ids[i]).style.transform = `translateX(${i * 11}px)`;
       document.getElementById(ids[ind]).style.transform = `translateX(${ind * 11}px)`;

       document.getElementById(ids[i]).childNodes[1].style.backgroundColor ="cyan";

       setTimeout(() => {
         document.getElementById(ids[i]).childNodes[1].style.backgroundColor ="yellow";
       }, myState.speed * 2);
     }, i * myState.speed * 3);
   }
   display();
 };

  const descSolve = () => {    

    for (let i = 0; i < n; i++) {
      setTimeout(() => {
      //   let ind = i;
      let j;
        for (j = i+1; j < n; j++) {
          if (values[i] < values[j]) 
             {
               let temp = values[i];
               values[i] = values[j];
               values[j] = temp;

               temp = ids[i];
               ids[i] = ids[j];
               ids[j] = temp;
             } 
        }
        

        document.getElementById(ids[i]).style.transform = `translateX(${
          i * 11
        }px)`;
        document.getElementById(ids[j]).style.transform = `translateX(${
          j * 11
        }px)`;

        document.getElementById(ids[i]).childNodes[1].style.backgroundColor ="cyan";

        setTimeout(() => {
          document.getElementById(ids[i]).childNodes[1].style.backgroundColor =
            "yellow";
        }, myState.speed * 2);
      }, i * myState.speed * 3);
    }

    display();
  };

  useEffect(() => {
    if (myState.algorithm === "selection") {
      if (myState.play) {
         if(myState.desc==true)
         {
           descSolve();
         }
         else
         {
           solve();
         }


        document.getElementById("unsorted_bar_color").style.background = "cyan";
        document.getElementById("bar_unsorted").innerText = "Comparing";

        document.getElementById("sorted_bar_color").style.background = "green";
        document.getElementById("bar_sorted").innerText = "Sorted";

        document.getElementById("comparing_bar_color").style.background =
          "yellow";
        document.getElementById("bar_compare").innerText = "Swapping";
      }
    }
  }, [myState.play]);

  return <></>;
};

export default SelectionSort;
