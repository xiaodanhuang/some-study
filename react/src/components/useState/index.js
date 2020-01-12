import React,{useState}from 'react'
function UseState(){
    const [count,setCount]=useState(0)
    return(
        <div>
            {count}
            <br/>
            <button onClick={() => {
              setCount(x=>x+1)
            }}>+1
            </button>
            <button onClick={(x) => {
                setCount(x=>x-1)
            }}>-1
            </button>
        </div>
    )

}
export  default  UseState