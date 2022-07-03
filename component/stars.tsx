import { IoIosStar } from "react-icons/io"

function BookRating({ rating }: { rating: number }) {
    const stars = []
    if (!rating) {
        let rating = Math.floor(Math.random() * (5 - 1) + 1)
        for (let i = 0; i < rating; i++) {
            stars.push(IoIosStar)
        }
    } else {
        for (let i = 0; i < rating; i++) {
            stars.push(IoIosStar)
        }
    }

    return (
        <>
            {stars.map((Star, i) => (
                <Star key={i} className="inline" />
            ))}
        </>
    )
}

export default BookRating
