import React from 'react'

const Left = ({text,setText}) => {
  return (
   <textarea className='textarea' style={{height:"100%",padding:"20px"}} onChange={(e)=>{
        setText(e.target.value);
   }}>

   </textarea>
  )
}

export default Left
