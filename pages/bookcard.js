import React, { Component } from "react"
import BookList from './BookList';

const BookCard = (props) => {
    return(

            <div class="card card-side bg-base-100 shadow-xl">
            <figure><img src={props.image} alt="Movie"/></figure>
            <div class="card-body">
                <p class="card-title">Title: {props.title}</p>
                <p>Author: {props.author}</p>
            <div class="card-actions justify-end">
                <br/>
      {/* <button class="btn btn-primary">Wanna See?</button> */}
      <hr/>
    </div>
  </div>
</div>  
    )
}

export default BookCard;