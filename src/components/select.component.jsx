// Core
import { Component } from  'react'


class Select extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    changeOption = (e) => this.props.onChangeOption(e)

    render() {
        return (
            <select defaultValue={'Actual'} className="form-select" aria-label="Default select example" onChange={(e) => this.changeOption(e.target.value)}>
                <option value="Actual" >Posicion Actual</option>
                <option value="Texas">Texas</option>
                <option value="Andorra">Andorra</option>
                <option value="Roma">Roma</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Miami">Miami</option>
            </select>
        )
    }
}

export default Select