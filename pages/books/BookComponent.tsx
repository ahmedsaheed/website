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
            {/* <strong className="break-all" style={{fontFamily: "Stylish", fontSize: "1.5em"}}>{props.title}</strong>
            */}<p><BookRating rating={props.rating} /></p>
            <h3>{props.author}</h3>

              


            
        </div>
    )
}

export default BookCard
