import React, { Component } from "react"
import BookCard from "./BookComponent"
import Loader from "../../component/loader"
const BookList = (props: any) => {
    if (!props) {
        return <Loader />
    }
    return (
        <div>
            {props &&
                props.books?.map((book: any, i: any) => {
                    return (
                        <div className="grid-container">
                            <BookCard
                                key={i}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                url={book.volumeInfo.canonicalVolumeLink}
                                rating={book.volumeInfo.averageRating}
                            />
                        </div>
                    )
                })}
        </div>
    )
}

export default BookList
