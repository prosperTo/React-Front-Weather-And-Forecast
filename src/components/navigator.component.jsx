// Core
import { Component } from  'react'
import { Link } from 'react-router-dom';

// Bootstrap
import { Nav } from 'react-bootstrap'


class Navigator extends Component {

    constructor(props) {
        super(props)
        this.state = {
            actualRoute: '/'
        }
    }

    setRoute = (route) => this.setState({actualRoute: route})

    render() {
        return (
            <Nav variant="pills" defaultActiveKey="/" className="justify-content-center">
                <Link className={`mr-5 btn btn-primary ${this.state.actualRoute === '/' ? 'active' : ''}`} to="/" onClick={ () => this.setRoute('/')} >Tiempo Actual</Link>
                <Link className={`btn btn-primary ${this.state.actualRoute === '/forecast' ? 'active' : ''}`} to="/forecast" onClick={ () => this.setRoute('/forecast')} >Pronostico 5 Dias</Link>
            </Nav>
        )
    }
}

export default Navigator