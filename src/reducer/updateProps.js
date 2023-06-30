const initial ={
   algorithm: 'bubble',
   color: '#35c6ff',
   speed: 100,
   range: '30',
   play: false,
   values: [],
   timeouts:[],
   pause: false,
   desc : false,
   search_algo: 'binary',
   value: ''
}
const updateProps = (state=initial, action) => {
   switch(action.type)
   {
      case 'UPDATE_RANGE':
      {
          let arr=[];
          for(let i = 0; i<action.range; i++)
          {
            arr.push([Math.floor(Math.random()*100)+1, i]);
          }
          return {...state, range: action.range, values: arr};
      }
      case 'UPDATE_VALUES': {
         return {...state,values:action._values};
      }

      case 'UPDATE_SPEED':{
         return {...state, speed:action.speed};
      }

      case 'UPDATE_COLOR':{
         return {...state, color:action.color};
      }

      case 'UPDATE_ALGORITHM':{
         return {...state, algorithm:action.algorithm};
      }

      case 'UPDATE_TIEMOUTS':{
         return {...state, timeouts:action._timeouts};
      }

      case 'CHANGE_VALUES':{
         let arr=[], range = state.range;
         for(let i = 0; i < range; i++)
            arr.push([Math.floor(Math.random()*100)+1, i]);
         return {...state,values:arr};
      }

      case 'PLAY': 
      {
         return {...state, play:action._play};
      }

      case 'PAUSE': 
      {
         return {...state, pause:action._pause};
      }

      case 'DESC_ORDER':
      {
         return {...state, desc:action._desc};
      }  
      
      case 'UPDATE_SEARCH_ALGO':
      {
         return {...state, search_algo:action.search_algo};
      }
      default:
         return state;
   }
}

export default updateProps
