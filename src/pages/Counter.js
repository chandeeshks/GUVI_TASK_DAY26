import React,{useState} from "react";

function Counterpage(){
    const [count,setcount] = useState(0)
    function handlecounter(type=""){
      if(type === "increment"){
        setcount(count + 1);
      }
      else{
        setcount(count - 1);
      }
    }

    return (
    <div className="App">
      <div className="counter-container">
        <h1>{count}</h1>
        <div className="btn">
          <button onClick={()=>handlecounter("increment")}>+</button>
          <button onClick={()=>handlecounter("decrement")}>-</button>
        </div>
      </div>
    </div>
  );
}

export default Counterpage;