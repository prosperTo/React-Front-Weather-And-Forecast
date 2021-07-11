// Core
import { Component } from  'react'

// Bootstrap
import { Card } from 'react-bootstrap'


class CardWeather extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <Card style={{ width: '18rem', marginTop: '10px' }}>
                <Card.Body>
                    <Card.Title>Fecha {this.props.date}</Card.Title>
                        <Card.Text> Temperatura de °C{this.props.data.temp} </Card.Text>
                        <Card.Text> Maxima de °C{this.props.data.temp_max} </Card.Text>
                        <Card.Text> Minima de °C{this.props.data.temp_min} </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CardWeather