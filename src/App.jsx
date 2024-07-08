import React, { useState ,useReducer} from 'react'

const App = () => {
  const reducer = (state, action)=>{
    switch(action.type){
      case "INCREMENT":
        return({count1:state.count1+1,bool2:true});
        break;
      case "boolean":
        return({count1:state.count1,bool2: !state.bool2});
        break;
      default:
        return state
    }
  }
  const [count, setCount] = useState(0);
  const [state,dispatch] = useReducer(reducer,{count1:0,bool2:true});
  const [bool,setbool] = useState(true);
  const [input,inputChange] = useState("Stephen");

  const increment = ()=>{

    setCount(count+1);
    setbool(bool ? false :true );
  }
  const boolSet = ()=>{
    
  }
  const inputC = (event)=>{
    inputChange(event.target.value)
  }
  return (
    <>
    <h1>{count}</h1>
    <h2>{`${bool ? 'even' : "odd"}`}</h2>
    
    <button onClick={increment}> add</button>

    <input type="text" placeholder='wewe ni nani' onChange={inputC}/>
    <h1>{input}</h1>
    <h1>Use reducer function</h1>
    <h3>count: <span>{state.count1}</span></h3>
    <button onClick = {()=>dispatch({type:"INCREMENT"})}>Increment</button>
    </>
  )
}

export default App