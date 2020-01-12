import React from 'react'

function FragmentsChild (){
    return (
        <React.Fragment>
            <li>hei</li>
            <li>hei</li>
            <li>hei</li>
            <li>hei</li>
        </React.Fragment>
    )
}
function  Fragments(){
    return(
        <ul>
            <FragmentsChild/>
        </ul>
    )
}

export  default  Fragments