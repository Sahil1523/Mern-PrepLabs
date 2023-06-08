import react from "react";

function Card((image, username, address, onclick)){
    return(
        <div>
            <img src={image} alt="ava">
            <h1>{username}</h1>
            <p>{addrress}</p>
            <button onclick={onclick}>Add</button>
        </div>
    )
}