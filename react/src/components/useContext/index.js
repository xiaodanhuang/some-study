import React, {useState,createContext,useContext} from 'react'

const Text=createContext()
function UseContext(){
    const [count,setCount]=useState(0)
    return (
        <div>
            {count}
            <Text.Provider value={{count,setCount}} >
                <Child/>
            </Text.Provider>

        </div>
    )


}
function Child(){
    const {count,setCount}=useContext(Text)
    return (
        <div>
            {count}
            <button onClick={()=>{setCount(x=>x+1)}}>+1</button>
        </div>
    )

}
export default UseContext
