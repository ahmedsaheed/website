import React, { Component } from "react"
import request from "superagent"
import BookList from "./BookMapper"
import Loader from "../../component/loader"



export default function Books() {
    const [books, setBooks] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    
    React.useEffect(() => {
        request
        .get("https://www.googleapis.com/books/v1/users/101611817084658660916/bookshelves/4/volumes?&startIndex=0&maxResults=40&key=AIzaSyDNMnPGw3yUzfIwUnH3PR4oMJiP-PecbhU")
        .then((data) => {
            setBooks(data.body.items)
            setLoading(false)
        })
    }, [])
    
    return (
        <div>
        {loading ? <Loader /> : <BookList books={books} />}
        </div>
    )
}
