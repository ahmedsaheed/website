import React, { Component } from "react"
import axios from "axios"
import Link from "next/link"

class Location extends Component {
    state = {
            countryName: "",
            countryCity: "",
            flag: "",
        }
    
     getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data
                this.setState({
                    countryName: data.country_name,
                    countryCity: data.city,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.getGeoInfo()
    }

    render() {
        return (
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/"
                as={`https://en.wikipedia.org/wiki/${this.state.countryName}`}
            >
                {`${this.state.countryCity}, ${this.state.countryName}`}
            </Link>
        )
    }
}
export default Location
