import React, { useRef } from 'react'
import blueShoe from '../../../imgs/blueShoe.png'
import './3dcard-style.css'

export const Card = () => {

    const card = useRef()
    const sneaker = useRef()
    const info = useRef()
    

    function mousemove(e){
       
        
       
        let offsets = card.current.getBoundingClientRect(),
        w = card.current.clientWidth,
        h = card.current.clientHeight,
        bdsl = document.getElementById('App').scrollLeft,
        bdst = document.getElementById('App').scrollTop,
        wMultiple = 320/w,
        offsetX = 0.52 - (e.pageX - offsets.left )/w,
        offsetY = 0.52 - (e.pageY - offsets.top )/h,
        dy = (e.pageY - offsets.top - bdst) - h / 2,
		dx = (e.pageX - offsets.left - bdsl) - w / 2,
        yRotate = (offsetX - dx)*(0.07 * wMultiple),
		xRotate = (dy - offsetY)*(0.1 * wMultiple);
        card.current.style.transform = `rotateY(${yRotate}deg) rotateX(${xRotate}deg)`;
    }
    function mouseleave(e){
        card.current.style.transition = "all 0.5s ease";
        info.current.style.transform = "translateZ(0px)";
        card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        sneaker.current.style.transform = "translateZ(0px)";
    }

    function mouseenter(){
        card.current.style.transition ="none"
        sneaker.current.style.transform = "translateZ(100px)";
        info.current.style.transform = "translateZ(80px)";
    }
   
  
   
    

    return(
        <div ref={card}
         onMouseLeave={()=>mouseleave()}
         onMouseEnter={()=>mouseenter()}
         onMouseMove={(e)=>mousemove(e)}  className="card">
            <div className="sneaker">
                <div className="circle-threeD"></div>
                <img ref={sneaker} src={blueShoe} alt="adidas"/>
            </div>
            <div ref={info} className="info">
                <h2 className="title">Nike ZX</h2>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
               
                
            </div>
            <div className="purchase-button" >
                   Purchase
                </div>
        </div>
        
   
    )
}