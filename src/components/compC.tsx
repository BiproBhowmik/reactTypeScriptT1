import React from 'react'
import { FName } from '../App'

export default function compC() {
    return (
        <FName.Consumer>
            {(fname)=>{
                return (
                    <div>
                    <h1>I am from C {fname} </h1>
                    </div>
                )
            }}

       
        </FName.Consumer>
    )
}
