import React from "react"

import '/Titulo.css'

export default function Titulo(proops){
    return (
            <div className="titulo">
                 
                <h2> {proops.texto}Titulo</h2>
                
            </div>
        )
}