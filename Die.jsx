import React from 'react'

export default function Die(props) {
     const style = {
          backgroundColor: props.isHeld ? "#59E391" : "white"
     }
  return (
     <div className=' bg-white border-none' style={style} onClick={props.holdDice}>
       <div className='m-2 w-10 h-10 rounded-md flex items-center text-center  text-xl justify-center bg-gray-200 shadow-lg hover:bg-green-400 cursor-pointer'>{props.value}</div>
    
    </div>
  )
}
