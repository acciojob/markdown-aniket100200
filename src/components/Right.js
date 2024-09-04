import React from 'react'

const Right = ({text}) => {
  return (
   <div style={{margin:"5px 3px", border:"1px solid black", margin:"5px 10px",padding:"20px",}} className='preview'>
        {
           text.startsWith("#") ? <h1>{text.slice(1).trim()}</h1> : text
        }
   </div>
  )
}

export default Right
