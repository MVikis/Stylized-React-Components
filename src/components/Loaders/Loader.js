import React from 'react'
import { JumpingLoader } from './Jumping-Loader/JumpingLoader'
import { SpinnerLoader } from './Spinner-Loader/SpinnerLoader'
const array = [1,2,3,4]

export const Loader = () => {
    
    
    return(
        <div className="row">
            <SpinnerLoader/>
            <JumpingLoader/>
        </div>
    )
}