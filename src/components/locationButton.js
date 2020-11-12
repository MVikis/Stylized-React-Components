import { useEffect, useState } from "react"

export default function Button(props){

    const [position, setPosition] = useState({x:0,y:0})
    

 function OnEnter(e){
    
    setPosition({x:e.nativeEvent.offsetX, y:e.nativeEvent.offsetY})
    
    

}


    return(
        <a href={props.Link} className="btn-primary" onMouseOver={OnEnter.bind(this)} >{props.text}
        <span style={{left:`${position.x}px`,top:`${position.y}px`}}/></a>
    )
}