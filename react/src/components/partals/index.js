import React from 'react'
import ReactDOM from 'react-dom'
function Modal (props){
    return ReactDOM.createPortal(props.children,props.el)
}
function Partals(){
    const el=document.getElementById("modal")
    return (
        <div>
           <Modal el={el}>
               <div>
                   我是一个modal
               </div>
           </Modal>
        </div>
    )
}

export default Partals