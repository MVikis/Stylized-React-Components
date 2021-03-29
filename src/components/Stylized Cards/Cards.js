import React from 'react'
import CardApp from './ColorCards/CardApp'
import {Card} from './3dCard/Card'

export const Cards = () => {

    return(
        <div className="row">
            <CardApp />
            <Card />
        </div>
    )
}