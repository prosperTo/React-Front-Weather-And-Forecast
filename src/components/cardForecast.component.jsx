// Core
import { Component } from  'react'

// Bootstrap
import { Card } from 'react-bootstrap'


class CardForecast extends Component {

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
                    <Card.Title>Fecha {this.props.data.date} </Card.Title>
                        <Card.Text> Temperatura de °C{this.props.data.day} </Card.Text>
                        <Card.Text> Maxima de °C{this.props.data.max} </Card.Text>
                        <Card.Text> Minima de °C{this.props.data.min} </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CardForecast