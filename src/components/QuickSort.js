import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const QuickSort = () =>{
   const myState = useSelector(state => state.updateProps);
   const dispatch = useDispatch();

   let values = myState.values.map((item) => item[0]);
   let ids = myState.values.map((item) => item[1]);
   
   const display = () =>{
      setTimeout(() => {
         dispatch({
            type:'PLAY',
            _play:false
         })

         dispatch({
            type:'UPDATE_COLOR',
            color: 'rgb(0, 182, 0)'
         })
      },6*myState.speed*(1+Math.ceil(Math.log(values.length+1)))+100);

      //Setting Time complexities
      document.getElementById("Time_Worst").innerText="O(N^2)";
      document.getElementById("Time_Average").innerText="Θ(N log N)";
      document.getElementById("Time_Best").innerText="Ω(N log N)";

      //Setting Space complexity
      document.getElementById("Space_Worst").innerText="O(log N)";

      //Setting algo name
      document.getElementById("algo_name").innerText="Quick Sort"
   }
   const swap = (arr,i,j) => {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
   }

   const DescPartition = (values, ids, l, r, timer)=>{
      let pivot = values[l];
      let i = l;
      for(let j = l+1; j <= r; j++){
         if(values[j]>pivot){
            i++;
            swap(values,i,j);
            swap(ids,i,j);
            document.getElementById(ids[i]).style.transform = `translateX(${i*11}px)`;
            document.getElementById(ids[j]).style.transform = `translateX(${j*11}px)`;
         }
      }
      swap(values,i,l);
      swap(ids,i,l);

      setTimeout(() => {

         document.getElementById(ids[i+1]).childNodes[1].style.backgroundColor = 'black';
         setTimeout(() => {
            document.getElementById(ids[i+1]).childNodes[1].style.backgroundColor = 'purple';
         },myState.speed*6-10)

         document.getElementById(ids[l]).style.transform = `translateX(${l*11}px)`;
         document.getElementById(ids[i+1]).style.transform = `translateX(${(i+1)*11}px)`;

      },myState.speed*timer*6);
      return i;
   }
   const partition = (values,ids,l,r,timer) => {

      let pivot = values[r];
      let i = l-1;
      for(let j = l; j < r; j++){
         if(values[j]<pivot)
         {
            i++;
            swap(values,i,j);
            swap(ids,i,j);
            document.getElementById(ids[j]).style.transform = `translateX(${j*11}px)`;
            document.getElementById(ids[i]).style.transform = `translateX(${i*11}px)`;
         }
      }
      swap(values,r,i+1);
      swap(ids,r, i+1);

      setTimeout(() => {

         document.getElementById(ids[i+1]).childNodes[1].style.backgroundColor = 'black';
         setTimeout(() => {
            document.getElementById(ids[i+1]).childNodes[1].style.backgroundColor = 'purple';
         },myState.speed*6-10)

         document.getElementById(ids[r]).style.transform = `translateX(${r*11}px)`;
         document.getElementById(ids[i+1]).style.transform = `translateX(${(i+1)*11}px)`;

      },myState.speed*timer*6);
      return i+1;
   }

   const quickSort = (values,ids,l,r,timer) => {
      if(myState.desc==true)
      {
         if(l<r){
            let ind = DescPartition(values,ids,l,r,timer);
            quickSort(values,ids,l,ind,timer-1);
            quickSort(values,ids,ind+1,r,timer-1);
         }
      }
      else
      {
         if(l<r){
            let ind = partition(values,ids,l,r,timer);
            quickSort(values,ids,l,ind-1,timer-1);
            quickSort(values,ids,ind+1,r,timer-1);
         }
      }     
   }
   
   const solve = () => {

      quickSort(values,ids,0,values.length-1,Math.ceil(Math.log(values.length+1)));

      display();
   }
   
   useEffect(() => {
      if(myState.algorithm==='quick'){
         if(myState.play)
         {
            solve();
            //Setting bar colors name
            // var select = document.getElementById("color");
            // var value = select.options[select.selectedIndex].value;
    
            document.getElementById("unsorted_bar_color").style.background = 'purple';
            document.getElementById("bar_unsorted").innerText = "Swapping";
    
            document.getElementById("sorted_bar_color").style.background = "green";
            document.getElementById("bar_sorted").innerText = "Sorted";
    
            document.getElementById("comparing_bar_color").style.background ="black";
            document.getElementById("bar_compare").innerText = "Less than pivot";
          }
      }
   },[myState.play]);

   return <></>;
}

export default QuickSort;