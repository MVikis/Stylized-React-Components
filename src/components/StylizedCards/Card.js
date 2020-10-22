import React, {  useState } from 'react'

import  {usePalette} from 'react-palette'



export default function Card(props){


    const [src, setSrc] = useState(props.imgs[0])

    
    const { data, loading, error } = usePalette(src)
    
    
 
        function SetPallete(img){
            const { data, loading, error } = usePalette(img)
            return data.vibrant
        }
   

    return(

        <div className="card">
                <img src={src} />
                <div className="card-overlay">
                    <div className="circle" style={{background:data.vibrant}}></div>
                    <div className="card-container">
                        <h2>
                            {props.name}
                        </h2>
                        <div className="color-flex">
                        <h4>
                            Color:
                            </h4>
                           
                     <span onClick={()=>setSrc(props.imgs[0])} style={{background:`${SetPallete(props.imgs[0])}`}}/>
                     <span onClick={()=>setSrc(props.imgs[1])} style={{background:`${SetPallete(props.imgs[1])}`}}/>
                     <span onClick={()=>setSrc(props.imgs[2])} style={{background:`${SetPallete(props.imgs[2])}`}}/>
                        </div>
                        <button style={{background:data.vibrant}} >Buy</button>
                    </div>
                </div>
        </div>
    )
}