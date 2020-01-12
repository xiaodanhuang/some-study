import  React ,{useRef} from 'react'
function UseRef(){
    const inputRef=useRef()
    const onChange=()=>{
        inputRef.current.focus()
    }
    return(
        <div>
            <input ref={inputRef}/>
            <button onClick={onChange}></button>
        </div>
    )
}

export default UseRef
