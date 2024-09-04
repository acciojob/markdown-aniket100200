import React, { useEffect, useState } from 'react'
import Left from './Left'
import Right from './Right'

const App = () => {
  const[text,setText] = useState("");
  const[render,setRender]= useState(text);
  useEffect(()=>{
      
        setRender(text);    

  },[text]);
  return (
    <div className='app' style={{display:"grid",gridTemplateColumns:"1fr 1fr",margin:"10px 5px", padding:"20px",height:"90vh"}}>
      <Left text={text} setText={setText}/>
      <Right text={render}/>
    </div>
  )
}

export default App
