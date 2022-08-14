import React, { Component } from "react"
import request from "superagent"
import books from "."
import BookList from "./BookMapper"
import Loader from "../../component/loader"

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
        }
    }
    componentDidMount() {
        request
            .get(
                "https://www.googleapis.com/books/v1/users/101611817084658660916/bookshelves/4/volumes?&startIndex=0&maxResults=40&key=AIzaSyDNMnPGw3yUzfIwUnH3PR4oMJiP-PecbhU",
            )
            .query(null)
            .then((data) => {
                this.setState({ books: [...data.body.items] })
            })
    }

    render() {
        return (
            <div className="bookpad mx-auto max-w-3xl space-y-5">
                {books.length < 1 ?  <Loader/>:   <BookList books={this.state.books} />} 
            </div>
        )
    }
}

export default Book
