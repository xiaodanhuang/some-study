import React, {useEffect, useState} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        let i=setTimeout(()=>{
            setCount(x=>x+1)
        },1000);
        return ()=>{
            clearTimeout(i)
            console.log('component will unmount')
        }
    })
    return (
        <div>
            {count}
        </div>
    )
}

export default UseEffect