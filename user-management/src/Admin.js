import React, {Component} from 'react';
import { useParams } from 'react-router';
import * as ReactBootStrap from "react-bootstrap";

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flights: [],
            isLoading: false,
            isError: false
        }
    }

    async componentDidMount() {
        this.setState({isLoading: true})
        const response = await await fetch("http://localhost:9090/flight/listFlights")
        if (response.ok) {
            const flights = await response.json()
            console.log(flights)
            this.setState({flights, isLoading:false})
        } else {
            this.setState({isError:true, isLoading:false })
        }
    }

    renderTableHeader= () => {
        return Object.keys(this.state.flights[0]).map(attr => <th key={attr}>
            {attr.toUpperCase()}
        </th>)
    }

    renderTableRows= () => {
        return this.state.flights.map(flight => {
            return(
                <tr key={flight.id}>
                    <td>{flight.id}</td>
                    <td>{flight.flightNo}</td>
                    <td>{flight.flightName}</td>
                    <td>{flight.src}</td>
                    <td>{flight.dest}</td>
                    <td>{flight.date}</td>
                </tr>
            )
        })
    }

    render() {
        const {flights, isLoading, isError} = this.state
        if (isLoading){
            return <div>Loading...</div>
        }
        if (isError){
            return <div>Error...</div>
        }
        return flights.length > 0 ? (
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>{this.renderTableHeader()}</tr>
                </thead>
                <tbody>{this.renderTableRows()}</tbody>
            </ReactBootStrap.Table>
        ):(
            <div>No Flights</div>
        )
    }
}

export default Admin