import React from 'react'
import { JumpingLoader } from './Jumping-Loader/JumpingLoader'
import { SpinnerLoader } from './Spinner-Loader/SpinnerLoader'


export const Loader = () => {
    
    
    return(
        <div className="row">
            <SpinnerLoader/>
            <JumpingLoader/>
        </div>
    )
}