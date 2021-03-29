import React, {  useState } from 'react'

import  {usePalette} from 'react-palette'



export default function Card({style, imgs, name}){

   
    let numberOfImgs = []
   imgs.forEach((element,index) => {
       
       numberOfImgs.push(index)
   });
    const [src, setSrc] = useState(imgs[0])
    const { data, loading, error } = usePalette(src)
   function SetPallete(img){
            const { data, loading, error } = usePalette(img)
            return data.darkVibrant
        }
   

    return(

        <div id={style} className="card color">
                <img src={src} />
                <div className="card-overlay">
                    <div className="card-circle" style={{background:data.vibrant}}></div>
                    <div className="card-container">
                        <h2>
                            {name}
                        </h2>
                        <div className="color-flex">
                        <h4>
                            Color:
                            </h4>
                           {numberOfImgs.map((number) => 
                               <span key={number} onClick={()=>setSrc(imgs[number])} style={{background:`${SetPallete(imgs[number])}`}}/>
                           )}
                   
                        </div> 
                        <div className="card-button" style={{background:data.vibrant, fontWeight:'400'}} >Buy</div>
                    </div>
                </div>
        </div>
    )
}