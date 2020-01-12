import React,{useState,useEffect,useRef,forwardRef} from 'react';
import './App.css';

function Input(props,ref){
  useEffect(()=>{
    console.log(props.value)
  },[props.value])

    return(
        <div>
          <input value={props.value} readOnly/>
        </div>
    )
}
const MInput =forwardRef((props, ref) => {
    return (
        <Input props={props}ref={ref}/>
    )
})

function App() {
    const[count,setCount] = useState(()=>{return 0})
    const ref1=useRef()
    const ref2=useRef()
    //constructor ?? 没有
    useEffect(()=>{
      console.log(ref1.current)
    })
  return (
    <div className="App">
      <header className="App-header">
         <input />
          <button onClick={()=>{ref2.current.focus()}}>+1</button>
          <MInput value={count} ref={ref1}/>
          <MInput value={count} ref={ref2}/>
      </header>
    </div>
  );
}

export default App;
