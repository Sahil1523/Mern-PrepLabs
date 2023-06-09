import React from "react";
import './card.css'

export const Card = ({passenger, image, title, country, trips}) =>{

    return(
         <div className="Card">
            <p className="title">{title}</p>
            
         </div>
    )
}


export default Card;