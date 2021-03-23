import React from 'react'
import './S-Loader-style.css'
const array = [1,2,3]

export const SpinnerLoader = () => {
    
    
    return(
        <div className="loader-container">
          <div className="circle-container">
              {array.map(index =>
                <div key={index} className="circle">
                </div>
                )}
          </div>
        </div>
    )
}