import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MergeSort = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();

  let values = myState.values.map((item) => item[0]);
  let ids = myState.values.map((item) => item[1]);

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
    }, 5 * myState.speed * (1 + Math.ceil(Math.log(values.length + 1))) + 50);

    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    //Setting algo name
    document.getElementById("algo_name").innerText = "Merge Sort";
  };


  const mergeSort = (values, ids, timer, l, r) => 
  {
    if (l >= r) return;

    let mid = Math.floor((l + r) / 2);
    mergeSort(values, ids, timer - 1, l, mid);
    mergeSort(values, ids, timer - 1, mid + 1, r);

    setTimeout(() => {
      let color = [];
      for (let i = 0; i < 3; i++) 
          color.push(Math.floor(Math.random() * 200));

      for (let i = l; i <= r; i++)
        document.getElementById(ids[i]).childNodes[1].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;

      for (let i = l; i <= r; i++) {
        for (let j = i + 1; j <= r; j++) 
        {
          if(myState.desc==true)
          {
            if (values[i] < values[j]) 
              {
                [values[i], values[j]] = [values[j], values[i]];
                [ids[i], ids[j]] = [ids[j], ids[i]];

                let new_ids = [...ids];

                document.getElementById(new_ids[i]).style.transform = `translateX(${i * 11}px)`;
                document.getElementById(new_ids[j]).style.transform = `translateX(${j * 11}px)`;
              }
          }
          else
          {
            if (values[i] > values[j]) 
            {
              [values[i], values[j]] = [values[j], values[i]];
              [ids[i], ids[j]] = [ids[j], ids[i]];
  
              let new_ids = [...ids];
  
              document.getElementById(new_ids[i]).style.transform = `translateX(${i * 11}px)`;
              document.getElementById(new_ids[j]).style.transform = `translateX(${j * 11}px)`;
            }
          }
          
        }
      }
    }, timer * myState.speed * 5);
  };

  const solve = () => {
    mergeSort(values,ids,Math.ceil(Math.log(values.length + 1)),0,values.length - 1);
    display();
  };

  useEffect(() => {
    if (myState.algorithm === "merge") {
      if (myState.play) {
        solve();
        //Setting bar colors name
        var select = document.getElementById("color");
        var value = select.options[select.selectedIndex].value;

        document.getElementById("unsorted_bar_color").style.background ="brown";
        document.getElementById("bar_unsorted").innerText = "Dividing";

        document.getElementById("sorted_bar_color").style.background = "green";
        document.getElementById("bar_sorted").innerText = "Sorted";

        document.getElementById("comparing_bar_color").style.background ="purple";
        document.getElementById("bar_compare").innerText = "Comparing";
      }
    }
  }, [myState.play]);

  return <></>;
};

export default MergeSort;
