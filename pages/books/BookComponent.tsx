import React from "react"
import BookRating from "../../component/stars"

const BookCard = (props: any) => {
    return (
        <div className="grid-item">
            <a href={props.url}>
                <img
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "7px" }}
                    src={props.image}
                    alt="Books"
                />
            </a>
            <h3 style={{fontFamily: "Stylish"}}>{props.title}</h3>
            <BookRating rating={props.rating} />
            <h3>{props.author}</h3>

              


            
        </div>
    )
}

export default BookCard
