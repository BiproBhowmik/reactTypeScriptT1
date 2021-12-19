import React, { useContext } from 'react'
import CompC from './compC'
import { FName } from '../App'


export default function CompB() {
    const Fullname = useContext(FName)
    return (
        <div>
            <h1>From B {Fullname} </h1>
            <CompC />
        </div>
    )
}
