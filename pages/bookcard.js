import React, { Component } from "react"

const BookCard = (props) => {
    return(

            <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src={props.image} alt="Books"/></figure>
            <div class="card-body">
                <p class="card-title">Title: {props.title}</p>
                <p>Author: {props.author}</p>
            <div class="card-actions justify-end">
                <br/>
      {/* <button class="btn btn-primary">Wanna See?</button> */}
      <br/>
      <hr/>
    </div></div></div>
  
    )
}

export default BookCard;