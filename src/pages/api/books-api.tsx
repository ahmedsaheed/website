import React from "react"
import request from "superagent"
import  BookCard  from "../../components/bookcard";

export default function Library() {
    const [books, setBooks] = React.useState([])    
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
          {books.map((book, i) => (
            // @ts-ignore
            <BookCard
              key={i}
                // @ts-ignore

              ranking={book.volumeInfo.averageRating}
                          // @ts-ignore

              link={book.volumeInfo.canonicalVolumeLink}
                          // @ts-ignore

              title={book.volumeInfo.title}
                          // @ts-ignore

              author={book.volumeInfo.authors}
                          // @ts-ignore

              cover={book.volumeInfo.imageLinks.thumbnail}
            />
          ))}
        </div>
    </>
    )
}
