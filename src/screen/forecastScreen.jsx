// Core
import { Component } from  'react'
import axios from 'axios'
import swal from 'sweetalert'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// Componets
import { CardForecast } from '../components/index'

// ENV
import { ENV } from '../config/env'

class Forescast extends Component {

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
        if(prevProps.positionToSearch !== this.props.positionToSearch) {
            this.loadData()
        }
    }

    async loadData() {
        this.setState({loadingData: true})
        try {
            let url = ENV.URL_API + 'forecast'
            if(this.props.positionToSearch !== 'Actual') url = url + '/' + this.props.positionToSearch
            const respData = await this.getForecastWeather(url)
            this.setState({
                data: respData.data.weather.daily.map((x, i) => {
                    const date = new Date(x.dt*1000)
                    return {...x.temp, date: `Dia ${date.getDate()} - Mes ${date.getMonth()}`}
                }),
                loadingData: false
            })
            
        } catch (e) { swal( "Ocurrio un Problema" ,  "No pudimos obtener la Temperatura" ,  "error" ) }
    }
    async getForecastWeather(url) { try { return await axios({ method: 'GET', url }) } catch (e) { return false }}

    render() {
        return (
            <Container className="justify-content-center" >
                <Row>
                    <Col>
                        {     
                            this.state.loadingData === true ? <div> CARGANDO ...</div> : this.state.data.map((x, i) => (
                                <CardForecast key={i} data={x} />
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Forescast