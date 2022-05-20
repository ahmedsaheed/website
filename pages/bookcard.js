import React, { Component } from "react"

const BookCard = (props) => {
    return(

     
        <div class="grid-item">
                <h1 class="feature-title"/><h1>{props.title}</h1>
                <h1>{props.author}</h1>
                <p>Rating: {props.rating}</p>

                <a href={props.url}>
                <center><img src={props.image} alt="Books"/></center>
                </a>
                

            </div>
    
    )
}

export default BookCard;