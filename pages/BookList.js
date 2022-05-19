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
                    return <section class="grid grid-cols-1 md:grid-cols-2 md:gap-28 xl:gap-56 space-y-28 md:space-y-0">
                    <BookCard
                    key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        url={book.selfLink}
                    
                    />
                     
                   
                    </section>
                })
            }
        </div>
    )
}

 export default BookList;
