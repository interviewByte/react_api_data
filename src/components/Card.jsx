import React from "react";

function Card (props) {
    return (
        <div class="top">
        <div class="avatar_left">
            <img 
             src={props.img}
             alt="Avatar-img"
            /> 
        </div>
        <div class="heading">
            <h1>{props.name}</h1>
             <p >Phone:{props.phone}</p>
             <p>Email:{props.email}</p>
             <p>Company:{props.company}</p>
             <p>Website:{props.website}</p>
             <p>Address:{props.address}</p>
        </div>
    </div>
    );

}
export default Card