import React, { Component } from "react"
import request from "superagent"
import BookList from "./BookMapper"
import Loader from "../../component/loader"

class Books extends Component {
    state = {
        books: [],
        loading: true,
    }
    componentDidMount() {
        this.getBooks()
    }
    getBooks = async () => {
        const res = await request.get(
            "https://www.googleapis.com/books/v1/users/101611817084658660916/bookshelves/4/volumes?&startIndex=0&maxResults=40&key=AIzaSyDNMnPGw3yUzfIwUnH3PR4oMJiP-PecbhU",
        )
        this.setState({ books: res.body.items, loading: false })
    }
    render() {
        const { books, loading } = this.state
        return <div className="bookpad">{loading ? <Loader /> : <BookList books={books} />}</div>
    }
}
export default Books
