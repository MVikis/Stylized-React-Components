import React, { useState } from 'react'
import Card from './Card'
import './Card-style.css'
import greyShoe from '../../../imgs/greyShoe.png'
import yellowShoe from '../../../imgs/yellowShoe.png'
import blueShoe from '../../../imgs/blueShoe.png'


export default function CardApp({style}){
 
const imgs = [greyShoe,yellowShoe,blueShoe]
const[name, setName] = useState("Shoes")
    return(
        <Card style={style} name={name} imgs={imgs}/>
       
    )
}