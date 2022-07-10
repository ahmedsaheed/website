import { React } from "react"
import BookRating from "../../component/stars"

const BookCard = (props) => {
    return (
        <div className="grid-item">
            <h3 className="feature-title" />
            <h3>{props.title}</h3>
            <h3>{props.author}</h3>
            <p>
                Rating: <BookRating rating={props.rating} />
            </p>

            <a href={props.url}>
                <center>
                    <img src={props.image} alt="Books" />
                </center>
            </a>
        </div>
    )
}

export default BookCard
