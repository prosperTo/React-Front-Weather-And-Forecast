// Core
import { Component } from  'react'
import { Switch, Route } from 'react-router-dom'

// Screens
import { HomeScreen, Forescast } from '../screen/index'

// Components
import { Navigator, Select } from './index'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

class Layout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            option: 'Actual'
        }
    }
    onChangeOption = (e) => this.setState({option: e})

    render() {
        return (
            <Container className="justify-content-center" >
                <Row>
                    <Col>
                        <h1 className="text-center"> Ver el Clima Actual </h1>
                        <Navigator />
                    </Col>
                </Row>
                <Row>
                    <h6> Seleccionar Lugar para mostrar Clima </h6>
                    <Select onChangeOption={(e) => this.onChangeOption(e)} className="mt-2 mb-1"/>
                </Row>
                <Row>
                    <Switch>
                        <Route path="/forecast" render={(props) => <Forescast positionToSearch={this.state.option}  {...props} /> } />
                        <Route path="/" render={(props) => <HomeScreen positionToSearch={this.state.option} {...props} /> } />
                    </Switch>
                </Row>
            </Container>
        )
    }
}

export default Layout