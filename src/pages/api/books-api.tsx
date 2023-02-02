import React from "react"
import request from "superagent"
import  BookCard  from "../../components/bookcard";

export default function Library() {
    const [books, setBooks] = React.useState<any>([])    
    React.useEffect(() => {
        request
        .get("https://www.googleapis.com/books/v1/users/101611817084658660916/bookshelves/4/volumes?&startIndex=0&maxResults=40&key=AIzaSyDNMnPGw3yUzfIwUnH3PR4oMJiP-PecbhU")
        .then((data: any ) => {
            setBooks(data.body.items)
        })
    }, [])
    
    return(

    
    <>
    <div className="books">
          {books.map((book: any, i: React.Key | null | undefined) => (
            <BookCard
              key={i}
              ranking={book.volumeInfo.averageRating}
              link={book.volumeInfo.canonicalVolumeLink}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              cover={book.volumeInfo.imageLinks.thumbnail}
            />
          ))}
        </div>
    </>
    )
}
