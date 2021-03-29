import React from 'react'
import CardApp from './Stylized Cards/ColorCards/CardApp'
import styled from 'styled-components'
import { SpinnerLoader } from './Loaders/Spinner-Loader/SpinnerLoader'

const Style = styled.div`
perspective: 100px;
transform-style: preserve-3d;
transform: rotateY(45deg) rotateX(333deg)
`

export const Home = () => {
    const threeD = 'three-d'
    return(
        <div className="header">
            <div className="title-container row">
                <div>
                <span className="main-title">
                    Functional components
                </span>
                <span className="side-title">
                    Components for all React.js applications
                </span>
                </div>
            </div>
            <div className="image-container">
               <div className="showcase">
               
               <SpinnerLoader style={threeD}/>
               </div>
               
                
            </div>

        </div>
    )
}