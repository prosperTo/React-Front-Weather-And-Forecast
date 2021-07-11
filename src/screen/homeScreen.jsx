// Core
import { Component } from  'react'
import axios from 'axios'
import swal from 'sweetalert'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// Componets
import { CardWeather } from '../components/index'

// ENV
import { ENV } from '../config/env'


class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loadingData: true,
            data: null
        }
    }

    componentDidMount() {
        this.loadData()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.positionToSearch !== this.props.positionToSearch) this.loadData()
    }

    async loadData() {
        this.setState({loadingData: true})
        try {
            let url = ENV.URL_API + 'current'
            if(this.props.positionToSearch !== 'Actual') url = url + '/' + this.props.positionToSearch
            const respData = await this.getLocationWeather(url)
            const date = new Date()
            this.setState({
                data: {
                    weather: [respData.data.data.weather.main],
                    date: `Dia ${date.getDate()} - Mes ${date.getMonth()}`,
                },
                loadingData: false
            })
            
        } catch (e) { swal( "Ocurrio un Problema" ,  "No pudimos obtener la Temperatura" ,  "error" ) }
    }
    async getLocationWeather(url) { try { return await axios({ method: 'GET', url }) } catch (e) { return false }}

    render() {
        return (
            <Container className="justify-content-center" >
                <Row>
                    <Col>
                        {
                            this.state.loadingData === true ? <div> CARGANDO ...</div> : this.state.data.weather.map((x, i) => (
                                <CardWeather key={i} data={x} date={this.state.data.date} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default HomeScreen