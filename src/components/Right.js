import React from 'react'

const Right = ({text}) => {
  return (
   <div style={{margin:"5px 3px", border:"1px solid black", margin:"5px 10px",padding:"20px",fontWeight: text.startsWith("#") && '700'}} className='loading'>
        {
           text.startsWith("#") ? text.slice(1) : text
        }
   </div>
  )
}

export default Right
