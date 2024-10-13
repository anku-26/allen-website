import { useState } from "react"

function APP (){
  const [count , setCount] = useState(false);
  return  <div style =  {{background :  "red" , height : "100vh"}}>
   <tooglemessage count  = {count}></tooglemessage>
  
  </div>
}


function tooglemessage(props){
  function click (){
   setcount( props.count = !props.count); 
  }
  {count ? <p> this is rendered conditinolly </p> : null }
  <button onClick={click}> click me to seee details </button>
}

export default App
