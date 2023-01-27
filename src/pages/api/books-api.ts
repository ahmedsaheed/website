import React from "react"
import request from "superagent"



export default function bookData() {
    const [books, setBooks] = React.useState([])
    
    React.useEffect(() => {
        request
        .get("https://www.googleapis.com/books/v1/users/101611817084658660916/bookshelves/4/volumes?&startIndex=0&maxResults=40&key=AIzaSyDNMnPGw3yUzfIwUnH3PR4oMJiP-PecbhU")
        .then((data: any ) => {
            setBooks(data.body.items)
        })
    }, [])
    console.log(books)
    
    return books as []
     
}
