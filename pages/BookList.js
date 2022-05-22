import React, { Component } from "react"
import BookCard from './bookcard';

const BookList = (props) => {
    if(!props){
        return null;
    }
    return(
       <div>
            {
                props && props.books?.map((book, i) => {
                    return <div class="grid-container">
                    <BookCard
                    key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        url={book.volumeInfo.canonicalVolumeLink}
                        rating={book.volumeInfo.averageRating}
                    
                    />
                    </div>
                    
                })
            }
        </div>
    )
}

 export default BookList;
