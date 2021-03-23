import React from 'react'
import './Loader-style.css'
const array = [1,2,3,4,5]

export const JumpingLoader = () => {
    
    
    return(
        <div className="loader-container">
            {array.map(index =>
            <div className="blob-container" key={index}>
                 <div className="blob"/>
            </div>
                )}
        </div>
    )
}