import { React } from "react"

const BookCard = (props) => {
    return (
        <div class="grid-item">
            <h3 class="feature-title" />
            <h3>{props.title}</h3>
            <h3>{props.author}</h3>
            <p>Rating: {props.rating}</p>

            <a href={props.url}>
                <center>
                    <img src={props.image} alt="Books" />
                </center>
            </a>
        </div>
    )
}

export default BookCard
