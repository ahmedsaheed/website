import React, { Component } from "react"
import axios from 'axios'
class Location extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: '',
            countryCode: ''
        }
    }
    getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            this.setState({
                countryName: data.country_name,
                countryCode: data.country_calling_code
              
            });
           
        }).catch((error) => {
            console.log(error);
        });
    };
    componentDidMount() {
        this.getGeoInfo();
    }

    render() {
        return (
            <>
                {this.state.countryName}
                </>
        )
    }
}
export default Location;