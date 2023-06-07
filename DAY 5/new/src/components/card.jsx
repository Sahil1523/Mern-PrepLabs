import React from "react";
import {FcLike} from "react-icons/fc"
import './card.css';


function Card() {
    return (
        <div className="card">
        <h1>Itachi</h1>
        <div className="container">
        <img src={"https://picsum.photos/id/1/300/300"} alt="image" /><br></br>
        <p><FcLike/>This is a random post</p>
        </div>
        </div>    
    )   
}

export default Card;