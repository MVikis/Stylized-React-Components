import React, { useState } from 'react'
import Card from './Card'
import './Card-style.css'
import greyShoe from './greyShoe.png'
import yellowShoe from './yellowShoe.png'
import blueShoe from './blueShoe.png'


export default function CardApp(){
 
const imgs = [greyShoe,yellowShoe,blueShoe]
const[name, setName] = useState("Shoes")
    return(
        <Card name={name} imgs={imgs}/>
       
    )
}